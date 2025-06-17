import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition inline-flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
          <button onClick={() => window.history.back()} className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md transition inline-flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;