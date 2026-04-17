const whatsappContacts = [
  {
    label: "WhatsApp Helpline",
    number: "0314-4048842",
    href: "https://wa.me/923144048842",
  },
  {
    label: "Admissions WhatsApp",
    number: "0301-9884455",
    href: "https://wa.me/923019884455",
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-kips-yellow-500 py-12 lg:py-16">
      <div className="container-custom flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="max-w-xs">
          <h2 className="mb-2 text-3xl font-black uppercase leading-none tracking-tighter text-kips-navy-900 lg:text-4xl">
            Call or WhatsApp Us
          </h2>
          <p className="text-sm font-bold uppercase tracking-widest text-kips-navy-900/60">
            Get personalized counseling and admissions support
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 md:flex-row lg:w-auto lg:gap-12">
          <div className="flex w-full flex-col gap-4 md:w-auto">
            {whatsappContacts.map((contact) => (
              <div key={contact.number} className="flex items-center gap-6 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-kips-navy-900 shadow-xl transition-transform group-hover:scale-110">
                  <span className="text-2xl text-kips-yellow-500">📞</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-kips-navy-900/50">
                    {contact.label}
                  </span>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-black leading-none tracking-tighter text-kips-navy-900 transition-colors hover:text-white lg:text-3xl"
                  >
                    {contact.number}
                  </a>
                </div>
              </div>
            ))}
            <p className="pt-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-kips-navy-900/50">
              Click any number to open WhatsApp chat.
            </p>
          </div>

          <div className="hidden h-16 w-px bg-kips-navy-900/10 lg:block" />

          <div className="flex w-full items-center gap-6 md:w-auto">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-kips-navy-900 shadow-xl">
              <span className="text-2xl text-kips-yellow-500">✉️</span>
            </div>
            <div>
              <div className="mb-1 text-xl font-black leading-none tracking-tight text-kips-navy-900 lg:text-2xl">
                k.13.10.13@gmail.com
              </div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-kips-navy-900/50">
                Zoom sessions available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
