import React from 'react';
import { History, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About JP Education Academy</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established with a vision to provide world-class education, JP Education Academy has been 
            a beacon of academic excellence and character development for students across all levels.
          </p>
        </div>

        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-slide-up">
          <div>
            <div className="flex items-center mb-6">
              <History className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 1985, JP Education Academy began with a simple yet profound mission: to provide 
              quality education that nurtures both intellectual growth and moral character. Over the decades, 
              we have evolved into a comprehensive educational institution serving students from primary 
              through higher secondary levels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey has been marked by continuous innovation in teaching methodologies, infrastructure 
              development, and student support systems, making us one of the most trusted educational 
              institutions in the region.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="School Building"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in education and character development</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">Building trust through honesty, transparency, and ethical practices</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing modern teaching methods and educational technologies</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition</h3>
              <p className="text-gray-600">Honoring educational traditions while adapting to modern needs</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Years of Excellence</div>
              <p className="text-gray-600">Decades of providing quality education and shaping futures</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-accent-600 mb-2">5000+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Alumni Network</div>
              <p className="text-gray-600">Proud graduates making their mark in various fields worldwide</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Success Rate</div>
              <p className="text-gray-600">Consistent academic excellence and university placements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;