import React from 'react';
import { FileText, Users, Building, Award, CheckCircle } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mandatory Public Disclosure</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In accordance with CBSE guidelines and transparency requirements, we provide complete 
            information about our institution's policies, procedures, and administrative details.
          </p>
        </div>

        {/* School Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-up">
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">School Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">School Name:</span>
                <span className="text-gray-600">JP Education Academy</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Affiliation No:</span>
                <span className="text-gray-600">1234567</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">School Code:</span>
                <span className="text-gray-600">12345</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Academic Session:</span>
                <span className="text-gray-600">April - March</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Board:</span>
                <span className="text-gray-600">CBSE</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-up">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-accent-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Management Details</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Chairman:</span>
                <span className="text-gray-600">Mr. J.P. Sharma</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Principal:</span>
                <span className="text-gray-600">Dr. Priya Sharma</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Vice Principal:</span>
                <span className="text-gray-600">Mr. Rajesh Kumar</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium text-gray-700">Academic Year:</span>
                <span className="text-gray-600">2024-25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Important Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">CBSE Affiliation Certificate</h3>
              <p className="text-gray-600 mb-4">Official CBSE affiliation document and recognition certificate</p>
              <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust Registration</h3>
              <p className="text-gray-600 mb-4">Society registration and trust deed documents</p>
              <button className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">NOC from State Government</h3>
              <p className="text-gray-600 mb-4">No Objection Certificate from state education department</p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fee Structure</h3>
              <p className="text-gray-600 mb-4">Detailed fee structure for all classes and academic year</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Calendar</h3>
              <p className="text-gray-600 mb-4">Annual academic calendar with important dates and events</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">School Policies</h3>
              <p className="text-gray-600 mb-4">Comprehensive school policies and guidelines document</p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
                Download PDF →
              </button>
            </div>
          </div>
        </div>

        {/* Infrastructure Details */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Infrastructure & Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Total Area</h3>
              <p className="text-gray-600">5 Acres campus with modern infrastructure</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Classrooms</h3>
              <p className="text-gray-600">40 well-ventilated and spacious classrooms</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratories</h3>
              <p className="text-gray-600">Science, Computer, and Language labs</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Library</h3>
              <p className="text-gray-600">Well-stocked library with 10,000+ books</p>
            </div>
          </div>
        </div>

        {/* Staff Information */}
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Staff Information</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">45</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Teaching Staff</div>
                <p className="text-gray-600">Qualified and experienced educators</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-accent-600 mb-2">15</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Non-Teaching Staff</div>
                <p className="text-gray-600">Administrative and support staff</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1200</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Total Students</div>
                <p className="text-gray-600">Enrolled across all classes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for More Information */}
        <div className="mt-16 text-center bg-primary-900 text-white rounded-3xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8 opacity-90">
            For additional details or clarifications regarding our mandatory disclosures, please contact our administration office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Administration
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Download All Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;