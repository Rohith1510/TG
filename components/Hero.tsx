// components/Hero.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-2 max-w-7xl">
      {/* Title above the card */}
      {/* Title and description with specific two-line layout */}
      {/* Title and description with description positioned near end of second title line */}
      <div className="mb-6 relative">
        {/* First line of title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#24565c] leading-tight">
          Discover The Natural Beauty
        </h1>

        {/* Second line of title with description */}
        <div className="relative">
          {/* Second line of title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#24565c] leading-tight">
            of Bali Island
          </h1>

          {/* Description positioned near the end of second title line */}
          <div className="mt-2 md:absolute md:right-100 md:top-5 md:mt-0 md:max-w-md md:pl-8">
            <p className="text-gray-800 text-base sm:text-lg leading-tight">
            Bali is a tropical paradise famed for its beaches, rich culture, and scenic beauty.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal card with description and image */}
      <div className="w-full relative overflow-hidden">
        {/* Description text */}

        {/* Image with diagonal overlay slices */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          {/* Main image */}
          <Image
            src="/Bali temple.png"
            alt="Bali Temple"
            fill
            className="object-cover"
            priority
          />

          {/* Diagonal white overlay slices */}
          <div className="absolute inset-0 z-[1]">
            <div className="absolute right-[10%] top-0 bottom-0 w-[20px] bg-white transform -skew-x-12"></div>
            <div className="absolute right-[25%] top-0 bottom-0 w-[20px] bg-white transform -skew-x-12"></div>
            <div className="absolute right-[40%] top-0 bottom-0 w-[20px] bg-white transform -skew-x-12"></div>
          </div>
        </div>

        {/* Scroll indicator at bottom center */}
        {/* <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
            <div className="w-5 h-5 rounded-full border-2 border-gray-300">
              <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
