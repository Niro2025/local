import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeaturedService: React.FC<FeaturedServiceProps> = ({ icon, title, description, delay = 0 }) => {
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  return (
    <div className={`bg-white p-5 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn ${delayClass}`}>
      <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3 text-sm">
        {description}
      </p>
      <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition text-sm">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default FeaturedService;