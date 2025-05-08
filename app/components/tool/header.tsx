import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            MyWebsite
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
