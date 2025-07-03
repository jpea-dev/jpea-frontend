import React, { useState } from 'react';
import { FileText, Download, Eye, Award, Building, Shield } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  description: string;
  pdfPath: string;
  icon: React.ComponentType<any>;
  color: string;
}

const SchoolCertificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string>('transfer-certificate');

  const certificates: Certificate[] = [
    {
      id: 'transfer-certificate',
      name: 'Transfer Certificate Sample',
      description: 'Official transfer certificate format and sample document',
      pdfPath: '/transfer_certificate.pdf',
      icon: FileText,
      color: 'blue'
    },
    {
      id: 'land-certificate',
      name: 'Land Certificate',
      description: 'Original land ownership and property documentation certificate',
      pdfPath: '/land_certificate.pdf', // <-- This is your original land certificate
      icon: Building,
      color: 'green'
    },
    {
      id: 'land-certificate-renewal',
      name: 'Land Certificate Renewal',
      description: 'Renewal of land ownership and property documentation certificate',
      pdfPath: '/land_certificate_renewal.pdf', // <-- This is your renewal certificate
      icon: Building,
      color: 'green'
    },
    {
      id: 'self-affidavit',
      name: 'Self Affidavit',
      description: 'Self-declaration and affidavit documentation',
      pdfPath: '/self_affidavit.pdf',
      icon: Shield,
      color: 'purple'
    }
  ];

  const selectedCert = certificates.find(cert => cert.id === selectedCertificate);

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'hover') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-50'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-50'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[variant] || '';
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Certificates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access and download official school certificates and documentation. 
            Select a certificate type below to view and download the document.
          </p>
        </div>

        {/* Certificate Selection Buttons */}
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-4">
            {certificates.map((cert) => {
              const IconComponent = cert.icon;
              const isSelected = selectedCertificate === cert.id;
              
              return (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert.id)}
                  className={`flex items-center px-6 py-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    isSelected
                      ? `${getColorClasses(cert.color, 'bg')} ${getColorClasses(cert.color, 'border')} ${getColorClasses(cert.color, 'text')} shadow-lg`
                      : `bg-white border-gray-200 text-gray-700 hover:border-gray-300 ${getColorClasses(cert.color, 'hover')}`
                  }`}
                >
                  <IconComponent className={`h-6 w-6 mr-3 ${isSelected ? getColorClasses(cert.color, 'text') : 'text-gray-500'}`} />
                  <div className="text-left">
                    <div className="font-semibold text-sm md:text-base">{cert.name}</div>
                    <div className="text-xs opacity-75 hidden md:block">{cert.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Certificate Display */}
        {selectedCert && (
          <div className="animate-slide-up">
            {/* Certificate Header */}
            <div className="bg-white rounded-t-2xl shadow-lg p-6 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className={`${getColorClasses(selectedCert.color, 'bg')} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                    <selectedCert.icon className={`h-8 w-8 ${getColorClasses(selectedCert.color, 'text')}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCert.name}</h2>
                    <p className="text-gray-600">{selectedCert.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white ${getColorClasses(selectedCert.color, 'text').replace('text-', 'bg-')} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View in New Tab
                  </a>
                  <a
                    href={selectedCert.pdfPath}
                    download
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <iframe
                  src={selectedCert.pdfPath}
                  title={selectedCert.name}
                  className="w-full h-[70vh] md:h-[80vh] border-0"
                  style={{ minHeight: '600px' }}
                />
                
                {/* Overlay for mobile responsiveness */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center md:hidden">
                  <div className="text-center p-8">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {selectedCert.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      For the best viewing experience, please use the buttons above to view or download the PDF.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={selectedCert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white ${getColorClasses(selectedCert.color, 'text').replace('text-', 'bg-')} hover:opacity-90 transition-all duration-300`}
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        View PDF
                      </a>
                      <a
                        href={selectedCert.pdfPath}
                        download
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about these certificates or need additional documentation, 
              please don't hesitate to contact our administrative office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jpeducationacademyghj@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
              >
                Email Administration
              </a>
              <a
                href="tel:+919450378136"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                Call Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCertificates;