import React from 'react';
import { Calendar, FileText, Users, CheckCircle, Clock, MapPin } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join the JP Education Academy family and embark on a journey of academic excellence, 
            character development, and lifelong learning opportunities.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Application</h3>
              <p className="text-gray-600">Submit completed application form with required documents</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Interview</h3>
              <p className="text-gray-600">Student and parent interaction with admission committee</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Selection</h3>
              <p className="text-gray-600">Review of application and notification of admission status</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Enrollment</h3>
              <p className="text-gray-600">Complete enrollment formalities and fee payment</p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600">
              Mark your calendar for key admission milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Opens</h3>
              <p className="text-gray-600 mb-2">January 15, 2025</p>
              <p className="text-sm text-gray-500">Online and offline applications begin</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Clock className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Deadline</h3>
              <p className="text-gray-600 mb-2">March 31, 2025</p>
              <p className="text-sm text-gray-500">Last date for form submission</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interviews</h3>
              <p className="text-gray-600 mb-2">April 5-20, 2025</p>
              <p className="text-sm text-gray-500">Student and parent interactions</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary School (Class 1-5)</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Age appropriate for respective class
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Birth certificate required
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Previous school records (if applicable)
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Middle School (Class 6-8)</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Previous academic records
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Transfer certificate
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Character certificate
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High School (Class 9-12)</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Class 8/10 mark sheets
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Migration certificate
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Entrance test performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Admissions */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 text-center animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our admission office for detailed information and application forms
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-accent-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Visit Us</p>
                <p className="text-sm opacity-90">Admission Office, Main Campus</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Calendar className="h-6 w-6 text-accent-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Office Hours</p>
                <p className="text-sm opacity-90">Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Users className="h-6 w-6 text-accent-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Get Guidance</p>
                <p className="text-sm opacity-90">Meet our admission counselors</p>
              </div>
            </div>
          </div>

          <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Download Application Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;