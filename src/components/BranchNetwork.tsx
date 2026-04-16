const branches = [
  { city: "Abbottabad", urdu: "ایبٹ آباد", detail: "Main Campus, Supply Road" },
  { city: "Haripur", urdu: "ہری پور", detail: "Shah Maqsood Campus (Main)" },
  { city: "Mansehra", urdu: "مانسہرہ", detail: "KIPS Campus Mansehra" },
  { city: "Shinkiari", urdu: "شنکیاری", detail: "KIPS Campus Near Degree College" },
  { city: "Baffa", urdu: "بفہ", detail: "KIPS Baffa Campus" },
  { city: "Mirpur (AJ&K)", urdu: "میرپور (اے جے کے)", detail: "KIPS Mirpur Campus" },
  { city: "Garhi Habibullah", urdu: "گڑھی حبیب اللہ", detail: "KIPS Garhi Campus" },
];

export default function BranchNetwork() {
  return (
    <section id="branches" className="bg-kips-navy-900 py-24 border-t border-white/5">
      <div className="container-custom grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
        <div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-12">
            OUR EXTENSIVE
            <br />
            <span className="text-kips-yellow-500">BRANCH NETWORK</span>
          </h2>
          <div className="flex flex-col gap-3">
            {branches.map((branch) => (
              <article 
                key={branch.city} 
                className="flex items-center justify-between p-4 rounded-sm bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-sm bg-kips-yellow-500 flex items-center justify-center text-kips-navy-900 font-black text-xl shadow-lg">
                    {branch.city[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white transition-colors flex items-center gap-2">
                      {branch.city}
                    </h3>
                    <p className="text-xs text-white/40 font-medium">
                      {branch.detail === "Shah Maqsood Campus" ? "Premier Facility with modern labs" : 
                       branch.detail === "Main Branch" ? "Main Campus - City Center" : "Educational excellence in Hazara"}
                    </p>
                  </div>
                </div>
                <div className="text-xl font-bold text-white/20 group-hover:text-kips-yellow-500 transition-colors px-4" dir="rtl">
                  {branch.urdu}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="aspect-[4/3] rounded-sm overflow-hidden border-[6px] border-white/10 shadow-2xl relative">
             <img 
               src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200" 
               alt="Modern Campus Building" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             {/* Regional Leader Badge */}
             <div className="absolute top-6 right-6 px-4 py-2 bg-kips-yellow-500 text-kips-navy-900 text-[0.65rem] font-black uppercase tracking-widest shadow-xl">
               REGIONAL LEADER
             </div>
          </div>
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-kips-yellow-500/5 blur-3xl -z-10 group-hover:bg-kips-yellow-500/10 transition-colors" />
        </div>
      </div>
    </section>
  );
}


