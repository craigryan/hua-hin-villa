import Link from 'next/link';
import React from 'react'; // Import React

interface CallToActionProps {
  headline: string;
  buttonText: string;
  buttonLink: string;
}

// CallToAction component: Displays a prominent call to action with a button
const CallToAction: React.FC<CallToActionProps> = ({
  headline,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className='py-16 bg-blue-700 text-white text-center'>
      {' '}
      {/* Using a distinct background color */}
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>{headline}</h2>{' '}
        {/* Increased bottom margin */}
        <Link
          href={buttonLink}
          className='bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300 inline-block'
        >
          {' '}
          {/* Added inline-block for better button behavior */}
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
