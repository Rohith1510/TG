import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OrganizeTrip from '@/components/OrganizeTrip';
import PopularDestinations from '@/components/PopularDestinations';
import Accommodations from '@/components/Accommodations';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import TopRecommendations from '@/components/TopRecommendations';
import Footer from '@/components/Footer';
import MapWrapper from '@/components/MapWrapper';
import FAQ from '@/components/FAQ';
// import dynamic from 'next/dynamic';

// const MapComponent = dynamic(() => import('@/components/map-component'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />
      <Hero />
      <OrganizeTrip />
      <PopularDestinations />
      <TopRecommendations />
      <Accommodations />
      <MapWrapper />
      <Gallery />
      <Testimonials />
      <FAQ/>
      <Footer />
    </main>
  );
}