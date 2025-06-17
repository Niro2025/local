import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, DollarSign, Building } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import FeaturedService from '../components/FeaturedService';
import CtaSection from '../components/CtaSection';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fadeIn">
                Trusted Financial <br />
                <span className="text-accent-400">Investment Solutions</span>
              </h1>
              <p className="text-base text-gray-200 md:w-5/6 animate-fadeIn animation-delay-100">
                Unique Trust Investment offers innovative financial products including Divimaga, Peramaga, and comprehensive leasing solutions to help you achieve your financial goals.
              </p>
              <div className="flex flex-wrap gap-3 pt-3 animate-fadeIn animation-delay-200">
                <Link to="/contact" className="px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </Link>
                <Link to="/services" className="px-5 py-2.5 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition">
                  Our Products
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8 animate-fadeIn animation-delay-300">
              <img 
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Financial professionals" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-3 animate-fadeIn">
              <div className="bg-primary-50 p-3 rounded-full mb-3">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Trusted</h3>
              <p className="text-gray-600 text-sm mt-1">By 5,000+ clients</p>
            </div>
            <div className="flex flex-col items-center p-3 animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 p-3 rounded-full mb-3">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Award Winning</h3>
              <p className="text-gray-600 text-sm mt-1">Excellence in Finance</p>
            </div>
            <div className="flex flex-col items-center p-3 animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 p-3 rounded-full mb-3">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
              <p className="text-gray-600 text-sm mt-1">25+ certified advisors</p>
            </div>
            <div className="flex flex-col items-center p-3 animate-fadeIn animation-delay-300">
              <div className="bg-primary-50 p-3 rounded-full mb-3">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
              <p className="text-gray-600 text-sm mt-1">Consistent returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Financial Products</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover our innovative financial solutions designed to meet your unique investment and financing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedService 
              icon={<DollarSign className="h-8 w-8 text-primary-600" />}
              title="Divimaga"
              description="Our flagship investment product offering diversified portfolio management with competitive returns and flexible terms."
              delay={0}
            />
            <FeaturedService 
              icon={<TrendingUp className="h-8 w-8 text-primary-600" />}
              title="Peramaga"
              description="Premium investment solution designed for high-net-worth individuals seeking sophisticated wealth management strategies."
              delay={100}
            />
            <FeaturedService 
              icon={<Building className="h-8 w-8 text-primary-600" />}
              title="Leasing Solutions"
              description="Comprehensive leasing and financing options for businesses and individuals looking to acquire assets efficiently."
              delay={200}
            />
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
              View all products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1 animate-fadeIn">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4 order-1 md:order-2 animate-fadeIn animation-delay-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                15+ Years of Financial Excellence
              </h2>
              <p className="text-base text-gray-600">
                Since 2010, Unique Trust Investment has been providing exceptional financial services to individuals and businesses. Our innovative products - Divimaga, Peramaga, and leasing solutions - are designed to meet diverse financial needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Innovative financial products tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Client-centered approach with personalized service</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <ArrowRight className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 text-sm">Transparent processes with competitive rates</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link to="/about" className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition inline-block">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Hear from businesses and individuals who have transformed their financial future with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              content="Divimaga has been an excellent investment choice for my portfolio. The returns have been consistent and the team at Unique Trust Investment provides outstanding support."
              author="Sarah Johnson"
              position="Business Owner"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0}
            />
            <TestimonialCard 
              content="The leasing solutions provided by Unique Trust Investment helped us expand our business efficiently. Their flexible terms and competitive rates made all the difference."
              author="Michael Chen"
              position="CEO, Tech Innovations"
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={100}
            />
            <TestimonialCard 
              content="Peramaga has exceeded my expectations as a premium investment product. The personalized service and sophisticated strategies have delivered impressive results."
              author="Amanda Williams"
              position="Investment Professional"
              image="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Secure Your Financial Future?"
        subtitle="Discover how our innovative products can help you achieve your investment goals."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;