import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  authorPosition: string;
  category: string;
  delay?: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  excerpt, 
  image, 
  date, 
  author, 
  authorPosition,
  category,
  delay = 0 
}) => {
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  const getCategoryStyle = (category: string) => {
    const styles = {
      investing: 'bg-blue-100 text-blue-700',
      retirement: 'bg-green-100 text-green-700',
      taxes: 'bg-purple-100 text-purple-700',
      planning: 'bg-orange-100 text-orange-700',
      estate: 'bg-red-100 text-red-700'
    };
    
    return styles[category as keyof typeof styles] || 'bg-gray-100 text-gray-700';
  };
  
  const getCategoryLabel = (category: string) => {
    const labels = {
      investing: 'Investing',
      retirement: 'Retirement',
      taxes: 'Tax Planning',
      planning: 'Financial Planning',
      estate: 'Estate Planning'
    };
    
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg animate-fadeIn ${delayClass}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryStyle(category)}`}>
            {getCategoryLabel(category)}
          </span>
          <div className="flex items-center text-gray-500 text-sm ml-auto">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <p className="text-sm">
              <span className="font-medium text-gray-900">{author}</span>
              <span className="text-gray-500 ml-1">{authorPosition}</span>
            </p>
          </div>
          <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
            Read more
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;