import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    // In a real application, this would handle form submission to a backend
    setFormSubmitted(true);
    
    // Reset form state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Contact Us</h1>
            <p className="text-lg text-gray-200 mb-6 animate-fadeIn animation-delay-100">
              Get in touch with our team of financial experts to discuss your needs and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information */}
            <div className="lg:w-1/3 animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 p-2.5 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Our Office</h3>
                    <p className="text-gray-600 text-sm">123 Finance Street</p>
                    <p className="text-gray-600 text-sm">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 p-2.5 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Phone</h3>
                    <p className="text-gray-600 text-sm">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm">Toll-free: (800) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 p-2.5 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Email</h3>
                    <p className="text-gray-600 text-sm">contact@financepro.com</p>
                    <p className="text-gray-600 text-sm">support@financepro.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 p-2.5 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: By appointment only</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Connect With Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="bg-primary-100 p-2.5 rounded-full hover:bg-primary-200 transition" aria-label="LinkedIn">
                    <svg className="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-100 p-2.5 rounded-full hover:bg-primary-200 transition" aria-label="Twitter">
                    <svg className="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-100 p-2.5 rounded-full hover:bg-primary-200 transition" aria-label="Facebook">
                    <svg className="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.125-5.864 10.125-11.854z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-primary-100 p-2.5 rounded-full hover:bg-primary-200 transition" aria-label="Instagram">
                    <svg className="h-4 w-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 animate-fadeIn animation-delay-100">
              <div className="bg-white p-6 rounded-lg shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-base text-gray-600">
                      Your message has been sent successfully. A member of our team will be in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-5">Send Us a Message</h2>
                    <ContactForm onSubmit={handleFormSubmit} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about contacting us and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly will someone respond to my inquiry?</h3>
              <p className="text-gray-600 text-sm">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md animate-fadeIn animation-delay-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I schedule a virtual consultation?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we offer both in-person and virtual consultations. You can request your preference in the contact form.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md animate-fadeIn animation-delay-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a fee for an initial consultation?</h3>
              <p className="text-gray-600 text-sm">
                We offer a complimentary 30-minute initial consultation to discuss your needs and how we might be able to help.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md animate-fadeIn animation-delay-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What information should I prepare before a consultation?</h3>
              <p className="text-gray-600 text-sm">
                For the most productive initial meeting, it helps to have a general understanding of your current financial situation and goals. Specific documents aren't required for the first meeting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;