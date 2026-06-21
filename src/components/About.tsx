"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Icons } from "@/components/Icons";

type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

type TabData = {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: React.ReactNode;
  photos: PhotoItem[];
};

const tabs: TabData[] = [
  {
    id: "founder",
    label: "Founder & CEO Profile",
    icon: "UserCheck",
    title: "Leadership & Vision",
    description: (
      <>
        <p className="text-sm text-kips-text-700 leading-relaxed">
          Keyan Institute of Professional Studies (KIPS) is founded and led by <strong>Sohail Ahmed Khan, MS (CS), M.E</strong>. Under his visionary leadership, KIPS has grown into one of the region’s premier technical networks, offering state-of-the-art curricula, board-registered certifications, and job-oriented vocational training.
        </p>
        <p className="mt-3 text-sm text-kips-text-700 leading-relaxed">
          With extensive qualifications in Computer Science and Engineering, he is dedicated to raising training benchmarks and establishing accessible campuses that empower youth with practical skillsets for local and overseas industries.
        </p>
        
        {/* Quote Card */}
        <div className="mt-6 border-l-4 border-kips-yellow-500 bg-kips-light-50 rounded-r-xl p-5 shadow-xs">
          <p className="font-body text-[0.82rem] font-semibold italic text-kips-text-700 leading-relaxed">
            "Technical competence is the bridge between education and employment. Our mission is to make every youth self-sufficient."
          </p>
          <span className="block mt-2 text-[0.65rem] font-bold uppercase tracking-wider text-kips-navy-900 text-right">
            — Sohail Ahmed Khan, CEO
          </span>
        </div>

        {/* Small Profile Card */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center border border-gray-150 rounded-xl p-4 bg-white shadow-xs">
          <img
            src="/images/founder-portrait.jpg"
            alt="Sohail Ahmed Khan"
            className="h-14 w-14 rounded-full object-cover object-top border-2 border-kips-navy-900 shadow-xs flex-shrink-0"
          />
          <div>
            <h5 className="font-display text-sm font-bold text-kips-text-900">Sohail Ahmed Khan</h5>
            <p className="text-[0.62rem] font-bold text-kips-yellow-600 uppercase tracking-widest">MD & CEO · MS (CS), M.E</p>
            <p className="text-xs text-kips-text-400 mt-0.5">Keyan Institute of Professional Studies</p>
          </div>
        </div>
      </>
    ),
    photos: [
      {
        src: "/images/founder-portrait.jpg",
        alt: "Sohail Ahmed Khan",
        caption: "Sohail Ahmed Khan, Founder & CEO of Keyan Institute of Professional Studies."
      },
      {
        src: "/images/founder-office.jpg",
        alt: "CEO Office Desk",
        caption: "CEO Sohail Ahmed Khan at the KIPS Abbottabad Head Office desk."
      },
      {
        src: "/images/founder-certificate.jpg",
        alt: "Cert Distribution Ceremony",
        caption: "Awarding skill certificates to graduates at the KIPS Abbottabad campus."
      },
      {
        src: "/images/founder-shield.jpg",
        alt: "Honorary Shield Award",
        caption: "Receiving the Honorary Shield of Excellence from educational boards."
      },
      {
        src: "/images/admin-meeting.jpg",
        alt: "Academic Board Meeting",
        caption: "Regional Campus Directors and Academic Board coordinating semester calendars."
      }
    ]
  },
  {
    id: "video",
    label: "Campus Video Tour",
    icon: "Video",
    title: "Keyan Institute Walkthrough",
    description: (
      <>
        <p className="text-sm text-kips-text-700 leading-relaxed">
          Watch our official campus tour to explore our state-of-the-art classroom facilities, computer laboratories, safety engineering workshops, and regional administration desks.
        </p>
        <p className="mt-3 text-sm text-kips-text-700 leading-relaxed">
          Keyan Institute focuses on practical, project-based vocational training that mimics actual workplace environments to guarantee that our graduates are industry-ready.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
          <div className="bg-kips-light-50 rounded-xl p-3.5 border border-gray-150/70 text-center">
            <span className="block text-2xl font-extrabold text-kips-navy-900">7+</span>
            <span className="text-[0.62rem] uppercase tracking-wider text-kips-text-450 font-bold block mt-0.5">KPK & AJK Branches</span>
          </div>
          <div className="bg-kips-light-50 rounded-xl p-3.5 border border-gray-150/70 text-center">
            <span className="block text-2xl font-extrabold text-kips-navy-900">100%</span>
            <span className="text-[0.62rem] uppercase tracking-wider text-kips-text-450 font-bold block mt-0.5">Hands-on Practice</span>
          </div>
        </div>
      </>
    ),
    photos: []
  },
  {
    id: "accreditation",
    label: "Accreditations & Board approvals",
    icon: "ShieldCheck",
    title: "Registered & Verified System",
    description: (
      <>
        <p className="text-sm text-kips-text-700 leading-relaxed">
          KIPS is fully approved and validated under the registered <strong>Mashal Technical Education System</strong>. Our academic operations, training centers, and syllabus outlines are endorsed by the leading national vocational boards:
        </p>
        <div className="mt-5 space-y-3.5">
          <div className="flex gap-3 items-start bg-kips-light-50/50 hover:bg-kips-light-50 border border-gray-150/60 rounded-xl p-3.5 transition-colors">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
              <span className="text-xs font-bold">✓</span>
            </div>
            <div>
              <h5 className="font-display text-xs font-bold text-kips-text-900">Skill Development Council (SDC) Peshawar</h5>
              <p className="text-[0.68rem] text-kips-text-400 mt-0.5">Established under National Training Ordinance 1980 for quality vocational control.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start bg-kips-light-50/50 hover:bg-kips-light-50 border border-gray-150/60 rounded-xl p-3.5 transition-colors">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
              <span className="text-xs font-bold">✓</span>
            </div>
            <div>
              <h5 className="font-display text-xs font-bold text-kips-text-900">Board of Trade & Technical Education (BTTE) Islamabad</h5>
              <p className="text-[0.68rem] text-kips-text-400 mt-0.5">Authorizes professional safety, environmental and health education diplomas.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start bg-kips-light-50/50 hover:bg-kips-light-50 border border-gray-150/60 rounded-xl p-3.5 transition-colors">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
              <span className="text-xs font-bold">✓</span>
            </div>
            <div>
              <h5 className="font-display text-xs font-bold text-kips-text-900">Khyber Pakhtunkhwa Trade Testing Board (KP TTB)</h5>
              <p className="text-[0.68rem] text-kips-text-400 mt-0.5">Official government board regulating testing and standards for one-year DIT diplomas.</p>
            </div>
          </div>
        </div>
      </>
    ),
    photos: [
      {
        src: "/images/cert-sdc-renewal.jpg",
        alt: "SDC Peshawar Facilitation Renewal",
        caption: "Official Renewal of Facilitation Certificate by Skill Development Council Peshawar."
      },
      {
        src: "/images/cert-montessori.jpg",
        alt: "SDC Trade Proficiency Montessori",
        caption: "Sample SDC Trade Proficiency Certificate in Montessori Teacher Training."
      },
      {
        src: "/images/cert-btte-hse.jpg",
        alt: "BTTE HSE Diploma",
        caption: "Board of Trade & Technical Education (BTTE) Islamabad Diploma in HSE."
      }
    ]
  },
  {
    id: "diplomas",
    label: "Sample Diplomas & Transcripts",
    icon: "FileCheck",
    title: "Official Certified Qualifications",
    description: (
      <>
        <p className="text-sm text-kips-text-700 leading-relaxed">
          Every graduate from Keyan Institute receives official, verifiable transcripts and diplomas that are highly valued in the government, private, and international job markets.
        </p>
        <p className="mt-3 text-sm text-kips-text-700 leading-relaxed">
          KIPS transcripts showcase exact course modules, obtained marks, GPA, and registrar stamps confirming qualification completeness. Our diplomas are widely accepted for local jobs and Gulf employment verification.
        </p>
        
        {/* Verification Alert Badge */}
        <div className="mt-6 flex items-center gap-3.5 border border-kips-navy-900/10 bg-kips-navy-900/5 rounded-xl p-4">
          <Icons.ShieldCheck className="h-7 w-7 text-kips-navy-900 flex-shrink-0" />
          <div>
            <h5 className="font-display text-xs font-bold text-kips-navy-900 uppercase tracking-wider">100% Verifiable Credentials</h5>
            <p className="text-[0.7rem] text-kips-text-500 mt-0.5">Certificates carry unique QR-code details verified via government registrar portals.</p>
          </div>
        </div>
      </>
    ),
    photos: [
      {
        src: "/images/cert-dit-diploma-new.jpg",
        alt: "KP TTB DIT Diploma (Eman Amir)",
        caption: "Official KP Trade Testing Board One-year DIT Diploma awarded to Eman Amir (Grade A+)."
      },
      {
        src: "/images/cert-dit-marks-new.jpg",
        alt: "KP TTB Detailed Marks Certificate (Samiullah Khan)",
        caption: "Official detailed marks transcript (DMC) from Khyber Pakhtunkhwa Trade Testing Board Peshawar for Samiullah Khan."
      },
      {
        src: "/images/cert-dit-diploma.jpg",
        alt: "KP TTB DIT Diploma (Sample)",
        caption: "Official Government-recognized Diploma in Information Technology (DIT) by KP TTB."
      },
      {
        src: "/images/cert-dit-marks.jpg",
        alt: "KP TTB Detailed Marks Certificate (Sample)",
        caption: "Sample DIT Transcript displaying subject scores (Introduction to Database, Graphics, MS Access)."
      }
    ]
  }
];

export default function About({ limitAbout = false }: { limitAbout?: boolean }) {
  const [activeTabId, setActiveTabId] = useState<string>("founder");
  const [activePhotoMap, setActivePhotoMap] = useState<Record<string, PhotoItem | null>>({
    founder: tabs[0].photos[0],
    video: null,
    accreditation: tabs[2].photos[0],
    diplomas: tabs[3].photos[0]
  });

  const [lightboxImage, setLightboxImage] = useState<PhotoItem | null>(null);

  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  // If limitAbout is true, always use "founder" tab
  const activeTab = limitAbout ? tabs[0] : (tabs.find((t) => t.id === activeTabId) || tabs[0]);
  const activePhoto = activePhotoMap[activeTab.id] || (activeTab.photos && activeTab.photos.length > 0 ? activeTab.photos[0] : null);

  const handlePhotoSelect = (photo: PhotoItem) => {
    setActivePhotoMap((prev) => ({ ...prev, [activeTab.id]: photo }));
  };

  // Resolve dynamic tab icons
  const getTabIcon = (iconName: string) => {
    if (iconName === "UserCheck") return <Icons.UserCheck className="h-4 w-4 transition-colors group-hover:text-kips-yellow-500" />;
    if (iconName === "ShieldCheck") return <Icons.ShieldCheck className="h-4 w-4 transition-colors group-hover:text-kips-yellow-500" />;
    if (iconName === "Video") return <Icons.Video className="h-4 w-4 transition-colors group-hover:text-kips-yellow-500" />;
    return <Icons.FileText className="h-4 w-4 transition-colors group-hover:text-kips-yellow-500" />;
  };

  return (
    <section id="about" className={`scroll-mt-20 bg-linear-to-b from-gray-50 via-white to-gray-50/50 pt-24 ${limitAbout ? "pb-12" : "pb-24"} border-t border-gray-150 font-body relative overflow-hidden`}>
      
      {/* Background Graphic Ornaments */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-kips-navy-900/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-kips-yellow-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          {limitAbout ? (
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl uppercase">
              Founder
            </h2>
          ) : (
            <>
              <span className="section-label">ABOUT KEYAN INSTITUTE</span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
                Accredited Technical Education Portal
              </h2>
            </>
          )}
          <div className="h-1.5 w-16 bg-kips-yellow-500 rounded-full mt-4 mb-3" />
          <p className="text-sm text-kips-text-500 leading-relaxed">
            {limitAbout 
              ? "Keyan Institute of Professional Studies is driven by a commitment to practical education, national accreditation, and regional development under the leadership of Sohail Ahmed Khan."
              : "Select the sections below to review our leadership profiles, watch our campus video walkthrough, or inspect our academic accreditations."}
          </p>
        </div>

        {/* Premium Segmented Tab Selector Bar (hidden when limitAbout is active) */}
        {!limitAbout && (
          <div className="flex flex-wrap gap-2.5 bg-gray-100/80 p-2.5 rounded-2xl border border-gray-200/80 max-w-fit mb-12 shadow-xs">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTabId(tab.id);
                  }}
                  className={`group flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-white text-kips-navy-900 shadow-sm border border-gray-200/50" 
                      : "text-kips-text-400 hover:text-kips-navy-900 hover:bg-white/40"
                  }`}
                >
                  <span className={isActive ? "text-kips-navy-900" : "text-kips-text-400 group-hover:text-kips-navy-900"}>
                    {getTabIcon(tab.icon)}
                  </span>
                  {tab.label}
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-kips-yellow-500 ml-1 shrink-0 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        )}
        
        {/* Main Content Grid */}
        <div className={`grid gap-12 lg:gap-16 ${limitAbout ? "lg:grid-cols-2 items-center" : "lg:grid-cols-[1.12fr_0.88fr] items-stretch"}`}>
          
          {/* Left Column: Description info */}
          <div ref={leftRef} className="flex flex-col justify-between">
            <div>
              {!limitAbout && (
                <>
                  <span className="text-[0.62rem] font-bold text-kips-yellow-600 uppercase tracking-widest block mb-1.5">
                    {activeTab.label}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-kips-text-900 mb-6">
                    {activeTab.title}
                  </h3>
                </>
              )}
              
              <div className="flex flex-col gap-4 text-sm text-kips-text-700 leading-relaxed">
                {limitAbout ? (
                  <>
                    <p className="text-sm text-kips-text-700 leading-relaxed">
                      Keyan Institute of Professional Studies (KIPS) is led by <strong>Sohail Ahmed Khan, MS (CS), M.E</strong>. Over the last two decades, he has established curriculum standards, fostered international affiliations, and set up 7 active campuses across Northern Pakistan to bridge traditional schooling with professional IT, management, and technical skills.
                    </p>
                    
                    {/* Vision Quote Card */}
                    <div className="mt-2 border-l-4 border-kips-yellow-500 bg-kips-light-50 rounded-r-xl p-5 shadow-xs">
                      <p className="font-body text-[0.82rem] font-semibold italic text-kips-text-700 leading-relaxed">
                        "Technical competence is the bridge between education and employment. Our mission is to make every youth self-sufficient."
                      </p>
                      <span className="block mt-2 text-[0.65rem] font-bold uppercase tracking-wider text-kips-navy-900 text-right">
                        — Sohail Ahmed Khan, CEO
                      </span>
                    </div>
                  </>
                ) : (
                  activeTab.description
                )}
              </div>
            </div>

            {/* Quick credentials footer */}
            {!limitAbout && (
              <div className="mt-10 border-t border-gray-150 pt-6 flex flex-wrap gap-x-8 gap-y-4">
                <div>
                  <span className="text-[0.62rem] text-kips-text-450 uppercase tracking-widest font-bold block mb-1">Board Accreditation</span>
                  <span className="text-xs text-kips-text-900 font-extrabold">Skill Development Council, KP TTB, BTTE</span>
                </div>
                <div>
                  <span className="text-[0.62rem] text-kips-text-450 uppercase tracking-widest font-bold block mb-1">Academic Supervision</span>
                  <span className="text-xs text-kips-text-900 font-extrabold">Mashal Technical Education System</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Media Display Box with Enhanced Document filters and lightbox */}
          <div ref={rightRef} className={limitAbout ? "" : "flex flex-col justify-between"}>
            <div>
              {activeTab.id === "video" ? (
                /* Video Player Frame with styled top bar resembling a media player application window */
                <div className="w-full rounded-2xl border border-gray-250 shadow-md overflow-hidden bg-black">
                  {/* Mock Window Top Bar */}
                  <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-kips-red-600 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-kips-yellow-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <span className="text-[0.62rem] uppercase tracking-wider font-bold text-gray-500">
                      campus_walkthrough.mp4
                    </span>
                    <div className="w-10" />
                  </div>
                  
                  {/* Video Box */}
                  <div className="aspect-[4/3] w-full relative">
                    <video
                      src="/videos/video1.mp4"
                      controls
                      className="w-full h-full object-cover"
                      poster="/images/founder-office.jpg"
                    />
                  </div>
                </div>
              ) : (
                /* Image Box with Double border & Shadow Ring */
                activePhoto && (
                  <div className="p-2 bg-white rounded-2xl border border-gray-200 shadow-md">
                    <div 
                      onClick={() => setLightboxImage(activePhoto)}
                      className={`${limitAbout ? "aspect-[4/3.2]" : "aspect-[3/4]"} w-full overflow-hidden rounded-xl border border-gray-200 relative bg-gray-50 cursor-zoom-in group`}
                    >
                      <img
                        src={activePhoto.src}
                        alt={activePhoto.alt}
                        /* Apply CSS enhancement filters: brightness, contrast, saturate adjustments to make scan pictures look clear and clean */
                        className="h-full w-full object-cover object-top transition-all duration-500 filter contrast-[1.05] brightness-[1.02] saturate-[0.95] group-hover:scale-103"
                      />
                      
                      {/* Image Overlay Tags */}
                      <div className="absolute top-4 left-4 rounded-md bg-kips-navy-900/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white backdrop-blur-xs shadow-sm">
                        Click to Expand & Verify
                      </div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white/95 text-kips-navy-900 p-3.5 rounded-full shadow-xl transition-all duration-300 transform scale-90 group-hover:scale-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Photo/Video Caption */}
              {activeTab.id === "video" ? (
                <p className="mt-4 text-xs text-kips-text-500 font-semibold text-center border-b border-gray-150 pb-4 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-kips-red-600 inline-block animate-pulse" />
                  KIPS Academy Walkthrough Video
                </p>
              ) : (
                activePhoto && (
                  <p className="mt-4 text-xs text-kips-text-500 font-semibold text-center border-b border-gray-150 pb-4">
                    {activePhoto.caption}
                  </p>
                )
              )}
            </div>



            {/* Thumbnails Gallery Strip (hidden when limitAbout is active) */}
            {!limitAbout && activeTab.photos && activeTab.photos.length > 0 && (
              <div className="mt-5">
                <span className="block text-[0.62rem] font-bold text-kips-text-450 uppercase tracking-widest mb-2.5 text-center lg:text-left">
                  Interactive Document Index
                </span>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {activeTab.photos.map((photo, index) => {
                    const isActive = activePhoto?.src === photo.src;
                    return (
                      <button
                        key={index}
                        onClick={() => handlePhotoSelect(photo)}
                        className={`h-15 w-11 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? "border-kips-yellow-500 scale-105 shadow-md shadow-kips-yellow-500/10 ring-2 ring-kips-yellow-500/20" 
                            : "border-gray-200/80 hover:border-gray-300 hover:scale-102"
                        }`}
                        title={photo.alt}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Explore More Button for Homepage (rendered below the main content grid in the center of the whole row) */}
        {limitAbout && (
          <div className="mt-6 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-kips-navy-900 px-8 py-4 text-xs font-bold text-white shadow-xs hover:bg-kips-navy-800 transition-all cursor-pointer hover:shadow-md"
            >
              Explore More About Us <span className="text-xs">→</span>
                </Link>
              </div>
            )}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xs cursor-pointer animate-in fade-in duration-200"
            onClick={() => setLightboxImage(null)}
          />
          
          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all duration-200 cursor-pointer hover:rotate-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Enhanced Document Box */}
          <div className="relative max-h-[88vh] max-w-[92vw] overflow-auto rounded-2xl bg-white p-2.5 shadow-2xl animate-in zoom-in-95 duration-200">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              /* High quality presentation scale, filter to maximize clarity of scan details */
              className="max-h-[75vh] w-auto object-contain rounded-xl border border-gray-200/60 filter contrast-[1.1] brightness-[1.03] saturate-[0.9] md:max-h-[82vh]"
            />
            <div className="p-4 text-center bg-gray-50 border-t border-gray-200 mt-2.5 rounded-xl">
              <h4 className="font-display text-sm font-bold text-kips-text-900">{lightboxImage.alt}</h4>
              <p className="mt-1 text-xs text-kips-text-500">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
