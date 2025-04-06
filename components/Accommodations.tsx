// components/Accommodations.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Accommodations() {
  return (
    <section id ="accommodations"className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24565c]">
            Traditional Bali Accommodation in Bali Island
          </h2>
          <Button className="bg-[#1d7cc7] hover:bg-[#166bb0] text-white px-6 py-3 text-lg h-12">
            Explore More
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/bali resort.png"
              alt="Traditional Balinese Gate"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-10"></div>
            <Image
              src="/water-villas1.png"
              alt="Water Villas"
              fill
              className="object-cover"
            />

            <div className="absolute z-20 bottom-0 left-0 right-0 p-8">
              <p className="text-white mb-4">
                Operated by local people providers, staying in this island
                accommodation that is operated by local people provides an
                unforgettable, unique experience when you select the best way to
                enjoy Bali Island.
              </p>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-[#24565c] px-6 py-3 text-lg h-12"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
