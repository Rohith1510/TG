import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="DOOISLAND Logo" width={45} height={45} />
            <span className="text-[#24565c] font-bold text-xl">MyTravel</span>
          </div>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#accommodations" className="text-gray-700 hover:text-[#24565c] transition-colors">
          Accommodations
        </Link>
        <Link href="#destinations" className="text-gray-700 hover:text-[#24565c] transition-colors">
          Destinations
        </Link>
        <Link href="#map" className="text-gray-700 hover:text-[#24565c] transition-colors">
          GeoMap
        </Link>
        <Link href="#footer" className="text-gray-700 hover:text-[#24565c] transition-colors">
          Contact Us
        </Link>
      </nav>
      
      <Button className="bg-[#1d7cc7] hover:bg-[#166bb0] text-white px-6 py-3 text-lg h-12">
        Login
      </Button>
    </header>
  );
}