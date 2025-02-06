import React, { useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Reachus = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    file: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (formData.fullName.length < 6) {
      formErrors.fullName = 'Full name must be at least 6 characters.';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Enter a valid email address.';
    }
    if (formData.message.length < 20) {
      formErrors.message = 'Message must be at least 20 characters.';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ fullName: '', phone: '', email: '', message: '', file: null });
      setErrors({});
    }
  };

  return (
    <>
    <Navbar/>
    <section className=" bg-gradient-to-b from-black to-gray-800 text-white py-16 pt-16">
      <div className="mt-[100px] container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Information Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Launch & Grow Your Ecommerce Business 10X Faster</h2>
            <p className="text-gray-300">Let's discuss potential opportunities for your Business! Apply Now!</p>
            <h3 className="text-3xl font-bold">Expertise Support:</h3>
            <p className="text-gray-300">Phone: +91-1234567890</p>
            <p className="text-gray-300">Email: contact@gmail.com</p>
            <p className="text-gray-300">Social Links:</p>
          </div>

          {/* Form Section */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full text-black p-3 border ${errors.fullName ? 'border-red-500' : 'border-green-500'} rounded-lg focus:outline-none`}
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full text-black p-3 border ${errors.phone ? 'border-red-500' : 'border-green-500'} rounded-lg focus:outline-none`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full text-black p-3 border ${errors.email ? 'border-red-500' : 'border-green-500'} rounded-lg focus:outline-none`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full text-black p-3 border ${errors.message ? 'border-red-500' : 'border-green-500'} rounded-lg focus:outline-none`}
                  rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Add File (Optional)</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full text-white p-3 border border-gray-600 rounded-lg focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Reachus;