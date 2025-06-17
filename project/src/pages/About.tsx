import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Shield, TrendingUp, Award, Target } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import CtaSection from '../components/CtaSection';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">About Unique Trust Investment</h1>
            <p className="text-lg text-gray-200 mb-6 animate-fadeIn animation-delay-100">
              Our mission is to empower individuals and businesses to achieve financial security and success through innovative investment products and trusted financial guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 animate-fadeIn">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Company history" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4 animate-fadeIn animation-delay-100">
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="text-base text-gray-600">
                Founded in 2010, Unique Trust Investment began with a vision to create innovative financial products that truly serve our clients' needs. Our founders recognized the gap in the market for personalized, transparent financial solutions.
              </p>
              <p className="text-base text-gray-600">
                Starting with our flagship product Divimaga, we've expanded our offerings to include Peramaga for premium investors and comprehensive leasing solutions for businesses. Throughout our growth, we've maintained our commitment to trust, innovation, and client success.
              </p>
              <p className="text-base text-gray-600">
                Today, Unique Trust Investment is recognized as a leader in innovative financial products, with a proven track record of helping thousands of clients achieve their financial goals through our unique approach to investment and financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm">
                We build lasting relationships through transparency, honesty, and ethical practices in all our interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Focus</h3>
              <p className="text-gray-600 text-sm">
                Your financial success is our priority. We listen, understand, and deliver solutions tailored to your unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously develop innovative financial products and solutions to meet evolving market needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-300">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in all aspects of our service, continuously improving to deliver superior results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-400">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">
                We focus on delivering consistent, measurable results that help our clients achieve their financial objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-500">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Partnership</h3>
              <p className="text-gray-600 text-sm">
                We build lasting relationships, focusing on sustainable strategies that ensure long-term financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Leadership Team</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's vision and ensure we deliver exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMember 
              name="Robert Smith"
              position="CEO & Founder"
              bio="With over 25 years in financial services, Robert founded Unique Trust Investment with a vision of innovative, client-centered financial products."
              image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0}
            />
            <TeamMember 
              name="Jennifer Lee"
              position="Chief Investment Officer"
              bio="Jennifer brings 20 years of investment expertise, overseeing our Divimaga and Peramaga product development and performance."
              image="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={100}
            />
            <TeamMember 
              name="David Washington"
              position="Head of Product Development"
              bio="David leads our innovation initiatives, ensuring our financial products meet the evolving needs of our diverse client base."
              image="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={200}
            />
            <TeamMember 
              name="Maria Rodriguez"
              position="Chief Operations Officer"
              bio="Maria ensures our operations run seamlessly, allowing our team to focus entirely on serving our clients' needs."
              image="https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={300}
            />
            <TeamMember 
              name="James Wilson"
              position="Director of Client Relations"
              bio="James leads our client experience initiatives, ensuring every interaction exceeds expectations and builds lasting relationships."
              image="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={400}
            />
            <TeamMember 
              name="Sophia Chen"
              position="Head of Leasing Solutions"
              bio="Sophia oversees our comprehensive leasing division, helping businesses and individuals access the assets they need efficiently."
              image="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Work With Our Expert Team?"
        subtitle="Discover how our innovative products can help you achieve your financial goals."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;