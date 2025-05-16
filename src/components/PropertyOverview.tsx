import React from 'react'; // Import React

interface PropertyOverviewProps {
  title: string;
  description: string;
  // Add more props here for flexibility, e.g., features: string[]
}

// PropertyOverview component: Displays a section with a title and description
const PropertyOverview: React.FC<PropertyOverviewProps> = ({
  title,
  description,
}) => {
  return (
    <section className='py-16 bg-gray-100 text-center'>
      <div className='container mx-auto px-4 max-w-screen-lg'>
        {' '}
        {/* Added max-width for better readability */}
        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
          {title}
        </h2>{' '}
        {/* Added text color */}
        <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
          {description}
        </p>{' '}
        {/* Added max-width and leading-relaxed */}
        {/*
          Add a grid or list here later to showcase key features
          with icons or short descriptions.
        */}
      </div>
    </section>
  );
};

export default PropertyOverview;
