import { Button } from "@/components/ui/button";

export default function OrganizeTrip() {
  return (
    <section className="bg-[#24565c] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We Organize Your Trip</h2>
          <p className="mb-6">
            Bali is an Indonesian island located in the westernmost end of the Lesser Sunda Islands, lying between Java to the west and Lombok to the east. Renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music, Bali is often referred to as the &quot;Island of the Gods&quot;.
          </p>
          <Button className="bg-[#ddbf68] hover:bg-[#c9ad5e] text-[#24565c] font-medium px-6 py-3 text-lg h-12">
            Get Offer
          </Button>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(36,86,92,0.2)] to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform hover:scale-110 duration-500"
              style={{ backgroundImage: "url('/trip.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
