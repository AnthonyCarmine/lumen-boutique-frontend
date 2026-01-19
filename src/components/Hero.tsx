import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14">
        <div className="relative rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-10 md:top-8 text-center">
            <div className="text-[52px] md:text-[92px] lg:text-[110px] font-black tracking-tight text-black/10">
              LUMENWEAR
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-stretch">
            <div className="relative min-h-[360px] md:min-h-[520px]">
              <Image
                src="/images/hero/runner.png"
                alt="Model"
                fill
                className="object-cover object-[50%_25%]"
                priority
              />

              <div className="absolute left-6 bottom-6 bg-black text-white rounded-2xl p-5 w-[160px]">
                <div className="text-3xl font-black leading-none">+100</div>
                <div className="text-xs text-white/70 mt-2">
                  curated pieces <br /> this season
                </div>
              </div>
            </div>

            <div className="relative p-7 md:p-10 lg:p-12">
              <div className="max-w-md">
                <div className="text-sm font-semibold text-black/60 mb-3">
                  Men&apos;s & Women&apos;s
                </div>

                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Premium essentials for daily movement
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  Minimal silhouettes, clean fabrics, and limited drops.
                  Comfort-first — designed to stand out.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button className="h-11 px-5 rounded-full bg-[#D8F35C] font-bold hover:brightness-95">
                    Shop Now
                  </button>

                  <button className="h-11 px-5 rounded-full border border-black/15 font-semibold hover:border-black/40">
                    Watch Video ▶
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs text-black/50">
                  <div className="h-9 w-9 grid place-items-center rounded-full border border-black/10">
                    ↓
                  </div>
                  <span>Scroll down</span>
                </div>
              </div>

              <div className="mt-10 md:mt-12 bg-[#EDEFF0] rounded-2xl p-5 flex items-center gap-4">
                <div className="h-20 w-20 rounded-xl overflow-hidden bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1528701800489-20be3c69a0a1?auto=format&fit=crop&w=400&q=70"
                    alt="New collection"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-extrabold tracking-wide">NEW</div>
                  <div className="font-black leading-tight">COLLECTION</div>
                  <div className="text-xs text-black/60 mt-1">
                    Clean drops. Strong identity.
                  </div>
                </div>
                <button className="h-10 w-10 rounded-full bg-white grid place-items-center border border-black/10 hover:border-black/30">
                  ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
