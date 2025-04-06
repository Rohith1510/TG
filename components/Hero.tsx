import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-2 max-w-7xl">
      
      <div className="mb-6 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#24565c] leading-tight">
          Discover The Natural Beauty
        </h1>

        <div className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#24565c] leading-tight">
            of Bali Island
          </h1>

          <div className="mt-2 md:absolute md:right-100 md:top-5 md:mt-0 md:max-w-md md:pl-8">
            <p className="text-gray-800 text-base sm:text-lg leading-tight">
              Bali is a tropical paradise famed for its beaches, rich culture,
              and scenic beauty.
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-full relative overflow-hidden">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        
          <Image
            src="/Bali temple.png"
            alt="Bali Temple"
            layout="fill"
            className="object-cover"
            priority
          />

          
          <div className="absolute inset-0 z-[1]">
            <div className="absolute right-[10%] top-0 bottom-0 w-[10px] sm:w-[15px] md:w-[20px] bg-white transform -skew-x-12"></div>
            <div className="absolute right-[25%] top-0 bottom-0 w-[10px] sm:w-[15px] md:w-[20px] bg-white transform -skew-x-12"></div>
            <div className="absolute right-[40%] top-0 bottom-0 w-[10px] sm:w-[15px] md:w-[20px] bg-white transform -skew-x-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
