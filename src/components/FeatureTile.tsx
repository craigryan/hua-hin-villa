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
    <div className={`group relative bg-white p-10 rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 hover-lift ${className}`}>
      {/* Icon container - minimalist design */}
      <div className='w-16 h-16 bg-neutral-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300'>
        <span className='text-3xl text-neutral-600 group-hover:text-primary transition-colors duration-300'>{icon}</span>
      </div>
      
      {/* Content */}
      <h3 className='text-lg font-medium text-neutral-800 mb-3'>
        {title}
      </h3>
      <p className='text-neutral-600 text-sm leading-relaxed'>
        {description}
      </p>
    </div>
  );
};

export default FeatureTile;