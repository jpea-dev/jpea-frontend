import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">JP Education Academy, Indra Nagar, Tirwa Road, Gursahaiganj, Kannauj</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@jpeducationacademy.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">Fee Structure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">Parent Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">Alumni Network</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us on social media for the latest updates and news from JP Education Academy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 JP Education Academy. All Rights Reserved. | 
            <span className="text-accent-400 ml-1">Empowering Excellence in Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;