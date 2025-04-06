// components/PopularDestinations.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Diamond Island",
    description: "Diamond Island is one of the most epic spots in Indonesia.",
    image: "/diamond-beach.png",
  },
  {
    id: 2,
    name: "Kelingking Beach",
    description: "Kelingking Beach is one of the most epic spots in Indonesia.",
    image: "/Kelingking-Beach.png",
  },
  {
    id: 3,
    name: "Broken Beach",
    description: "Broken Beach is one of the most epic spots in Indonesia.",
    image: "/broken-beach.png",
  },
];

export default function PopularDestinations() {
  return (
    <section id="destinations" className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24565c]">
            Explore Popular Destinations
          </h2>
          <Button className="bg-[#1d7cc7] hover:bg-[#166bb0] text-white px-6 py-3 text-lg h-12">
            Explore More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transform transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#24565c] mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link href={`/destination/${destination.id}`}>
                  <span className="text-[#1d7cc7] hover:text-[#166bb0] font-medium">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
