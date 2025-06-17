import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Award, Users, Heart, Check, ArrowRight } from 'lucide-react';
import JobCard from '../components/JobCard';
import CtaSection from '../components/CtaSection';

const Careers: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Join Our Team</h1>
            <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-100">
              Build your career at Unique Trust Investment, where innovation meets opportunity in the financial services industry.
            </p>
            <Link to="#open-positions" className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition inline-block animate-fadeIn animation-delay-200">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about creating innovative financial solutions and building a supportive workplace culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation & Growth</h3>
              <p className="text-gray-600">
                Be part of developing cutting-edge financial products like Divimaga and Peramaga. We invest in your development with ongoing training, mentorship programs, and clear career advancement paths.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive compensation, health and retirement benefits, generous PTO, flexible work arrangements, and wellness programs designed to support your overall wellbeing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 p-4 inline-block rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work in a supportive environment where teamwork, diversity of thought, and innovation are valued. We celebrate achievements together and support each other through challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values in the Workplace */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6 order-2 md:order-1 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900">Our Values in Action</h2>
              <p className="text-lg text-gray-600">
                At Unique Trust Investment, our core values aren't just words—they're principles we live by every day. Here's how they translate to our workplace:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <Check className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Trust & Integrity</p>
                    <p className="text-gray-600">We operate with honesty and transparency in all interactions, with clients and colleagues alike.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <Check className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Innovation</p>
                    <p className="text-gray-600">We encourage creative thinking and embrace new ideas that enhance our products and client service.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <Check className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Excellence</p>
                    <p className="text-gray-600">We maintain high standards in our work, always seeking to deliver exceptional results and continuously improve.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 p-1 rounded-full mt-1">
                    <Check className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Collaboration</p>
                    <p className="text-gray-600">We work together across teams, leveraging diverse perspectives to deliver comprehensive solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 animate-fadeIn animation-delay-100">
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life at Unique Trust Investment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experiences working at Unique Trust Investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="John Davis" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">John Davis</h4>
                  <p className="text-gray-600">Product Manager, 4 years at Unique Trust Investment</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working on the development of Divimaga and Peramaga has been incredibly rewarding. The company truly values innovation and gives us the freedom to create products that make a real difference for our clients."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn animation-delay-100">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Laura Kim" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Laura Kim</h4>
                  <p className="text-gray-600">Investment Analyst, 3 years at Unique Trust Investment</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The collaborative culture here is amazing. I work with brilliant colleagues who are always willing to share their knowledge. The work-life balance and growth opportunities have been excellent."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn animation-delay-200">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marcus Johnson" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Marcus Johnson</h4>
                  <p className="text-gray-600">Leasing Specialist, 5 years at Unique Trust Investment</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I've stayed here for five years because I truly believe in our mission. Helping clients through our leasing solutions is incredibly rewarding, and the company provides all the support we need to succeed."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn animation-delay-300">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sophia Martinez" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Sophia Martinez</h4>
                  <p className="text-gray-600">Client Relations Manager, 3 years at Unique Trust Investment</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The professional development opportunities here are outstanding. The company has invested in my growth through training and mentorship. I've been able to advance my career while maintaining work-life balance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our team of financial professionals.
            </p>
          </div>

          <div className="space-y-6">
            <JobCard 
              title="Product Development Manager"
              location="New York, NY"
              type="Full-time"
              department="Product Development"
              description="Lead the development and enhancement of our Divimaga and Peramaga products, working closely with investment teams and client relations."
              requirements={[
                "Bachelor's degree in Finance or related field",
                "5+ years of experience in financial product development",
                "Strong analytical and project management skills",
                "Experience with investment products preferred"
              ]}
              delay={0}
            />
            <JobCard 
              title="Investment Analyst"
              location="Chicago, IL"
              type="Full-time"
              department="Investment Management"
              description="Conduct research and analysis to support our Divimaga and Peramaga investment strategies and client portfolios."
              requirements={[
                "Bachelor's degree in Finance, Economics, or related field",
                "2+ years of investment analysis experience",
                "CFA designation or progress toward completion",
                "Strong quantitative and analytical skills"
              ]}
              delay={100}
            />
            <JobCard 
              title="Leasing Specialist"
              location="Remote (US)"
              type="Full-time"
              department="Leasing Solutions"
              description="Manage client relationships and facilitate leasing transactions for our comprehensive leasing solutions division."
              requirements={[
                "Bachelor's degree required",
                "2+ years of experience in leasing or financing",
                "Excellent communication and negotiation skills",
                "Knowledge of leasing regulations and practices"
              ]}
              delay={200}
            />
            <JobCard 
              title="Client Relations Associate"
              location="Boston, MA"
              type="Full-time"
              department="Client Services"
              description="Support client onboarding and ongoing relationship management for our Divimaga and Peramaga clients."
              requirements={[
                "Bachelor's degree required",
                "1-2 years of experience in financial services",
                "Excellent communication and organizational skills",
                "Customer service orientation"
              ]}
              delay={300}
            />
            <JobCard 
              title="Marketing Specialist"
              location="San Francisco, CA"
              type="Full-time"
              department="Marketing"
              description="Develop and implement marketing strategies to promote our financial products and increase brand awareness."
              requirements={[
                "Bachelor's degree in Marketing or related field",
                "3+ years of marketing experience, preferably in financial services",
                "Experience with digital marketing and content creation",
                "Strong writing and communication skills"
              ]}
              delay={400}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Link to="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group transition">
              Submit your resume for future opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What to expect when you apply for a position at Unique Trust Investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn">
              <div className="bg-primary-50 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Review</h3>
              <p className="text-gray-600">
                Our recruiting team reviews your application and resume to assess your qualifications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Interview</h3>
              <p className="text-gray-600">
                A phone or video interview to discuss your background, experience, and interest in the role.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Role-specific assessments to evaluate your skills, knowledge, and problem-solving abilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn animation-delay-300">
              <div className="bg-primary-50 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Final Interviews</h3>
              <p className="text-gray-600">
                Meet with the team and leadership to discuss the role in depth and assess cultural fit.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-primary-50 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment to Diversity</h3>
            <p className="text-gray-600 mb-4">
              Unique Trust Investment is an equal opportunity employer committed to creating an inclusive workplace. We value diverse perspectives and experiences, and encourage applications from people of all backgrounds, abilities, and identities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Grow Your Career With Us?"
        subtitle="Explore our open positions and join a team that values innovation, collaboration, and excellence."
        buttonText="View Open Positions"
        buttonLink="#open-positions"
      />
    </>
  );
};

export default Careers;