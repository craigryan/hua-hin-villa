import React from 'react';
import Image from 'next/image';

interface ThaiRoofIconProps {
  className?: string;
  size?: number;
}

const ThaiRoofIcon: React.FC<ThaiRoofIconProps> = ({ className = '', size = 24 }) => {
  return (
    <Image
      src="/icons/thai-roof-icon.svg"
      alt="Thai Roof"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default ThaiRoofIcon;