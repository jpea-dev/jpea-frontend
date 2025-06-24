import React from 'react';
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  Award, 
  Building, 
  Heart, 
  GraduationCap, 
  DollarSign, 
  Calendar, 
  Users, 
  UserCheck, 
  TrendingUp, 
  Download,
  ExternalLink,
  Play
} from 'lucide-react';
import siteConfig from '../config/siteConfig';

const iconMap = {
  FileText,
  Shield,
  CheckCircle,
  Award,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Calendar,
  Users,
  UserCheck,
  TrendingUp
};

const MandatoryDisclosure: React.FC = () => {
  const { mandatoryDisclosure, official, leadership, stats, staffInfo, examResults } = siteConfig;

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || FileText;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'legal':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'safety':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'academic':
        return 'bg-purple-100 text-purple-600 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {mandatoryDisclosure.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {mandatoryDisclosure.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {mandatoryDisclosure.description}
          </p>
        </div>

        {/* General Information */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <Building className="h-10 w-10 text-primary-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">General Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">School Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Name:</span> {mandatoryDisclosure.generalInfo.schoolName}</p>
                    <p><span className="font-medium">CBSE Affiliation No.:</span> {official.cbse.affiliationNo}</p>
                    <p><span className="font-medium">School Code:</span> {official.cbse.schoolCode}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Email:</span> {mandatoryDisclosure.generalInfo.schoolEmail}</p>
                    <p><span className="font-medium">Phone:</span> {mandatoryDisclosure.generalInfo.contactNumber}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Principal Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Name:</span> {leadership.principal.name}</p>
                    <p><span className="font-medium">Qualification:</span> {leadership.principal.qualification}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">{mandatoryDisclosure.generalInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Documents & Certificates</h2>
            <p className="text-xl text-gray-600">
              Official documents and certifications as required by CBSE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandatoryDisclosure.documents.map((doc, index) => {
              const IconComponent = getIcon(doc.icon);
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getCategoryColor(doc.category)}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.name}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Academic Documents */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Information</h2>
              <p className="text-xl text-gray-600">
                Academic policies, results, and administrative details
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mandatoryDisclosure.academicDocuments.map((doc, index) => {
                const IconComponent = getIcon(doc.icon);
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                    <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.name}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      View Document
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Staff Information */}
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Staff Information</h2>
            <p className="text-xl text-gray-600">
              Details about our teaching and non-teaching staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{staffInfo.totalTeachers}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Total Teachers</div>
              <p className="text-sm text-gray-600">PGT: {staffInfo.pgt} | TGT: {staffInfo.tgt} | PRT: {staffInfo.prt} | NTT: {staffInfo.ntt} | PTI: {staffInfo.pti}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-600" />
              </div>
              <div className="text-3xl font-bold text-accent-600 mb-2">{staffInfo.teacherSectionRatio}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Teacher Ratio</div>
              <p className="text-sm text-gray-600">Teacher to Section</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-lg font-bold text-green-600 mb-2">Special Educator</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{staffInfo.specialEducator.name}</div>
              <p className="text-xs text-gray-600">{staffInfo.specialEducator.qualification}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-lg font-bold text-blue-600 mb-2">Counsellor</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{staffInfo.counsellor.name}</div>
              <p className="text-xs text-gray-600">{staffInfo.counsellor.qualification}</p>
            </div>
          </div>
        </section>

        {/* Board Exam Results */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Board Examination Results</h2>
              <p className="text-xl text-gray-600">
                Academic performance in CBSE board examinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Class X Results</h3>
                    <p className="text-gray-600">Academic Year {examResults.classX.year}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Registered:</span>
                    <span className="font-bold text-gray-900">{examResults.classX.registered}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Passed:</span>
                    <span className="font-bold text-gray-900">{examResults.classX.passed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pass Percentage:</span>
                    <span className="font-bold text-green-600 text-xl">{examResults.classX.passPercentage}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Class XII Results</h3>
                    <p className="text-gray-600">Academic Year {examResults.classXII.year}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Registered:</span>
                    <span className="font-bold text-gray-900">{examResults.classXII.registered}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Passed:</span>
                    <span className="font-bold text-gray-900">{examResults.classXII.passed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pass Percentage:</span>
                    <span className="font-bold text-blue-600 text-xl">{examResults.classXII.passPercentage}%</span>
                  </div>
                  {examResults.classXII.absent && (
                    <div className="text-sm text-gray-500">
                      ({examResults.classXII.absent} student absent)
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">School Infrastructure</h2>
            <p className="text-xl text-gray-600">
              Modern facilities and infrastructure details
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">{stats.totalAreaSqM}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Total Area</div>
              <p className="text-sm text-gray-600">Square Meters</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-2">{stats.classrooms}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Classrooms</div>
              <p className="text-sm text-gray-600">{stats.classroomsSqM} sq.m each</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">{stats.labs}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Laboratories</div>
              <p className="text-sm text-gray-600">{stats.labsSqM} sq.m each</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{stats.internetFacility ? 'YES' : 'NO'}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Internet</div>
              <p className="text-sm text-gray-600">High-speed connectivity</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-pink-600 mb-2">{stats.girlsToilets}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Girls Toilets</div>
              <p className="text-sm text-gray-600">Well-maintained facilities</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">{stats.boysToilets}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Boys Toilets</div>
              <p className="text-sm text-gray-600">Well-maintained facilities</p>
            </div>
          </div>
        </section>

        {/* Inspection Video */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{mandatoryDisclosure.inspectionVideo.title}</h2>
              <p className="text-xl opacity-90 mb-8">
                {mandatoryDisclosure.inspectionVideo.description}
              </p>
            </div>
            
            <a
              href={mandatoryDisclosure.inspectionVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="h-6 w-6 mr-3" />
              Watch Inspection Video
              <ExternalLink className="h-5 w-5 ml-3" />
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="animate-fade-in">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  {mandatoryDisclosure.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;