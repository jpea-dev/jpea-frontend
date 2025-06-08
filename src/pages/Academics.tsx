import React from 'react';
import { BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture intellectual growth, 
            critical thinking, and holistic development of every student.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Primary School */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-slide-up">
            <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Primary School</h3>
              </div>
              <p className="text-gray-600 mb-4">Classes 1-5 with focus on foundational learning and creativity</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Interactive learning methods
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Art and craft activities
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Physical education
                </li>
              </ul>
            </div>
          </div>

          {/* Middle School */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-slide-up">
            <div className="h-48 bg-gradient-to-br from-accent-500 to-accent-700"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-accent-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Middle School</h3>
              </div>
              <p className="text-gray-600 mb-4">Classes 6-8 emphasizing conceptual understanding and skill development</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  STEM education
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Language development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Project-based learning
                </li>
              </ul>
            </div>
          </div>

          {/* High School */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-slide-up">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">High School</h3>
              </div>
              <p className="text-gray-600 mb-4">Classes 9-12 preparing students for higher education and careers</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Stream specialization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Career counseling
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Competitive exam prep
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subjects and Curriculum */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600">
              Our curriculum is designed to provide a well-rounded education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Core Subjects</h3>
              <p className="text-gray-600">Mathematics, Science, English, Social Studies, and regional language</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arts & Crafts</h3>
              <p className="text-gray-600">Music, dance, visual arts, and creative expression programs</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sports</h3>
              <p className="text-gray-600">Physical education, team sports, and individual fitness programs</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Life Skills</h3>
              <p className="text-gray-600">Leadership, communication, problem-solving, and character development</p>
            </div>
          </div>
        </div>

        {/* Academic Features */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Academic Excellence Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Teaching Methods</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced faculty employs innovative teaching methodologies including digital learning tools, 
                interactive sessions, and hands-on activities to ensure effective knowledge transfer and student engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment & Evaluation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous and comprehensive evaluation system that focuses on overall development rather than 
                just academic performance, including regular feedback and personalized learning support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart classrooms equipped with modern technology, computer labs, and digital learning resources 
                to prepare students for the digital age and enhance their learning experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Attention</h3>
              <p className="text-gray-600 leading-relaxed">
                Small class sizes and dedicated mentorship programs ensure that each student receives 
                personalized attention and support to reach their full potential in academics and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;