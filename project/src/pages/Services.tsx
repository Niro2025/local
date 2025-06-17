import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Building, Shield, Calculator, Users, Award, Target } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import CtaSection from '../components/CtaSection';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Our Financial Products</h1>
            <p className="text-lg text-gray-200 mb-6 animate-fadeIn animation-delay-100">
              Innovative financial solutions designed to meet your unique investment and financing needs through our flagship products.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Flagship Products</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover our three main financial products, each designed to address specific investment and financing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<DollarSign className="h-8 w-8 text-primary-600" />}
              title="Divimaga"
              description="Our flagship investment product offering diversified portfolio management with competitive returns and flexible investment terms."
              features={[
                "Diversified investment portfolio",
                "Competitive annual returns",
                "Flexible investment terms",
                "Professional portfolio management",
                "Regular performance reporting"
              ]}
              delay={0}
            />
            <ServiceCard 
              icon={<TrendingUp className="h-8 w-8 text-primary-600" />}
              title="Peramaga"
              description="Premium investment solution designed for high-net-worth individuals seeking sophisticated wealth management strategies."
              features={[
                "Premium investment strategies",
                "Personalized wealth management",
                "Exclusive investment opportunities",
                "Dedicated relationship manager",
                "Advanced risk management"
              ]}
              delay={100}
            />
            <ServiceCard 
              icon={<Building className="h-8 w-8 text-primary-600" />}
              title="Leasing Solutions"
              description="Comprehensive leasing and financing options for businesses and individuals looking to acquire assets efficiently."
              features={[
                "Equipment and vehicle leasing",
                "Flexible payment terms",
                "Quick approval process",
                "Competitive interest rates",
                "End-of-lease options"
              ]}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Additional Services</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Complementary financial services to support your complete financial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              title="Investment Advisory"
              description="Professional investment advice and portfolio optimization to maximize your returns while managing risk."
              features={[
                "Investment strategy consultation",
                "Portfolio analysis and optimization",
                "Risk assessment and management",
                "Market research and insights"
              ]}
              delay={0}
            />
            <ServiceCard 
              icon={<Calculator className="h-8 w-8 text-primary-600" />}
              title="Financial Planning"
              description="Comprehensive financial planning services to help you achieve your short-term and long-term financial goals."
              features={[
                "Goal-based financial planning",
                "Retirement planning strategies",
                "Tax optimization planning",
                "Estate planning guidance"
              ]}
              delay={100}
            />
            <ServiceCard 
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="Trust Services"
              description="Professional trust management services to protect and preserve your wealth for future generations."
              features={[
                "Trust establishment and management",
                "Estate administration",
                "Wealth preservation strategies",
                "Succession planning"
              ]}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Client Process</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              A transparent, collaborative approach designed to understand your needs and deliver the right financial solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <ProcessStep 
              number="01"
              title="Initial Consultation"
              description="We begin with a comprehensive discussion to understand your financial goals, risk tolerance, and investment preferences."
              delay={0}
            />
            <ProcessStep 
              number="02"
              title="Needs Assessment"
              description="Our team conducts a thorough analysis of your financial situation to identify the most suitable products and strategies."
              delay={100}
            />
            <ProcessStep 
              number="03"
              title="Product Recommendation"
              description="Based on our assessment, we recommend the most appropriate combination of our products - Divimaga, Peramaga, or leasing solutions."
              delay={200}
            />
            <ProcessStep 
              number="04"
              title="Implementation"
              description="We guide you through the implementation process, ensuring all documentation is completed efficiently and accurately."
              delay={300}
            />
            <ProcessStep 
              number="05"
              title="Ongoing Management"
              description="Your investments and financing arrangements are actively managed and monitored to ensure optimal performance."
              delay={400}
            />
            <ProcessStep 
              number="06"
              title="Regular Reviews"
              description="We conduct regular reviews to assess performance, adjust strategies, and ensure your financial goals remain on track."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Explore Our Financial Products?"
        subtitle="Contact us today to learn more about Divimaga, Peramaga, and our leasing solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;