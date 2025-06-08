import React from 'react';
import Carousel from '../components/Carousel';
import { Eye, Target, Users, Award, BookOpen, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-4 animate-slide-up">
              Welcome to JP Education Academy
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 font-medium animate-fade-in">
              Empowering students with knowledge and excellence since our foundation
            </p>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to shaping future leaders through excellence in education and character development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Vision */}
            <div className="group cursor-pointer animate-slide-up">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-90"></div>
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <Eye className="h-16 w-16 mx-auto mb-4 text-accent-300" />
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      To be a premier educational institution that nurtures innovative thinking, 
                      ethical values, and global citizenship in every student we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="group cursor-pointer animate-slide-up">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-600 to-accent-800 opacity-90"></div>
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <Target className="h-16 w-16 mx-auto mb-4 text-primary-300" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg leading-relaxed">
                      To provide comprehensive, quality education that empowers students to achieve 
                      academic excellence while developing strong moral character and leadership skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Desk Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Desk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated leadership team committed to educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principal's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Principal's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Education is the foundation of progress. At JP Education Academy, we are committed to 
                  providing an environment where every student can discover their potential and excel 
                  academically while developing strong character and values."
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Mr. Amarendra Singh</p>
                  <p>Principal, JP Education Academy</p>
                </div>
              </div>
            </div>

            {/* Manager's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="h-64 bg-gradient-to-br from-accent-500 to-accent-700"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Manager's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Our mission is to create a seamless educational experience by ensuring efficient 
                  operations, excellent facilities, and continuous improvement in all aspects of 
                  student life and academic delivery."
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Mr. Indra Kumar Gupta</p>
                  <p>Academic Manager, JP Education Academy</p>
                </div>
              </div>
            </div>

            {/* President's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-700"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">President's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Education is the most powerful tool for transformation. Our vision is to build 
                  an institution that not only imparts knowledge but also shapes responsible 
                  citizens who will contribute positively to society."
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">Mrs. Radha Gupta</p>
                  <p>President, JP Education Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose JP Education Academy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for quality education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <BookOpen className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Well-structured academic programs aligned with national standards</p>
            </div>

            <div className="text-center group animate-fade-in">
              <div className="bg-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors duration-300">
                <Users className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Experienced and dedicated teachers committed to student success</p>
            </div>

            <div className="text-center group animate-fade-in">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence Recognition</h3>
              <p className="text-gray-600">Consistently achieving outstanding academic and co-curricular results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
