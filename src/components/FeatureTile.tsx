import React from 'react';

interface FeatureTileProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureTile: React.FC<FeatureTileProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`group relative bg-gradient-to-br from-white/95 via-white/90 to-thai-cream/60 backdrop-blur-md p-8 rounded-2xl border border-thai-gold/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${className}`}>
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-thai-gold/15 to-transparent rounded-bl-3xl" />
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-thai-teal/8 to-transparent rounded-tr-3xl" />
      
      {/* Icon container with enhanced styling */}
      <div className='relative w-20 h-20 bg-gradient-to-br from-thai-gold via-thai-gold-light to-thai-gold rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300'>
        <div className="absolute inset-0 bg-thai-gold rounded-full animate-pulse opacity-30 group-hover:opacity-50" />
        <span className='relative text-4xl text-white drop-shadow-md'>{icon}</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-thai-gold-dark transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-700 text-base leading-relaxed font-semibold'>
          {description}
        </p>
      </div>
      
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(46, 139, 139, 0.15) 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default FeatureTile;