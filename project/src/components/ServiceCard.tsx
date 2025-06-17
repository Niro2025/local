import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay = 0 }) => {
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
      <ul className="space-y-1.5 mb-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition mt-2 text-sm">
        Get started
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;