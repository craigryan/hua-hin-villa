import React from 'react';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';

interface PageProps {
  params: {
    locale: string;
  };
}

const villaImages = [
  { src: '/images/villa_front.jpg', alt: 'Villa Front View' },
  { src: '/images/villa_front_distance.jpg', alt: 'Villa Front Distance View' },
  { src: '/images/villa_kitchen.jpg', alt: 'Villa Kitchen' },
  { src: '/images/villa_pool.jpg', alt: 'Villa Pool' },
  { src: '/images/villa_pool2.jpg', alt: 'Villa Pool Alternative View' },
  { src: '/images/villa_pool_view.jpg', alt: 'View from Villa Pool' },
];

const guestImages = [
  { src: '/images/guest_from_villa.jpg', alt: 'Guest House from Villa' },
  { src: '/images/guest_front.jpg', alt: 'Guest House Front' },
  { src: '/images/guest_pool.jpg', alt: 'Guest House Pool' },
  { src: '/images/guest_side.jpg', alt: 'Guest House Side View' },
];

const GalleryPage: React.FC<PageProps> = ({ params }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow container mx-auto px-4 py-8 space-y-12'>
        {/* Main Villa Section */}
        <section>
          <h2 className='text-3xl font-semibold mb-6'>Main Villa</h2>
          <ImageCarousel images={villaImages} className='mb-8' />
        </section>

        {/* Guest House Section */}
        <section>
          <h2 className='text-3xl font-semibold mb-6'>Guest House</h2>
          <ImageCarousel images={guestImages} className='mb-8' />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
