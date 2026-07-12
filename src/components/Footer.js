export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-xl font-bold mb-4">VESTRO</h3>
          <p className="text-sm text-gray-400">
            Curated fashion & lifestyle essentials for how you actually live.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer">New Arrivals</li>
            <li className="hover:text-white transition-colors cursor-pointer">Men</li>
            <li className="hover:text-white transition-colors cursor-pointer">Women</li>
            <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
            <li className="hover:text-white transition-colors cursor-pointer">Shipping</li>
            <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
        © 2026 Vestro. All rights reserved.
      </div>
    </footer>
  );
}