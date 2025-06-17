import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, TrendingUp } from 'lucide-react';

const Feedback: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'existing',
    product: '',
    rating: 0,
    category: 'general',
    feedback: '',
    recommendation: '',
    improvements: '',
    anonymous: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is being edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      feedback: '',
      rating: ''
    };

    if (!formData.anonymous && !formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.anonymous && !formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!formData.anonymous && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
      valid = false;
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Feedback submitted:', formData);
      setFormSubmitted(true);
      
      // Reset form state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          clientType: 'existing',
          product: '',
          rating: 0,
          category: 'general',
          feedback: '',
          recommendation: '',
          improvements: '',
          anonymous: false
        });
      }, 5000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">Your Feedback Matters</h1>
            <p className="text-lg text-gray-200 mb-6 animate-fadeIn animation-delay-100">
              Help us improve our services and products by sharing your experience with Unique Trust Investment.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-8 bg-white rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Feedback!</h3>
                <p className="text-base text-gray-600">
                  Your feedback has been submitted successfully. We appreciate you taking the time to help us improve our services.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <MessageSquare className="h-10 w-10 text-primary-600 mx-auto mb-3" />
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Share Your Experience</h2>
                  <p className="text-gray-600 text-sm">
                    Your feedback helps us enhance our products and services to better serve you and future clients.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Anonymous Option */}
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                        Submit feedback anonymously
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  {!formData.anonymous && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                  )}

                  {/* Client Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-1">
                        Client Type
                      </label>
                      <select
                        id="clientType"
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      >
                        <option value="existing">Existing Client</option>
                        <option value="prospective">Prospective Client</option>
                        <option value="former">Former Client</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                        Product/Service
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      >
                        <option value="">Select a product/service</option>
                        <option value="divimaga">Divimaga</option>
                        <option value="peramaga">Peramaga</option>
                        <option value="leasing">Leasing Solutions</option>
                        <option value="advisory">Investment Advisory</option>
                        <option value="planning">Financial Planning</option>
                        <option value="trust">Trust Services</option>
                        <option value="general">General Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Overall Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className={`p-1 transition ${
                            star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                          } hover:text-yellow-400`}
                        >
                          <Star className="h-6 w-6 fill-current" />
                        </button>
                      ))}
                    </div>
                    {errors.rating && <p className="mt-1 text-xs text-red-500">{errors.rating}</p>}
                  </div>

                  {/* Feedback Category */}
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Feedback Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    >
                      <option value="general">General Feedback</option>
                      <option value="product">Product/Service Quality</option>
                      <option value="customer-service">Customer Service</option>
                      <option value="website">Website Experience</option>
                      <option value="communication">Communication</option>
                      <option value="pricing">Pricing</option>
                      <option value="complaint">Complaint</option>
                      <option value="suggestion">Suggestion</option>
                    </select>
                  </div>

                  {/* Main Feedback */}
                  <div className="mb-4">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Feedback <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      rows={4}
                      value={formData.feedback}
                      onChange={handleChange}
                      placeholder="Please share your experience, thoughts, or suggestions..."
                      className={`w-full px-3 py-2 border ${errors.feedback ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                    ></textarea>
                    {errors.feedback && <p className="mt-1 text-xs text-red-500">{errors.feedback}</p>}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Feedback Matters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Your Feedback Matters</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Your insights help us continuously improve our products and services to better serve you and future clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Enhancement</h3>
              <p className="text-gray-600 text-sm">
                Your feedback directly influences the development and improvement of our Divimaga, Peramaga, and leasing solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn animation-delay-100">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Quality</h3>
              <p className="text-gray-600 text-sm">
                We use your insights to enhance our customer service, communication, and overall client experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-fadeIn animation-delay-200">
              <div className="bg-primary-50 p-3 inline-block rounded-full mb-3">
                <Star className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Your suggestions inspire new features, services, and innovations that benefit our entire client community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;