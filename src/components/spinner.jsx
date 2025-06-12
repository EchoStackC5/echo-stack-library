// components/ui/spinner.jsx
import React from 'react';

export const Spinner = ({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
    '2xl': 'h-20 w-20',
    '3xl': 'h-24 w-24'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white',
    primary: 'border-primary'
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Different spinner variants
export const PulseSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
    '2xl': 'h-20 w-20'
  };

  return (
    <div className={`inline-block animate-pulse rounded-full bg-current ${sizeClasses[size]} ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const DotsSpinner = ({ size = 'md', className = '' }) => {
  const dotSizes = {
    xs: 'h-1 w-1',
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
    xl: 'h-6 w-6',
    '2xl': 'h-8 w-8'
  };

  const spacing = {
    xs: 'space-x-1',
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3',
    xl: 'space-x-4',
    '2xl': 'space-x-6'
  };

  return (
    <div className={`flex ${spacing[size]} ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${dotSizes[size]} animate-bounce rounded-full bg-current`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const BarsSpinner = ({ size = 'md', className = '' }) => {
  const barSizes = {
    xs: 'h-3 w-1',
    sm: 'h-5 w-1',
    md: 'h-8 w-2',
    lg: 'h-12 w-3',
    xl: 'h-16 w-4',
    '2xl': 'h-20 w-5'
  };

  const spacing = {
    xs: 'space-x-1',
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3',
    xl: 'space-x-4',
    '2xl': 'space-x-6'
  };

  return (
    <div className={`flex ${spacing[size]} ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`${barSizes[size]} animate-pulse bg-current`}
          style={{ 
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Usage examples:
export const SpinnerExamples = () => (
  <div className="space-y-6 p-4">
    <div className="space-y-2">
      <h3 className="font-semibold">Default Spinners (different sizes)</h3>
      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-center space-y-2">
          <Spinner size="sm" color="blue" />
          <span className="text-xs">Small</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Spinner size="md" color="primary" />
          <span className="text-xs">Medium</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Spinner size="lg" color="gray" />
          <span className="text-xs">Large</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Spinner size="xl" color="blue" />
          <span className="text-xs">Extra Large</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Spinner size="2xl" color="primary" />
          <span className="text-xs">2XL</span>
        </div>
      </div>
    </div>
    
    <div className="space-y-2">
      <h3 className="font-semibold">Pulse Spinners</h3>
      <div className="flex items-center space-x-6">
        <PulseSpinner size="md" className="text-green-500" />
        <PulseSpinner size="lg" className="text-purple-500" />
        <PulseSpinner size="xl" className="text-red-500" />
      </div>
    </div>
    
    <div className="space-y-2">
      <h3 className="font-semibold">Dots Spinners</h3>
      <div className="flex items-center space-x-6">
        <DotsSpinner size="md" className="text-blue-500" />
        <DotsSpinner size="lg" className="text-green-500" />
        <DotsSpinner size="xl" className="text-purple-500" />
      </div>
    </div>
    
    <div className="space-y-2">
      <h3 className="font-semibold">Bars Spinners</h3>
      <div className="flex items-center space-x-6">
        <BarsSpinner size="md" className="text-orange-500" />
        <BarsSpinner size="lg" className="text-pink-500" />
        <BarsSpinner size="xl" className="text-indigo-500" />
      </div>
    </div>
  </div>
);