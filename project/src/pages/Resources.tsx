import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart, Search, ArrowRight, FileText, BookOpen } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import CtaSection from '../components/CtaSection';

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Understanding Market Volatility",
      excerpt: "A guide to navigating market ups and downs while maintaining focus on long-term goals.",
      category: "investing",
      date: "May 15, 2023",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Jennifer Lee",
      authorPosition: "Chief Investment Officer"
    },
    {
      id: 2,
      title: "Retirement Planning Essentials",
      excerpt: "Key strategies to prepare for a secure and comfortable retirement at any age.",
      category: "retirement",
      date: "April 22, 2023",
      image: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "David Washington",
      authorPosition: "Head of Financial Planning"
    },
    {
      id: 3,
      title: "Tax-Efficient Investment Strategies",
      excerpt: "Maximize your after-tax returns with these proven investment approaches.",
      category: "taxes",
      date: "March 10, 2023",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Michael Rodriguez",
      authorPosition: "Tax Planning Specialist"
    },
    {
      id: 4,
      title: "Estate Planning for Young Families",
      excerpt: "Why estate planning matters even for young families and how to get started.",
      category: "estate",
      date: "February 28, 2023",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sarah Johnson",
      authorPosition: "Estate Planning Attorney"
    },
    {
      id: 5,
      title: "Building an Emergency Fund",
      excerpt: "How to establish financial security with a properly sized emergency fund.",
      category: "planning",
      date: "January 15, 2023",
      image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "James Wilson",
      authorPosition: "Director of Client Relations"
    },
    {
      id: 6,
      title: "Investment Trends for 2023",
      excerpt: "Emerging investment opportunities and trends to watch in the coming year.",
      category: "investing",
      date: "December 12, 2022",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Jennifer Lee",
      authorPosition: "Chief Investment Officer"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Financial Resources</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-100">
              Insights, guides, and tools to help you make informed financial decisions and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                All Resources
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'investing' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('investing')}
              >
                Investing
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'retirement' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('retirement')}
              >
                Retirement
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'taxes' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('taxes')}
              >
                Taxes
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'planning' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('planning')}
              >
                Financial Planning
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === 'estate' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('estate')}
              >
                Estate Planning
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <ResourceCard 
                  key={resource.id}
                  title={resource.title}
                  excerpt={resource.excerpt}
                  image={resource.image}
                  date={resource.date}
                  author={resource.author}
                  authorPosition={resource.authorPosition}
                  category={resource.category}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No resources found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Financial Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interactive calculators and tools to help you plan and visualize your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Calculator</h3>
              <p className="text-gray-600 mb-4">
                Estimate how much you need to save for retirement and if you're on track to meet your goals.
              </p>
              <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                Try the calculator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <BarChart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Return Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate potential investment returns based on different contribution and growth scenarios.
              </p>
              <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                Try the calculator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Planner</h3>
              <p className="text-gray-600 mb-4">
                Create a comprehensive budget to track income, expenses, and savings goals.
              </p>
              <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                Try the planner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guides, ebooks, and webinars to help you expand your financial knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 animate-fadeIn">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/6693645/pexels-photo-6693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Retirement guide" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Complete Retirement Roadmap</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive guide to planning for retirement at every life stage, from early career to pre-retirement.
                </p>
                <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                  Download the guide
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 animate-fadeIn animation-delay-100">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Investment guide" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of investing, from understanding asset classes to building a diversified portfolio.
                </p>
                <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                  Download the guide
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 animate-fadeIn animation-delay-200">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tax strategies webinar" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax-Efficient Investing Webinar</h3>
                <p className="text-gray-600 mb-4">
                  Join our tax experts for a comprehensive webinar on minimizing taxes and maximizing returns.
                </p>
                <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                  Register for the webinar
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 animate-fadeIn animation-delay-300">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/8297516/pexels-photo-8297516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Estate planning guide" 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estate Planning Essentials</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to creating an effective estate plan that protects your assets and legacy.
                </p>
                <Link to="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
                  Download the guide
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-accent-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter for the latest financial insights, market updates, and exclusive resources.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Have Questions About Your Financial Future?"
        subtitle="Our experts are ready to provide personalized guidance for your unique situation."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default Resources;