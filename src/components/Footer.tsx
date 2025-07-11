import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12 pt-10 pb-6 bg-white text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-black mb-4">TheVillas</h3>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase text-xs text-gray-500 font-semibold mb-4">TheVillas Contacts</h4>
          <ul className="space-y-2 text-gray-700">
            <li>✉️ info@thevillas.it</li>
            <li>📞 +39 222222222</li>
            <li>📍 Lorem Ipsum dolor sit</li>
            <li className="flex gap-3 mt-2">
              <a href="#" aria-label="Instagram" className="hover:text-black text-base">📸</a>
              <a href="#" aria-label="Facebook" className="hover:text-black text-base">📘</a>
            </li>
          </ul>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="uppercase text-xs text-gray-500 font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-black">About us</Link></li>
            <li><Link href="/" className="hover:text-black">Our Villas</Link></li>
            <li><Link href="#" className="hover:text-black">Services</Link></li>
            <li><Link href="#" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="uppercase text-xs text-gray-500 font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-black">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-black">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-xs text-gray-500">
        <p>© 2025 Name Cognome P.IVA XXXXXXXXXXXX</p>
        <p>Powered by Weekend CMS - Emergentito</p>
      </div>
    </footer>
  );
}
