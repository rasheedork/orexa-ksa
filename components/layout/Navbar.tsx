export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          OREXA-<span className="text-blue-600"> KSA</span>
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
          Get Quote
        </button>
      </div>
    </header>
  );
}