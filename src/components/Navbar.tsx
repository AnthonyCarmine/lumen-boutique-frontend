export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F6F7F8]/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-black text-white grid place-items-center font-black">
            L
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">LUMEN</div>
            <div className="text-xs text-black/60 -mt-1">Boutique</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/70">
          <a className="hover:text-black" href="#home">Home</a>
          <a className="hover:text-black" href="#new">New</a>
          <a className="hover:text-black" href="#women">Women</a>
          <a className="hover:text-black" href="#men">Men</a>
          <a className="hover:text-black" href="#contact">Contacts</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="h-10 w-10 grid place-items-center rounded-full border border-black/10 hover:border-black/30"
            aria-label="Menu"
            title="Menu"
          >
            <span className="text-xl leading-none">≡</span>
          </button>

          <button
            className="h-10 w-10 grid place-items-center rounded-full bg-[#D8F35C] text-black font-black"
            aria-label="Cart"
            title="Cart"
          >
            🛍
          </button>
        </div>
      </div>
    </header>
  );
}
