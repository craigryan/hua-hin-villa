import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth < 640) setImagesPerView(1);
      else if (window.innerWidth < 1024) setImagesPerView(2);
      else setImagesPerView(3);
    };

    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);
    return () => window.removeEventListener('resize', updateImagesPerView);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerView;
      return nextIndex >= images.length ? 0 : nextIndex;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const previousIndex = prevIndex - imagesPerView;
      return previousIndex < 0 ? Math.max(0, images.length - imagesPerView) : previousIndex;
    });
  };

  const visibleImages = images.slice(currentIndex, currentIndex + imagesPerView);
  const canGoNext = currentIndex + imagesPerView < images.length;
  const canGoPrevious = currentIndex > 0;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full overflow-hidden rounded-lg">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages.map((image, index) => (
            <div key={`${image.src}-${currentIndex + index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {canGoPrevious && (
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous images"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}
        
        {canGoNext && (
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next images"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}

        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {Math.floor(currentIndex / imagesPerView) + 1} / {Math.ceil(images.length / imagesPerView)}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
