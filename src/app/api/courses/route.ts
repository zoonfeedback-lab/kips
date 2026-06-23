import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { coursesData, type Course } from "@/data/courses";

const jsonFilePath = path.join(process.cwd(), "src", "data", "courses.json");

async function getCoursesList(): Promise<Course[]> {
  try {
    const fileExists = await fs.access(jsonFilePath).then(() => true).catch(() => false);
    if (!fileExists) {
      // Ensure the directory exists
      const dirPath = path.dirname(jsonFilePath);
      await fs.mkdir(dirPath, { recursive: true });
      // Create the file with initial data from courses.ts
      await fs.writeFile(jsonFilePath, JSON.stringify(coursesData, null, 2), "utf-8");
      return coursesData;
    }
    const fileContent = await fs.readFile(jsonFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading courses JSON:", error);
    return coursesData;
  }
}

async function saveCoursesList(courses: Course[]): Promise<boolean> {
  try {
    const dirPath = path.dirname(jsonFilePath);
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(jsonFilePath, JSON.stringify(courses, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error saving courses JSON:", error);
    return false;
  }
}

export async function GET() {
  const courses = await getCoursesList();
  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, course, slug } = body;

    let courses = await getCoursesList();

    if (action === "create") {
      if (!course || !course.slug || !course.title) {
        return NextResponse.json({ error: "Missing required course fields" }, { status: 400 });
      }
      if (courses.some((c) => c.slug === course.slug)) {
        return NextResponse.json({ error: "A course with this slug already exists" }, { status: 400 });
      }
      courses.push(course);
    } else if (action === "update") {
      if (!slug || !course) {
        return NextResponse.json({ error: "Missing slug or course data for update" }, { status: 400 });
      }
      const index = courses.findIndex((c) => c.slug === slug);
      if (index === -1) {
        return NextResponse.json({ error: "Course not found" }, { status: 404 });
      }
      // Keep safety checks
      courses[index] = { ...courses[index], ...course };
    } else if (action === "delete") {
      if (!slug) {
        return NextResponse.json({ error: "Missing slug for deletion" }, { status: 400 });
      }
      courses = courses.filter((c) => c.slug !== slug);
    } else if (action === "saveAll") {
      if (!body.courses || !Array.isArray(body.courses)) {
        return NextResponse.json({ error: "Invalid courses array for bulk save" }, { status: 400 });
      }
      courses = body.courses;
    } else {
      return NextResponse.json({ error: "Invalid action type" }, { status: 400 });
    }

    const saved = await saveCoursesList(courses);
    if (!saved) {
      return NextResponse.json({ error: "Failed to save data on server filesystem" }, { status: 500 });
    }

    return NextResponse.json({ success: true, courses });
  } catch (error: any) {
    console.error("API POST error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
