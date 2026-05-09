import Link from 'next/link'
export default function Nav() {
  return (
    <header>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Left Nav */}
        <nav className="flex min-w-0 items-center gap-4 md:gap-8 text-sm md:text-lg font-medium text-gray-700">

          <Link href="/features"  className="hover:text-cyan-500 transition">Features</Link>
          <a href="/" className="hover:text-cyan-500 transition">Pricing</a>
          <a href="#" className="hover:text-cyan-500 transition">Testimonials</a>
          <a href="#" className="hover:text-cyan-500 transition">Resources</a>
        </nav>

        {/* Logo */}
        <div className="flex flex-shrink-0 items-center gap-2 px-4">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border-[5px] border-cyan-500 border-r-transparent rotate-45"></div>

          <span className="text-2xl md:text-4xl font-semibold text-gray-800 tracking-tight">
            circle
          </span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
            <a href="#" className="hover:text-cyan-500 transition">Company</a>
            <a href="#" className="hover:text-cyan-500 transition">Contact</a>
          </nav>

          {/* Login Button */}
          <button className="border-2 border-cyan-500 px-4 md:px-8 py-2 text-sm md:text-lg font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white">
            Login
          </button>
        </div>

      </div>
    </header>
  );
}
