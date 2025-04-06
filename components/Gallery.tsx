// components/Gallery.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    name: "Bunutan Beach",
    image: "/bunutan-beach.png",
    days: "3 Days",
    price: "$350"
  },
  {
    id: 2,
    name: "Kelingking Island",
    image: "/Kelingking-Beach.png",
    days: "2 Days",
    price: "$300"
  },
  {
    id: 3,
    name: "Garuda Wisnu Kencana",
    image: "/statue.png",
    days: "1 Day",
    price: "$150"
  }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-[#24565c]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Piece in The Beauty of Bali Island
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#24565c] rounded-full w-8 h-8 p-0">
              &lt;
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#24565c] rounded-full w-8 h-8 p-0">
              &gt;
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative h-64 rounded-lg overflow-hidden group">
              <Image 
                src={item.image} 
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold mb-1">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/90">
                    Whisper Tours | {item.days}
                  </span>
                  <span className="text-white font-medium">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}