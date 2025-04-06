'use client';

import dynamic from 'next/dynamic';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import('./map-component'), {
  ssr: false,
});

export default function MapWrapper() {
  return <MapComponent />;
}
