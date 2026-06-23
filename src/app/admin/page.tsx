"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCourses } from "@/hooks/useCourses";
import { type Course } from "@/data/courses";
import { Icons } from "@/components/Icons";

const AVAILABLE_CAMPUSES = [
  "Haripur (Shah Maqsood)",
  "Abbottabad",
  "Mansehra",
  "Shinkiari",
  "Baffa",
  "Mirpur (AJ&K)",
  "Garhi Habibullah"
];

const AVAILABLE_CATEGORIES = [
  "IT",
  "Professional",
  "Academic",
  "Vocational",
  "Psychology & Parenting",
  "Dr. Mudassar Seminars"
];

const AVAILABLE_ICONS = [
  { name: "Monitor", label: "Monitor / IT" },
  { name: "Code", label: "Code / Programming" },
  { name: "Cpu", label: "CPU / AI" },
  { name: "PenTool", label: "Pen Tool / Design" },
  { name: "Briefcase", label: "Briefcase / Professional" },
  { name: "GraduationCap", label: "Cap / Academic" },
  { name: "Brain", label: "Brain / Psychology" },
  { name: "Scissors", label: "Scissors / Vocational" },
  { name: "Clipboard", label: "Clipboard / Seminars" },
  { name: "ShieldCheck", label: "Shield / Safety" }
];

const categoryColors: { [key: string]: string } = {
  "IT": "text-blue-600 bg-blue-50 border-blue-150",
  "Professional": "text-orange-600 bg-orange-50 border-orange-150",
  "Academic": "text-indigo-600 bg-indigo-50 border-indigo-150",
  "Vocational": "text-pink-600 bg-pink-50 border-pink-150",
  "Psychology & Parenting": "text-violet-600 bg-violet-50 border-violet-150",
  "Dr. Mudassar Seminars": "text-teal-600 bg-teal-50 border-teal-150"
};

// Helper to resolve icon dynamically
function getIcon(name: string, className: string = "h-4 w-4") {
  const IconComponent = Icons[name as keyof typeof Icons];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { courses, loading, error, addCourse, updateCourse, deleteCourse } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Editor Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSlug, setEditingSlug] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [urduTitle, setUrduTitle] = useState("");
  const [category, setCategory] = useState("IT");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("");
  const [iconName, setIconName] = useState("Monitor");
  const [duration, setDuration] = useState("");
  const [certificate, setCertificate] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [campuses, setCampuses] = useState<string[]>([]);
  const [learningOutcomes, setLearningOutcomes] = useState<string[]>([""]);
  const [syllabus, setSyllabus] = useState<string[]>([""]);

  // Local clock state for dashboard
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateClock = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      };
      updateClock();
      const interval = setInterval(updateClock, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  // Passcode verification
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "kipsadmin") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect passcode. Please try again.");
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setSlug(generated);
    }
  };

  // Open modal for Create
  const openCreateModal = () => {
    setIsEditing(false);
    setEditingSlug("");
    setTitle("");
    setSlug("");
    setUrduTitle("");
    setCategory("IT");
    setDetail("");
    setImage("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800");
    setIconName("Monitor");
    setDuration("3 Months");
    setCertificate("KP Board of Technical Education Certified");
    setPrerequisites("Matriculation (Science or Arts) or equivalent.");
    setCampuses(["Haripur (Shah Maqsood)", "Abbottabad"]);
    setLearningOutcomes(["Master core skills and hands-on professional concepts.", "Acquire official Technical Board certification on completion."]);
    setSyllabus(["Module 1: Professional Foundation Studies", "Module 2: Practical Exercises and Final Capstone Project"]);
    setFormError("");
    setFormSuccess("");
    setIsModalOpen(true);
  };

  // Open modal for Edit
  const openEditModal = (course: Course) => {
    setIsEditing(true);
    setEditingSlug(course.slug);
    setTitle(course.title);
    setSlug(course.slug);
    setUrduTitle(course.urduTitle || "");
    setCategory(course.category || "IT");
    setDetail(course.detail || "");
    setImage(course.image || "");
    setIconName(course.iconName || "Monitor");
    setDuration(course.duration || "");
    setCertificate(course.certificate || "");
    setPrerequisites(course.prerequisites || "");
    setCampuses(course.campuses || []);
    setLearningOutcomes(course.learningOutcomes && course.learningOutcomes.length > 0 ? course.learningOutcomes : [""]);
    setSyllabus(course.syllabus && course.syllabus.length > 0 ? course.syllabus : [""]);
    setFormError("");
    setFormSuccess("");
    setIsModalOpen(true);
  };

  // Dynamic Array Handlers
  const handleAddOutcome = () => setLearningOutcomes([...learningOutcomes, ""]);
  const handleRemoveOutcome = (index: number) => {
    const next = [...learningOutcomes];
    next.splice(index, 1);
    setLearningOutcomes(next.length === 0 ? [""] : next);
  };
  const handleOutcomeChange = (index: number, val: string) => {
    const next = [...learningOutcomes];
    next[index] = val;
    setLearningOutcomes(next);
  };

  const handleAddSyllabus = () => setSyllabus([...syllabus, ""]);
  const handleRemoveSyllabus = (index: number) => {
    const next = [...syllabus];
    next.splice(index, 1);
    setSyllabus(next.length === 0 ? [""] : next);
  };
  const handleSyllabusChange = (index: number, val: string) => {
    const next = [...syllabus];
    next[index] = val;
    setSyllabus(next);
  };

  const handleCampusToggle = (campus: string) => {
    if (campuses.includes(campus)) {
      setCampuses(campuses.filter((c) => c !== campus));
    } else {
      setCampuses([...campuses, campus]);
    }
  };

  // Form Submit
  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    setIsSubmitting(true);

    if (!title || !slug || !duration || !category) {
      setFormError("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    const courseData: Course = {
      title,
      slug,
      urduTitle,
      category,
      detail,
      image,
      iconName,
      duration,
      certificate,
      prerequisites,
      campuses: campuses.filter(Boolean),
      learningOutcomes: learningOutcomes.filter(Boolean),
      syllabus: syllabus.filter(Boolean),
    };

    let result;
    if (isEditing) {
      result = await updateCourse(editingSlug, courseData);
    } else {
      result = await addCourse(courseData);
    }

    setIsSubmitting(false);
    if (result.success) {
      setFormSuccess(isEditing ? "Course updated successfully!" : "Course created successfully!");
      setTimeout(() => {
        setIsModalOpen(false);
      }, 1200);
    } else {
      setFormError(result.error || "Failed to save course.");
    }
  };

  // Delete Handler
  const handleDeleteClick = async (courseSlug: string, courseTitle: string) => {
    if (confirm(`Are you sure you want to permanently delete "${courseTitle}"? This cannot be undone.`)) {
      const res = await deleteCourse(courseSlug);
      if (!res.success) {
        alert(`Failed to delete course: ${res.error}`);
      }
    }
  };

  // Filter courses
  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.urduTitle && c.urduTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.slug.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Render Gate Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex font-body bg-kips-navy-950">
        
        {/* Left Pane - Visual Branding Cover */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-kips-navy-950 overflow-hidden items-center justify-center p-16">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Campus Library"
              className="h-full w-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-kips-navy-950 via-kips-navy-950/70 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-md text-white flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <img src="/logo.PNG" alt="KIPS Logo" className="h-8 w-auto object-contain" />
              </div>
              <div>
                <span className="font-display text-sm font-extrabold block leading-tight">Keyan Institute</span>
                <span className="text-[0.62rem] font-bold text-kips-yellow-500 uppercase tracking-widest block mt-0.5">Control Center</span>
              </div>
            </div>

            <div className="h-px bg-white/15 w-20" />

            <h2 className="font-display text-3xl font-extrabold tracking-tight leading-tight">
              Academic Excellence & Professional Skills Development
            </h2>

            <p className="text-xs text-white/60 leading-relaxed">
              Manage study programs, safety courses, technical diplomas, and certificate pathways across all regional campus branches.
            </p>

            <blockquote className="border-l-4 border-kips-yellow-500 pl-4 py-1 italic text-white/80 text-xs mt-4">
              "Providing accredited tech-vocational training, teacher development, and executive test preparation."
            </blockquote>
          </div>
        </div>

        {/* Right Pane - Passcode Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-16 bg-radial from-kips-navy-900 to-kips-navy-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,185,32,0.06),transparent_35%)] z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(8,85,164,0.1),transparent_35%)] z-0" />

          <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative z-10 text-white animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="h-16 w-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner mb-4 lg:hidden">
                <img src="/logo.PNG" alt="KIPS Logo" className="h-11 w-auto object-contain" />
              </div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight">Admin Console</h1>
              <p className="mt-2 text-xs text-white/50 leading-relaxed max-w-[280px]">
                Access restricted to academic advisors. Please provide the security passcode.
              </p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-[0.62rem] font-bold uppercase tracking-wider text-white/60">Passcode Gate</label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[0.62rem] font-bold text-kips-yellow-500 hover:text-kips-yellow-400 transition-colors uppercase tracking-wider flex items-center gap-1"
                  >
                    {showPassword ? (
                      <>
                        <Icons.EyeOff className="h-3 w-3" /> Hide
                      </>
                    ) : (
                      <>
                        <Icons.Eye className="h-3 w-3" /> Show
                      </>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-base text-white placeholder:text-white/20 outline-none focus:border-kips-yellow-500/50 focus:ring-2 focus:ring-kips-yellow-500/10 transition-all text-center tracking-widest font-mono"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                    <Icons.Lock className="h-4.5 w-4.5" />
                  </div>
                </div>
              </div>

              {authError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl py-2.5 px-3 text-[0.7rem] text-red-300 font-bold text-center flex items-center justify-center gap-1.5 animate-shake">
                  <Icons.AlertCircle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-kips-yellow-500 py-3.5 text-xs font-bold uppercase tracking-widest text-kips-navy-900 transition-all hover:bg-kips-yellow-600 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-kips-yellow-500/15"
              >
                Verify Credentials
              </button>
            </form>
          </div>
        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50 font-body pb-20">
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-kips-navy-900 border-b border-white/10 text-white backdrop-blur-md bg-opacity-95 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center">
              <img src="/logo.PNG" alt="KIPS" className="h-7 w-auto object-contain" />
            </div>
            <div>
              <span className="font-display text-sm font-extrabold block leading-tight">Keyan Institute</span>
              <span className="text-[0.62rem] font-bold text-white/50 uppercase tracking-widest block mt-0.5">Control Center</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right leading-none">
              <span className="text-[0.62rem] font-bold text-white/40 uppercase tracking-wider">System Live Time</span>
              <span className="text-xs font-mono font-bold text-kips-yellow-500 mt-1">{currentTime || "00:00:00"}</span>
            </div>
            
            <div className="h-6 w-px bg-white/10 hidden md:block" />

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-lg bg-white/10 hover:bg-white/15 px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:scale-102 flex items-center gap-1.5"
              >
                <Icons.Globe className="h-3.5 w-3.5 text-white/80" /> View Site
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="rounded-lg bg-red-650 hover:bg-red-700 px-3.5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Icons.Lock className="h-3.5 w-3.5 text-white/80" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 animate-in fade-in duration-300">
        
        {/* Statistics Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs flex items-center justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
            <div>
              <span className="text-[0.68rem] text-kips-text-400 font-bold uppercase tracking-wider block mb-1">Total Active Courses</span>
              <span className="text-3xl font-extrabold text-kips-text-900 leading-none">{courses.length}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner">
              <Icons.BookOpen className="h-5 w-5" />
            </div>
          </div>
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs flex items-center justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
            <div>
              <span className="text-[0.68rem] text-kips-text-400 font-bold uppercase tracking-wider block mb-1">Active Categories</span>
              <span className="text-3xl font-extrabold text-kips-text-900 leading-none">
                {new Set(courses.map((c) => c.category)).size}
              </span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-655 flex items-center justify-center border border-orange-100 shadow-inner">
              <Icons.Clipboard className="h-5 w-5" />
            </div>
          </div>
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs flex items-center justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
            <div>
              <span className="text-[0.68rem] text-kips-text-400 font-bold uppercase tracking-wider block mb-1">Campus Coverage</span>
              <span className="text-3xl font-extrabold text-kips-text-900 leading-none">{AVAILABLE_CAMPUSES.length}</span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100 shadow-inner">
              <Icons.Building className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Dashboard Filters & Actions Panel */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs mb-8 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Icons.Search className="h-3.5 w-3.5" />
              </div>
              <input
                type="text"
                placeholder="Search course title, slug, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2.5 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none focus:border-kips-navy-900/40 focus:bg-white transition-all font-semibold"
              />
            </div>
            
            {/* Category dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-700 outline-none cursor-pointer hover:bg-white transition-all font-semibold"
            >
              <option value="All">All Categories</option>
              {AVAILABLE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button
            onClick={openCreateModal}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-kips-navy-900 hover:bg-kips-navy-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md hover:scale-101 active:scale-100"
          >
            <Icons.Plus className="h-4 w-4" /> Add New Course
          </button>
        </div>

        {/* Data list view */}
        {loading ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-20 text-center shadow-xs">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-kips-navy-900 border-r-transparent align-[-0.125em] mb-4" />
            <p className="text-xs font-bold uppercase tracking-widest text-kips-text-400">Loading data directory...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center shadow-xs flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-250 flex items-center justify-center mb-3">
              <Icons.Clipboard className="h-5 w-5 text-gray-400" />
            </div>
            <h4 className="font-display text-base font-bold text-kips-text-900">No Courses Found</h4>
            <p className="mt-1 text-xs text-kips-text-400">Try modifying your filter categories or clear the search keywords.</p>
          </div>
        ) : (
          <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-150 text-left">
                <thead className="bg-gray-50/75 text-[0.65rem] font-bold text-kips-text-450 uppercase tracking-widest border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-5">Syllabus Details</th>
                    <th className="px-6 py-5">Category & Icon</th>
                    <th className="px-6 py-5">Duration</th>
                    <th className="px-6 py-5">Accreditation Body</th>
                    <th className="px-6 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 text-xs text-kips-text-750">
                  {filteredCourses.map((c) => (
                    <tr key={c.slug} className="hover:bg-gray-50/30 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex gap-4 items-center">
                          <img src={c.image} alt="" className="h-11 w-11 rounded-lg object-cover bg-gray-100 flex-shrink-0 border border-gray-200" />
                          <div>
                            <div className="font-extrabold text-[0.88rem] text-kips-text-900 leading-tight">{c.title}</div>
                            <div className="text-[0.72rem] text-kips-navy-700 font-bold mt-1" dir="rtl">{c.urduTitle}</div>
                            <div className="text-[0.62rem] text-kips-text-400 font-mono mt-0.5">{c.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-7.5 w-7.5 items-center justify-center rounded-lg ${categoryColors[c.category] || "text-gray-600 bg-gray-50"} border shadow-inner`}>
                            {getIcon(c.iconName, "h-3.5 w-3.5")}
                          </div>
                          <span className="text-[0.68rem] font-bold uppercase tracking-wider text-kips-text-700">
                            {c.category}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-bold text-kips-text-800">{c.duration}</td>
                      <td className="px-6 py-5 text-kips-text-500 max-w-xs truncate font-medium">{c.certificate}</td>
                      <td className="px-6 py-5 text-right border-0">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditModal(c)}
                            className="rounded-lg bg-gray-100 hover:bg-kips-yellow-500 hover:text-kips-navy-900 px-3 py-2 text-xs font-bold text-kips-text-750 transition-all cursor-pointer flex items-center gap-1 border border-gray-200/50"
                          >
                            <Icons.PenLine className="h-3.5 w-3.5" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(c.slug, c.title)}
                            className="rounded-lg bg-red-50 hover:bg-red-650 hover:text-white px-3 py-2 text-xs font-bold text-red-650 transition-all cursor-pointer border border-red-150 flex items-center gap-1"
                          >
                            <Icons.Trash className="h-3.5 w-3.5" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* CREATE / EDIT COURSE MODAL WITH SIDE-BY-SIDE LIVE PREVIEW */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-kips-navy-950/40 backdrop-blur-xs transition-opacity animate-fade-in" onClick={() => setIsModalOpen(false)} />

          {/* Form Card (wider max-w-6xl for side-by-side card preview) */}
          <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-150 flex justify-between items-center bg-gray-50/75">
              <div>
                <h3 className="font-display text-base font-bold text-kips-text-900 flex items-center gap-2">
                  {isEditing ? (
                    <Icons.Settings className="h-5 w-5 text-kips-navy-950" />
                  ) : (
                    <Icons.Sparkles className="h-5 w-5 text-kips-yellow-500" />
                  )}
                  {isEditing ? `Modify: ${title || "Course Details"}` : "Create New Course"}
                </h3>
                <p className="text-[0.68rem] text-kips-text-400 mt-0.5">Real-time local data sync and interactive desktop view preview card.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-kips-text-400 hover:text-kips-text-900 transition-colors p-2 rounded-xl hover:bg-gray-200/50 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal Inner Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
                
                {/* Left Side: Form Editor */}
                <div className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Title */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Course Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Graphic Designing"
                        value={title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white transition-all font-semibold"
                      />
                    </div>

                    {/* Slug */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Shorthand Slug <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        disabled={isEditing}
                        type="text"
                        placeholder="e.g. graphic-designing"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white disabled:opacity-60 transition-all font-mono"
                      />
                    </div>

                    {/* Urdu Title */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Urdu Heading Title
                      </label>
                      <input
                        type="text"
                        placeholder="گرافک ڈیزائننگ"
                        value={urduTitle}
                        onChange={(e) => setUrduTitle(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white text-right font-semibold"
                        dir="rtl"
                      />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs text-kips-text-700 outline-none cursor-pointer hover:bg-white transition-all font-semibold"
                      >
                        {AVAILABLE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Visual Image URL
                      </label>
                      <input
                        type="text"
                        placeholder="https://images.pexels.com/..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Course Duration <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. 3 Months"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white transition-all font-semibold"
                      />
                    </div>

                    {/* Certificate */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Certification/Affiliation Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Trade Testing Board Certified"
                        value={certificate}
                        onChange={(e) => setCertificate(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Icon Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Visual Header Icon
                      </label>
                      <select
                        value={iconName}
                        onChange={(e) => setIconName(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs text-kips-text-700 outline-none cursor-pointer hover:bg-white transition-all font-semibold"
                      >
                        {AVAILABLE_ICONS.map((i) => (
                          <option key={i.name} value={i.name}>{i.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description Bio */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                      Summary Bio / Brief Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief 1-2 sentence core syllabus details..."
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                      className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white resize-none transition-all"
                    />
                  </div>

                  {/* Prerequisites */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                      Entry Requirements
                    </label>
                    <input
                      type="text"
                      placeholder="Matriculation or basic computing operations."
                      value={prerequisites}
                      onChange={(e) => setPrerequisites(e.target.value)}
                      className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Campuses Checkboxes */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                      Campuses Offering This Program
                    </label>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      {AVAILABLE_CAMPUSES.map((c) => {
                        const isChecked = campuses.includes(c);
                        return (
                          <label key={c} className="inline-flex items-center gap-2 text-xs font-bold text-kips-text-750 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleCampusToggle(c)}
                              className="h-4 w-4 rounded border-gray-300 text-kips-navy-900 focus:ring-kips-navy-900 cursor-pointer"
                            />
                            {c}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Learning Outcomes Dynamic items */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        What You'll Learn (Learning Outcomes)
                      </label>
                      <button
                        type="button"
                        onClick={handleAddOutcome}
                        className="text-[0.65rem] font-bold text-kips-navy-900 bg-kips-navy-900/5 border border-kips-navy-900/10 rounded-md px-2.5 py-1 hover:bg-kips-navy-900/10 transition-colors flex items-center gap-1"
                      >
                        <Icons.Plus className="h-3 w-3" /> Add Outcome Line
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 bg-gray-50/50 p-3 rounded-xl border border-gray-150">
                      {learningOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            placeholder="e.g. Master vector-based drafting and creative layouts."
                            value={outcome}
                            onChange={(e) => handleOutcomeChange(idx, e.target.value)}
                            className="flex-grow rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 transition-all font-semibold"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveOutcome(idx)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded-lg border border-gray-200 hover:text-red-650 transition-colors"
                            title="Remove Outcome Line"
                          >
                            <Icons.Trash className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Syllabus Dynamic items */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-750">
                        Syllabus Modules Outline
                      </label>
                      <button
                        type="button"
                        onClick={handleAddSyllabus}
                        className="text-[0.65rem] font-bold text-kips-navy-900 bg-kips-navy-900/5 border border-kips-navy-900/10 rounded-md px-2.5 py-1 hover:bg-kips-navy-900/10 transition-colors flex items-center gap-1"
                      >
                        <Icons.Plus className="h-3 w-3" /> Add Module Line
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 bg-gray-50/50 p-3 rounded-xl border border-gray-150">
                      {syllabus.map((module, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            placeholder="e.g. Module 1: Introduction to Visual Communication"
                            value={module}
                            onChange={(e) => handleSyllabusChange(idx, e.target.value)}
                            className="flex-grow rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-kips-text-900 outline-none focus:border-kips-navy-900/50 transition-all font-semibold"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveSyllabus(idx)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded-lg border border-gray-200 hover:text-red-650 transition-colors"
                            title="Remove Module Line"
                          >
                            <Icons.Trash className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: LIVE COURSE CARD PREVIEW */}
                <div className="sticky top-0 bg-gray-50 border border-gray-200 p-6 rounded-2xl flex flex-col gap-4">
                  <span className="text-[0.62rem] font-bold uppercase tracking-widest text-kips-text-450 block flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" /> Live Directory Preview
                  </span>

                  {/* Public Card replica */}
                  <div className="w-full max-w-sm mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300">
                    
                    {/* Card Header Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-150">
                      {image ? (
                        <img
                          src={image}
                          alt={title || "Preview Card"}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">
                          No Image Provided
                        </div>
                      )}
                      
                      <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-kips-navy-900 shadow-sm">
                        {getIcon(iconName, "h-4.5 w-4.5")}
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="flex flex-col p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-navy-900">
                          {category}
                        </span>
                        <span className="text-[0.62rem] font-bold text-kips-text-400">
                          {duration || "Duration N/A"}
                        </span>
                      </div>

                      <h4 className="mt-2 font-display text-sm font-extrabold tracking-tight text-kips-text-900 leading-tight">
                        {title || "Course Title Placeholder"}
                      </h4>

                      {urduTitle && (
                        <div className="mt-1 font-body text-xs font-semibold text-kips-navy-700 text-right" dir="rtl">
                          {urduTitle}
                        </div>
                      )}

                      <p className="mt-2 text-[0.72rem] leading-relaxed text-kips-text-450 line-clamp-2">
                        {detail || "Provide syllabus details to render this preview card bio..."}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[0.72rem] font-bold text-kips-navy-900">
                        <span>View Course Details</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>

                  {/* Syllabus outcomes highlights in preview */}
                  <div className="mt-2 border-t border-gray-200 pt-4 text-xs">
                    <span className="block font-bold text-kips-text-900 mb-1.5">Campuses Offering:</span>
                    <div className="flex flex-wrap gap-1">
                      {campuses.length === 0 ? (
                        <span className="text-gray-400 text-[0.68rem] italic">None selected</span>
                      ) : (
                        campuses.map((c) => (
                          <span key={c} className="rounded-md bg-white border border-gray-200 px-1.5 py-0.5 text-[0.62rem] font-semibold text-kips-text-700">
                            {c}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Status alerts */}
            {formError && (
              <div className="mx-6 my-2 p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-755 font-bold text-xs text-center flex items-center justify-center gap-1.5">
                <Icons.AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}
            {formSuccess && (
              <div className="mx-6 my-2 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 font-bold text-xs text-center animate-pulse flex items-center justify-center gap-1.5">
                <Icons.ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>{formSuccess}</span>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="px-6 py-5 border-t border-gray-150 flex justify-end gap-3 bg-gray-50/75">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-gray-200 bg-white hover:bg-gray-100 px-5 py-2.5 text-xs font-bold text-kips-text-700 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSaveCourse}
                className="rounded-xl bg-kips-navy-900 hover:bg-kips-navy-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Saving changes..." : "Save Course Listing"}
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
