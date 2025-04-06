import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#24565c] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="DOOISLAND Logo"
                width={50}
                height={50}
              />
              <span className="font-bold text-xl text-white">MyTravel</span>
            </div>
            <p className="text-sm text-white/80 mb-6">
              Find where you can stay, eat for, attractions, experiences and
              much more for your perfect trip to Bali Island
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Accommodations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Hostels
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Resorts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-sm text-white/70">
            All rights reserved ©MyTravel
          </p>
        </div>
      </div>
    </footer>
  );
}
