"use client";

import Link from "next/link";

const regionCampuses = [
  "Abbottabad",
  "Haripur",
  "Mansehra",
  "Shinkiari",
  "Baffa",
  "Mirpur (AJK)",
  "Garhi Habibullah",
];

export default function Footer() {
  return (
    <footer className="bg-kips-navy-900 text-white/70 border-t border-white/10 py-16 lg:py-20 font-body">
      <div className="container-custom">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.PNG"
                alt="KIPS Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-extrabold tracking-tight text-white">
                  Keyan Institute
                </span>
                <span className="text-[0.68rem] font-semibold text-white/50 uppercase tracking-wider">
                  Of Professional Studies
                </span>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-white/60 max-w-sm">
              Established under the Mashal Technical Education System, KIPS provides accredited IT, vocational, and academic programs to build professional futures across KPK and AJK.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/923144048842"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/75 hover:bg-kips-yellow-500 hover:text-kips-navy-900 transition-colors"
                title="WhatsApp Support"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                href="mailto:k.13.10.13@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/75 hover:bg-kips-yellow-500 hover:text-kips-navy-900 transition-colors"
                title="Email Helpline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/courses" className="hover:text-white transition-colors">Our Programs</Link>
              <Link href="/about#why-kips" className="hover:text-white transition-colors">Why Choose Us</Link>
              <Link href="/#reviews" className="hover:text-white transition-colors">Alumni Reviews</Link>
              <Link href="/campuses" className="hover:text-white transition-colors">Campus Map</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Helpline Desk
            </h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 text-kips-yellow-500 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-white/80">Shah Maqsood Campus, Haripur, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 text-kips-yellow-500 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.029.387-1.306l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+923144048842" className="hover:text-white transition-colors text-white/80">0314-4048842</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 text-kips-yellow-500 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.029.387-1.306l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+923019884455" className="hover:text-white transition-colors text-white/80">0301-9884455</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 text-kips-yellow-500 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:k.13.10.13@gmail.com" className="hover:text-white transition-colors text-white/80">k.13.10.13@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Campuses grid */}
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Campus Coverage
            </h4>
            <div className="flex flex-wrap gap-2">
              {regionCampuses.map((camp) => (
                <span
                  key={camp}
                  className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[0.68rem] text-white/85 font-semibold"
                >
                  {camp}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-[0.7rem] md:flex-row text-white/50">
          <p className="font-medium tracking-wide text-white/60">
            © 2026 Keyan Institute of Professional Studies. Under the aegis of Mashal Technical Education System.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors text-white/60">Support Helpline</Link>
            <Link href="/courses" className="hover:text-white transition-colors text-white/60">Certificates & Diplomas</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
