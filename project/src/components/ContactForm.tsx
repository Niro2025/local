import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    interestAreas: [] as string[]
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return { ...prev, interestAreas: [...prev.interestAreas, value] };
      } else {
        return { ...prev, interestAreas: prev.interestAreas.filter(item => item !== value) };
      }
    });
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you'd send the form data to a server here
      console.log('Form submitted:', formData);
      onSubmit();
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        interestAreas: []
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Contact Method
        </label>
        <select
          id="preferredContact"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Interest
        </label>
        <div className="space-y-1.5">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="investment"
              name="interestAreas"
              value="investment"
              checked={formData.interestAreas.includes('investment')}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="investment" className="ml-2 text-sm text-gray-700">
              Investment Management
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="retirement"
              name="interestAreas"
              value="retirement"
              checked={formData.interestAreas.includes('retirement')}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="retirement" className="ml-2 text-sm text-gray-700">
              Retirement Planning
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="tax"
              name="interestAreas"
              value="tax"
              checked={formData.interestAreas.includes('tax')}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="tax" className="ml-2 text-sm text-gray-700">
              Tax Planning
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="estate"
              name="interestAreas"
              value="estate"
              checked={formData.interestAreas.includes('estate')}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="estate" className="ml-2 text-sm text-gray-700">
              Estate Planning
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="other"
              name="interestAreas"
              value="other"
              checked={formData.interestAreas.includes('other')}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="other" className="ml-2 text-sm text-gray-700">
              Other Services
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;