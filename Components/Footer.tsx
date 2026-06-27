import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-[#262626] text-white">
      <div className="w-11/12 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image
              
                width={80}
                height={80}
                src="/logo_white.png"
                alt="logo"
              />
            </Link>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Custom gift boxes for every occasion. Make every moment special
              with our handcrafted gift boxes.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/buildAbox" className="hover:text-white transition-colors">
                  Build a Box
                </Link>
              </li>
              <li>
                <Link href="/premade" className="hover:text-white transition-colors">
                  Premade
                </Link>
              </li>
              <li>
                <Link href="/corporateGifts" className="hover:text-white transition-colors">
                  Corporate Gifts
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wider">CONTACT</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>info@customgiftbox.com</li>
              <li>+62 123 4567 890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm tracking-wider">FOLLOW US</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Instagram
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Facebook
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Twitter
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-11/12 mx-auto py-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Custom Gift Box. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
