"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

type Review = {
  name: string;
  course: string;
  campus: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Faisal Khan",
    course: "DIT (Diploma in Information IT)",
    campus: "Abbottabad Campus",
    text: "The DIT program at KIPS was exceptionally structured. The laboratory work was highly practical, and the faculty was supportive. The qualification is fully recognized, helping me land my first IT job.",
    rating: 5,
  },
  {
    name: "Sadia Bibi",
    course: "Montessori Diploma",
    campus: "Haripur Campus",
    text: "Studying here was a wonderful experience. The pedagogy theories taught in the Montessori program, combined with Dr. Mudassar's educational psychology seminars, gave me immense confidence to teach children.",
    rating: 5,
  },
  {
    name: "Ahmad Ali",
    course: "Safety Officer Training",
    campus: "Mansehra Campus",
    text: "Highly recommended for professional certification courses. The training materials were top-tier, and the focus on safety regulations helped us pass international occupational health assessments.",
    rating: 5,
  },
];

export default function Reviews() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const gridRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 80 });

  return (
    <section id="reviews" className="scroll-mt-20 bg-kips-light-50 py-20 border-t border-gray-150">
      <div className="container-custom">
        
        {/* Header */}
        <div ref={headerRef} className="mb-12 text-center">
          <span className="section-label">STUDENT REVIEWS</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
            Success Stories from Our Alumni
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-kips-text-400">
            Read how KIPS helped students across KPK and AJK gain professional credentials and build bright careers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs hover:shadow-sm transition-all duration-200"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-kips-yellow-500 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.622c-.22.85.704 1.522 1.4 1.085L10 15.347l4.137 2.78c.695.437 1.62-.234 1.4-1.084l-1.197-4.623 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-[0.82rem] leading-relaxed text-kips-text-700 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex flex-col">
                <span className="font-display text-sm font-bold text-kips-text-900">
                  {review.name}
                </span>
                <span className="text-[0.68rem] font-semibold text-kips-navy-900 uppercase tracking-wide">
                  {review.course}
                </span>
                <span className="text-[0.62rem] text-kips-text-400">
                  {review.campus}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
