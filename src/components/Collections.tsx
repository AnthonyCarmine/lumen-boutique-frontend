import Image from "next/image";

export default function Collections() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-14">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Men */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#D8F35C] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="relative grid md:grid-cols-2 min-h-[220px]">
            <div className="p-8 z-10">
              <div className="text-sm font-semibold text-black/70">Men’s</div>
              <div className="text-3xl font-black tracking-tight mt-1">
                Collection
              </div>
              <button className="mt-6 h-10 px-4 rounded-full bg-black text-white font-semibold">
                Open Store
              </button>
            </div>

            {/* Image area */}
            <div className="relative">
              {/* La imagen NO llena todo: va anclada abajo-derecha */}
              <div className="absolute inset-0">
                <Image
                  src="/images/collections/men.png"
                  alt="Men collection"
                  width={520}
                  height={520}
                  className="absolute bottom-0 right-6 h-[240px] w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Women */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#111] text-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="relative grid md:grid-cols-2 min-h-[220px]">
            <div className="p-8 z-10">
              <div className="text-sm font-semibold text-white/70">Women’s</div>
              <div className="text-3xl font-black tracking-tight mt-1">
                Collection
              </div>
              <button className="mt-6 h-10 px-4 rounded-full bg-white text-black font-semibold">
                Open Store
              </button>
            </div>

            {/* Image area */}
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/collections/women.png"
                  alt="Women collection"
                  width={520}
                  height={520}
                  className="absolute bottom-0 right-6 h-[240px] w-auto object-contain opacity-95 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
