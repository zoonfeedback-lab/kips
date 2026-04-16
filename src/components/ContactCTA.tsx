import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-kips-yellow-500 py-12 lg:py-16">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xs">
          <h2 className="text-3xl lg:text-4xl font-black text-kips-navy-900 tracking-tighter uppercase leading-none mb-2">
            CALL US DIRECTLY
          </h2>
          <p className="text-sm font-bold text-kips-navy-900/60 uppercase tracking-widest">
            Get personalized counseling
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto">
          {/* Main Helpline */}
          <div className="flex items-center gap-6 group cursor-pointer w-full md:w-auto">
            <div className="w-16 h-16 rounded-xl bg-kips-navy-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <span className="text-2xl text-kips-yellow-500">📞</span>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-kips-navy-900 tracking-tighter transition-colors">
                0334-9267992
              </div>
              <p className="text-[0.65rem] font-black text-kips-navy-900/50 uppercase tracking-[0.2em]">WhatsApp Available</p>
            </div>
          </div>

          <div className="w-px h-16 bg-kips-navy-900/10 hidden lg:block" />

          {/* Email / Zoom Info */}
          <div className="flex items-center gap-6 group cursor-pointer w-full md:w-auto">
            <div className="w-16 h-16 rounded-xl bg-kips-navy-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <span className="text-2xl text-kips-yellow-500">✉️</span>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-black text-kips-navy-900 tracking-tight leading-none mb-1">
                k.13.10.13@gmail.com
              </div>
              <p className="text-[0.65rem] font-black text-kips-navy-900/50 uppercase tracking-[0.2em]">Zoom sessions available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


