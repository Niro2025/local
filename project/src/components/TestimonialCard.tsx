import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, position, image, delay = 0 }) => {
  const delayClass = delay ? `animation-delay-${delay}` : '';
  
  return (
    <div className={`bg-white p-5 rounded-lg shadow-md flex flex-col h-full animate-fadeIn ${delayClass}`}>
      <div className="flex-grow">
        <svg className="h-6 w-6 text-primary-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-600 mb-4 italic text-sm">
          {content}
        </p>
      </div>
      <div className="flex items-center mt-3">
        <img src={image} alt={author} className="w-10 h-10 rounded-full object-cover mr-3" />
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{author}</h4>
          <p className="text-gray-500 text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;