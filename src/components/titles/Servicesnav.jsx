import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import webDesignImage from '../../assets/services2/webdesign.png';
import webdevelopment from '../../assets/services2/webdevelopment.png'; // Importing the image
import digitalmarketing from '../../assets/services2/digitalmarketing.png';

const servicesData = [
  { 
    id: 1, 
    title: 'Web Design', 
    description: 'Creating modern and user-friendly web designs that enhance user experience and engagement.', 
    image: webDesignImage // Use the imported image
  },
  { 
    id: 2, 
    title: 'Web Development', 
    description: 'Developing responsive and functional websites with the latest technologies.', 
    image: webdevelopment
  },
  { 
    id: 3, 
    title: 'Digital Marketing', 
    description: 'Providing effective digital marketing solutions to grow your online presence.', 
    image:digitalmarketing
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-black to-gray-800 text-white py-16">
        <div className="mt-[100px] container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold mb-6">Why We Are the Best</h2>
            <p className="text-gray-300 mb-6">
              Our team is dedicated to delivering high-quality solutions tailored to meet your unique business needs. We use the latest technologies and follow industry best practices to ensure the best results. Our commitment to innovation, creativity, and customer satisfaction sets us apart from the competition.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you need a stunning website design, a robust web application, or a comprehensive digital marketing strategy, we have the expertise to help you succeed. Let us be your trusted partner in the digital world.
            </p>
          </div>
          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-2">Phone: +91 123 456 8905</p>
            <p className="text-gray-300">Email: contact@ourservices.com</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;