import React from 'react';

interface DividerProps {
  className?: string;
  color?: 'primary' | 'accent' | 'neutral';
}

export const SimpleDivider: React.FC<DividerProps> = ({ 
  className = '', 
  color = 'primary'
}) => {
  const colorMap = {
    primary: 'bg-primary',
    accent: 'bg-accent',
    neutral: 'bg-neutral-300'
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`h-px ${colorMap[color]} opacity-30`} />
    </div>
  );
};

interface AccentLineProps {
  className?: string;
  position?: 'left' | 'center' | 'right';
  width?: 'short' | 'medium' | 'long';
}

export const AccentLine: React.FC<AccentLineProps> = ({ 
  className = '', 
  position = 'center',
  width = 'medium'
}) => {
  const positionMap = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  const widthMap = {
    short: 'w-12',
    medium: 'w-24',
    long: 'w-32'
  };

  return (
    <div className={`flex ${positionMap[position]} ${className}`}>
      <div className={`h-0.5 ${widthMap[width]} bg-primary rounded-full`} />
    </div>
  );
};

interface SubtleBackgroundProps {
  className?: string;
  variant?: 'light' | 'dark';
  opacity?: number;
}

export const SubtleBackground: React.FC<SubtleBackgroundProps> = ({ 
  className = '', 
  variant = 'light',
  opacity = 0.5
}) => {
  const variantMap = {
    light: 'bg-gradient-subtle',
    dark: 'bg-gradient-dark'
  };

  return (
    <div 
      className={`absolute inset-0 ${variantMap[variant]} ${className}`}
      style={{ opacity }}
    />
  );
};