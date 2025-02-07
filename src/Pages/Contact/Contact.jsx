import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-3xl text-blue-500" />, 
    label: "Email", 
    value: "rasadulislam.cse@gmail.com", 
    link: "mailto:rasadulislam.cse@gmail.com"
  },
  {
    icon: <FaPhoneAlt className="text-3xl text-green-500" />, 
    label: "Phone", 
    value: "+8801745422695", 
    link: "tel:+8801745422695"
  },
  {
    icon: <FaWhatsapp className="text-3xl text-green-500" />, 
    label: "WhatsApp", 
    value: "+8801745422695", 
    link: "https://wa.me/8801745422695"
  }
];

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto my-20 px-8 py-10 bg-gradient-to-r from-white to-gray-100 shadow-xl rounded-xl text-gray-800 border border-gray-300"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Contact Information
      </h2>

      {/* Contact Info */}
      <div className="space-y-6">
        {contactInfo.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center space-x-6 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300"
          >
            {contact.icon}
            <div>
              <p className="text-lg font-semibold text-gray-700">{contact.label}:</p>
              <a
                href={contact.link}
                className="text-lg text-blue-600 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
