import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { Eye, Target, Users, Award, BookOpen, Lightbulb, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import siteConfig from '../config/siteConfig';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-0">
      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-4 animate-slide-up">
              Welcome to {siteConfig.site.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 font-medium animate-fade-in mb-6">
              {siteConfig.site.description}
            </p>
            
            {/* Dashboard Button */}
            {user ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent-600 hover:bg-accent-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-subtle"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent-600 hover:bg-accent-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-subtle"
              >
                <LogIn className="h-6 w-6 mr-3" />
                Student/Teacher Login
              </Link>
            )}
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
                    backgroundImage: `url('${siteConfig.media.aboutImages.vision}')`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <Eye className="h-16 w-16 mx-auto mb-4 text-accent-300" />
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      {siteConfig.visionMission.vision}
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
                    backgroundImage: `url('${siteConfig.media.aboutImages.mission}')`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <Target className="h-16 w-16 mx-auto mb-4 text-primary-300" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg leading-relaxed">
                      {siteConfig.visionMission.mission}
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
            {/* President's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="relative h-64">
                <img 
                  src={siteConfig.leadership.president.photo}
                  alt={siteConfig.leadership.president.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{siteConfig.leadership.president.name}</h4>
                  <p className="text-sm opacity-90">{siteConfig.leadership.president.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">President's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "{siteConfig.leadership.president.message}"
                </p>
              </div>
            </div>

            {/* Manager's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="relative h-64">
                <img 
                  src={siteConfig.leadership.manager.photo}
                  alt={siteConfig.leadership.manager.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{siteConfig.leadership.manager.name}</h4>
                  <p className="text-sm opacity-90">{siteConfig.leadership.manager.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-accent-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Manager's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "{siteConfig.leadership.manager.message}"
                </p>
              </div>
            </div>

            {/* Principal's Desk */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up">
              <div className="relative h-64">
                <img 
                  src={siteConfig.leadership.principal.photo}
                  alt={siteConfig.leadership.principal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{siteConfig.leadership.principal.name}</h4>
                  <p className="text-sm opacity-90">{siteConfig.leadership.principal.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Principal's Desk</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "{siteConfig.leadership.principal.message}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose {siteConfig.site.name}</h2>
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