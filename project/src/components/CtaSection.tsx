import React from 'react';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="py-12 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-fadeIn">{title}</h2>
          <p className="text-lg text-gray-200 mb-6 animate-fadeIn animation-delay-100">
            {subtitle}
          </p>
          <Link to={buttonLink} className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block animate-fadeIn animation-delay-200">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;