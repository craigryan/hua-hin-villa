import React from 'react';

interface WaveDividerProps {
  className?: string;
  color?: 'gold' | 'teal' | 'cream';
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ 
  className = '', 
  color = 'gold',
  flip = false 
}) => {
  const colorMap = {
    gold: '#D4AF37',
    teal: '#2E8B8B',
    cream: '#FFF8DC'
  };

  return (
    <div className={`relative w-full h-16 ${className}`} style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill={colorMap[color]}
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill={colorMap[color]}
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={colorMap[color]}
        />
      </svg>
    </div>
  );
};

interface ThaiPatternProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'gold' | 'teal' | 'burgundy';
  opacity?: number;
}

export const ThaiPattern: React.FC<ThaiPatternProps> = ({ 
  className = '', 
  size = 'medium',
  color = 'gold',
  opacity = 0.1
}) => {
  const sizeMap = {
    small: 40,
    medium: 60,
    large: 80
  };

  const colorMap = {
    gold: '#D4AF37',
    teal: '#2E8B8B',
    burgundy: '#8B1538'
  };

  const patternSize = sizeMap[size];

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${patternSize}' height='${patternSize}' viewBox='0 0 ${patternSize} ${patternSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(colorMap[color])}' fill-opacity='${opacity}'%3E%3Cpath d='M${patternSize/2} 0L${patternSize*0.75} ${patternSize*0.25}L${patternSize} ${patternSize/2}L${patternSize*0.75} ${patternSize*0.75}L${patternSize/2} ${patternSize}L${patternSize*0.25} ${patternSize*0.75}L0 ${patternSize/2}L${patternSize*0.25} ${patternSize*0.25}Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: `${patternSize}px ${patternSize}px`
      }}
    />
  );
};

interface DecorativeBorderProps {
  className?: string;
  position?: 'top' | 'bottom' | 'both';
  color?: 'gold' | 'teal';
}

export const DecorativeBorder: React.FC<DecorativeBorderProps> = ({ 
  className = '', 
  position = 'both',
  color = 'gold'
}) => {
  const colorMap = {
    gold: '#D4AF37',
    teal: '#2E8B8B'
  };

  const BorderElement = () => (
    <div className="w-full h-1 relative">
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${colorMap[color]} 20%, ${colorMap[color]} 80%, transparent 100%)`
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 10px, ${colorMap[color]} 12px, ${colorMap[color]} 14px)`,
          opacity: 0.6
        }}
      />
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {(position === 'top' || position === 'both') && (
        <div className="mb-4">
          <BorderElement />
        </div>
      )}
      {(position === 'bottom' || position === 'both') && (
        <div className="mt-4">
          <BorderElement />
        </div>
      )}
    </div>
  );
};