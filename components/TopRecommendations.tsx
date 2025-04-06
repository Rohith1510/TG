import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const recommendations = [
  {
    id: 1,
    name: "Ubud Sacred Monkey Forest",
    category: "Nature",
    rating: 4.8,
    image: "/mokey-forest.png",
    description: "Experience the mystical sanctuary with hundreds of monkeys roaming freely."
  },
  {
    id: 2,
    name: "Tegalalang Rice Terrace",
    category: "Sightseeing",
    rating: 4.7,
    image: "/Rice-Terrace.png",
    description: "Spectacular terraced rice fields showcasing traditional Balinese irrigation system."
  },
  {
    id: 3,
    name: "Uluwatu Temple",
    category: "Culture",
    rating: 4.9,
    image: "/Uluwatu-Temple.png",
    description: "Ancient sea temple perched on a steep cliff offering breathtaking sunset views."
  },
  {
    id: 4,
    name: "Seminyak Beach",
    category: "Beach",
    rating: 4.6,
    image: "/Seminyak-Beach.png",
    description: "Trendy beach area with luxurious resorts, beach clubs, and stunning sunsets."
  }
];

export default function TopRecommendations() {
  return (
    <section className="py-16 bg-[#ccd6d4]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#24565c] mb-10 text-center">
          Top Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white/70 backdrop-blur-sm border-none">
              <div className="relative h-48 w-full">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-[#24565c] hover:bg-[#1e4a4f]">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#24565c]">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-[#ddbf68]">★</span>
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}