import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, bio, image, delay = 0 }) => {
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg animate-fadeIn ${delayClass}`}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-2 text-sm">{position}</p>
        <p className="text-gray-600 mb-3 text-sm">
          {bio}
        </p>
        <div className="flex gap-3">
          <a href="#" className="text-gray-400 hover:text-primary-600 transition" aria-label={`${name}'s LinkedIn`}>
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary-600 transition" aria-label={`Email ${name}`}>
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;