import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => {
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  return (
    <div className={`relative pl-12 animate-fadeIn ${delayClass}`}>
      <div className="absolute left-0 top-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
        <span className="text-lg font-bold text-primary-600">{number}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;