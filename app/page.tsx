import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OrganizeTrip from '@/components/OrganizeTrip';
import PopularDestinations from '@/components/PopularDestinations';
import Accommodations from '@/components/Accommodations';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import TopRecommendations from '@/components/TopRecommendations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />
      <Hero />
      <OrganizeTrip />
      <PopularDestinations />
      <TopRecommendations />
      <Accommodations />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}