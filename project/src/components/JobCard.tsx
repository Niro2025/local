import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  delay?: number;
}

const JobCard: React.FC<JobCardProps> = ({ 
  title, 
  location, 
  type, 
  department, 
  description, 
  requirements,
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg animate-fadeIn ${delayClass}`}>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1 text-primary-600" />
                {location}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-1 text-primary-600" />
                {type}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Briefcase className="h-4 w-4 mr-1 text-primary-600" />
                {department}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary-600 font-medium md:self-start"
          >
            {isExpanded ? (
              <>
                Less Details
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                More Details
                <ChevronDown className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Link 
            to="/contact" 
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition inline-block"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;