import { useState, useEffect, useCallback } from "react";
import { coursesData, type Course } from "@/data/courses";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load courses
  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/courses");
      if (!res.ok) {
        throw new Error("Failed to fetch courses from server");
      }
      const data: Course[] = await res.json();
      setCourses(data);
      // Cache locally
      localStorage.setItem("kips_courses", JSON.stringify(data));
    } catch (err: any) {
      console.warn("API fetch failed, falling back to local storage or static data:", err);
      // Try local storage
      const cached = localStorage.getItem("kips_courses");
      if (cached) {
        try {
          setCourses(JSON.parse(cached));
        } catch {
          setCourses(coursesData);
        }
      } else {
        setCourses(coursesData);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Add course
  const addCourse = async (newCourse: Course) => {
    const updated = [...courses, newCourse];
    // Optimistic update
    setCourses(updated);
    localStorage.setItem("kips_courses", JSON.stringify(updated));

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", course: newCourse }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to create course");
      }
      const data = await res.json();
      if (data.courses) {
        setCourses(data.courses);
        localStorage.setItem("kips_courses", JSON.stringify(data.courses));
      }
      return { success: true };
    } catch (err: any) {
      console.error("Failed to sync new course with server:", err);
      return { success: false, error: err.message || "Failed to save on server" };
    }
  };

  // Update course
  const updateCourse = async (slug: string, updatedCourse: Course) => {
    const updated = courses.map((c) => (c.slug === slug ? updatedCourse : c));
    // Optimistic update
    setCourses(updated);
    localStorage.setItem("kips_courses", JSON.stringify(updated));

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update", slug, course: updatedCourse }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to update course");
      }
      const data = await res.json();
      if (data.courses) {
        setCourses(data.courses);
        localStorage.setItem("kips_courses", JSON.stringify(data.courses));
      }
      return { success: true };
    } catch (err: any) {
      console.error("Failed to sync updated course with server:", err);
      return { success: false, error: err.message || "Failed to save on server" };
    }
  };

  // Delete course
  const deleteCourse = async (slugToDelete: string) => {
    const updated = courses.filter((c) => c.slug !== slugToDelete);
    // Optimistic update
    setCourses(updated);
    localStorage.setItem("kips_courses", JSON.stringify(updated));

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", slug: slugToDelete }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to delete course");
      }
      const data = await res.json();
      if (data.courses) {
        setCourses(data.courses);
        localStorage.setItem("kips_courses", JSON.stringify(data.courses));
      }
      return { success: true };
    } catch (err: any) {
      console.error("Failed to sync deleted course with server:", err);
      return { success: false, error: err.message || "Failed to delete from server" };
    }
  };

  return {
    courses,
    loading,
    error,
    addCourse,
    updateCourse,
    deleteCourse,
    refresh: fetchCourses,
  };
}
