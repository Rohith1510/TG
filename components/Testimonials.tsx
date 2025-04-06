// components/Testimonials.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Aadhya Gio",
    avatar: "/girl.png",
    rating: 5,
    text: "This platform is very helpful because there are many beautiful places in Bali to visit and this platform really help me in finding beautiful destinations and also very good accommodations"
  },
  {
    id: 2,
    name: "Manuel Udan",
    avatar: "/boy.png",
    rating: 5,
    text: "This platform is very helpful because there are many beautiful places in Bali to visit and this platform really help me in finding beautiful destinations and also very good accommodations"
  },
  {
    id: 3,
    name: "Seryqi Ramawati",
    avatar: "/bussiness-man.png",
    rating: 5,
    text: "This platform is very helpful because there are many beautiful places in Bali to visit and this platform really help me in finding beautiful destinations and also very good accommodations"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#24565c]">
            What Our Travelers Say About Us
          </h2>
          <Button className="bg-[#1d7cc7] hover:bg-[#166bb0] text-white px-6 py-3 text-lg h-12">
            See More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#24565c]">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {testimonial.text}
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#ddbf68]">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <span 
                key={i} 
                className={`block w-2 h-2 rounded-full ${i === 2 ? 'bg-[#24565c]' : 'bg-[#ccd6d4]'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
