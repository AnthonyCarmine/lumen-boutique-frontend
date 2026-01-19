import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10">
      <div className="relative overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <div className="grid lg:grid-cols-2">
          <div className="p-7 md:p-10">
            <div className="text-xs font-bold tracking-widest text-black/50">
              FEATURED DROP
            </div>

            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight leading-[1.0]">
              ZAPATILLAS <br />
              <span className="text-black/60">DEPORTIVAS</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60">
              Drops limpios, confort premium y siluetas listas para el día a día.
              Mira la nueva colección y encuentra tu par ideal.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="h-11 px-5 rounded-full bg-black text-white font-semibold hover:opacity-90">
                Ver colección
              </button>
              <button className="h-11 px-5 rounded-full border border-black/15 font-semibold hover:border-black/40">
                Explorar nuevos
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-black/50">
              <span>🚚 Envío rápido</span>
              <span>↩️ Devolución fácil</span>
              <span>⭐ Top picks</span>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[460px]">

            <div className="absolute inset-0 overflow-hidden rounded-r-[28px]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-[#D8F35C]/60" />
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D8F35C]/60 blur-3xl" />
              <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/70 pointer-events-none" />
            </div>
<div className="absolute top-24 right-10 h-72 w-72 rounded-full bg-black/10 blur-3xl z-10" />

<Image
  src="/images/spotlight/shoes-hanging.png"
  alt="Hanging shoes"
  width={2400}
  height={2400}
  className="absolute top-[-30px] right-[40px] z-40 w-[900px] md:w-[1050px] lg:w-[1250px] h-auto object-contain rotate-[-6deg] scale-x-[-1.15] scale-y-[1.15] drop-shadow-[0_110px_180px_rgba(0,0,0,0.45)] pointer-events-none select-none"
  priority={false}
/>


            <Image
              src="/images/spotlight/shoe-single.png"
              alt="Single shoe"
              width={1200}
              height={1200}
              className="absolute bottom-[-35px] left-[-140px] z-30 w-[300px] md:w-[360px] lg:w-[420px] h-auto object-contain rotate-[-14deg] opacity-95 drop-shadow-[0_55px_90px_rgba(0,0,0,0.33)]"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
