import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">MyWebsite</h2>
            <p className="mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
              <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
              <li><Link href="/services" className="hover:text-indigo-600">Services</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="hover:text-indigo-600">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-indigo-600">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-indigo-600">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
