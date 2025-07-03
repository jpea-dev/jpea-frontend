import React from 'react';
import { ExternalLink, FileText, Award, Building, Users, TrendingUp, Shield, CheckCircle, Download, Eye } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  const sectionStyle = "bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mb-8 animate-slide-up";
  const tableStyle = "w-full table-auto border-collapse border-2 border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm";
  const headerStyle = "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold p-4 border border-blue-600";
  const cellStyle = "border border-gray-300 p-4 hover:bg-gray-50 transition-colors duration-200";
  const labelCellStyle = "border border-gray-300 p-4 font-semibold bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800";

  const documentLinks = [
    ["1. COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", "/extension_upgradation.pdf", "FileText"],
    ["2. COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", "/society_certificate.pdf", "Shield"],
    ["3. COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", "/noc_certificate.pdf", "CheckCircle"],
    ["4. COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE", "/recognition_and_renewal.pdf", "Award"],
    ["5. COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", "/nbc.pdf", "Building"],
    ["6. COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", "/fire_safety.pdf", "Shield"],
    ["7. COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION", "/deo_certificate.pdf", "FileText"],
    ["8. COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", "/safe_drinking_water_sanitation.pdf", "CheckCircle"],
  ];

  const resultAndAcademicsLinks = [
    ["1. FEE STRUCTURE OF THE SCHOOL", "/fee_structure.pdf", "DollarSign"],
    ["2. ANNUAL ACADEMIC CALENDAR", "/annual_ac_calendar.pdf", "Calendar"],
    ["3. LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", "/smc.pdf", "Users"],
    ["4. LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", "/pta.pdf", "Users"],
    ["5. LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY", "/result_3yrs.pdf", "TrendingUp"],
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      FileText, Award, Building, Users, TrendingUp, Shield, CheckCircle, Download, Eye
    };
    const IconComponent = icons[iconName as keyof typeof icons] || FileText;
    return IconComponent;
  };

  const DocumentLink = ({ label, url, iconName }: { label: string; url: string; iconName: string }) => {
    const IconComponent = getIcon(iconName);
    return (
      <div className="flex items-center justify-between group">
        <div className="flex items-center flex-1">
          <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors duration-200">
            <IconComponent className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{label}</span>
        </div>
        <div className="flex gap-2 ml-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
          >
            <Eye className="h-3 w-3 mr-1" />
            View
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mandatory Public Disclosure
          </h1>
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200">
            <p className="text-xl text-blue-600 font-semibold mb-2">
              (As per CBSE SARAS Portal Appendix-IX)
            </p>
            <p className="text-lg text-gray-600">
              Complete transparency in school operations and compliance with CBSE regulations
            </p>
          </div>
        </div>

        {/* Section A - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">A. GENERAL INFORMATION</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <tbody>
                {[
                  ["1. NAME OF THE SCHOOL", "J P Education Academy"],
                  ["2. AFFILIATION NO.", "2132627"],
                  ["3. SCHOOL CODE", "70724"],
                  ["4. COMPLETE ADDRESS WITH PIN CODE", "J P EDUCATION ACADEMY, VILL UNCHA PARGANA TALGRAM TIRWA RD, NR POWER HOUSE GURSAHAIGANJ, KANNAUJ, - 209722"],
                  ["5. PRINCIPAL NAME", "AMARENDRA SINGH"],
                  ["6. PRINCIPAL QUALIFICATION", "M.A., B.Ed., M.B.A."],
                  ["7. SCHOOL EMAIL ID", "jpeducationacadmeyghj@gmail.com"],
                  ["8. CONTACT DETAILS (LANDLINE/MOBILE)", "9838653719"],
                ].map(([label, value], i) => (
                  <tr key={i} className="hover:bg-blue-50 transition-colors duration-200">
                    <td className={labelCellStyle}>{label}</td>
                    <td className={cellStyle}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section B - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">B. DOCUMENTS AND INFORMATION</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <tbody>
                {documentLinks.map(([label, url, iconName], i) => (
                  <tr key={i} className="hover:bg-green-50 transition-colors duration-200">
                    <td className={labelCellStyle}>{label}</td>
                    <td className={cellStyle}>
                      <DocumentLink label="View Document" url={url} iconName={iconName} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">C. RESULT AND ACADEMICS</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <tbody>
                {resultAndAcademicsLinks.map(([label, url, iconName], i) => (
                  <tr key={i} className="hover:bg-purple-50 transition-colors duration-200">
                    <td className={labelCellStyle}>{label}</td>
                    <td className={cellStyle}>
                      <DocumentLink label="View Document" url={url} iconName={iconName} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section D - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">D. STAFF (TEACHING)</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <thead>
                <tr>
                  <th className={headerStyle}>SL NO.</th>
                  <th className={headerStyle}>INFORMATION</th>
                  <th className={headerStyle}>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-50 transition-colors duration-200">
                  <td className={cellStyle}>1</td>
                  <td className={labelCellStyle}>Principal</td>
                  <td className={cellStyle}>One</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors duration-200">
                  <td className={cellStyle}>2</td>
                  <td className={labelCellStyle}>Total No. of Teachers</td>
                  <td className={cellStyle}>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-300 text-sm rounded-lg overflow-hidden">
                        <tbody>
                          <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                            <td className="border border-gray-300 p-3 font-semibold text-blue-800">PGT</td>
                            <td className="border border-gray-300 p-3 text-blue-700">16</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-green-50 to-green-100">
                            <td className="border border-gray-300 p-3 font-semibold text-green-800">TGT</td>
                            <td className="border border-gray-300 p-3 text-green-700">20</td>
                          </tr>
                          <tr className="bg-gradient-to-r from-purple-50 to-purple-100">
                            <td className="border border-gray-300 p-3 font-semibold text-purple-800">PRT</td>
                            <td className="border border-gray-300 p-3 text-purple-700">8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors duration-200">
                  <td className={cellStyle}>3</td>
                  <td className={labelCellStyle}>Teacher-Section Ratio</td>
                  <td className={cellStyle}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      1:5
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors duration-200">
                  <td className={cellStyle}>4</td>
                  <td className={labelCellStyle}>Details of Special Educator</td>
                  <td className={cellStyle}>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Award className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Mr. Rahul Kumar</div>
                        <div className="text-sm text-gray-600">M.A. B.Ed. (Special Ed.)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors duration-200">
                  <td className={cellStyle}>5</td>
                  <td className={labelCellStyle}>Counsellor & Wellness Teacher</td>
                  <td className={cellStyle}>
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Ms. Archana Chaturvedi</div>
                        <div className="text-sm text-gray-600">M.A. Psychology</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section E - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">E. EXAM RESULTS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Class X Results */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 text-xl flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Class X Results
              </h3>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-2 border-green-300 text-sm rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="border border-green-500 p-3 font-bold">Year</th>
                      <th className="border border-green-500 p-3 font-bold">Registered</th>
                      <th className="border border-green-500 p-3 font-bold">Passed</th>
                      <th className="border border-green-500 p-3 font-bold">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-green-100 transition-colors duration-200">
                      <td className="border border-green-300 p-3 font-semibold text-green-800">2025</td>
                      <td className="border border-green-300 p-3 text-green-700">143</td>
                      <td className="border border-green-300 p-3 text-green-700">135</td>
                      <td className="border border-green-300 p-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-200 text-green-800">
                          94.40%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Class XII Results */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-4 text-xl flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Class XII Results
              </h3>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-2 border-blue-300 text-sm rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="border border-blue-500 p-3 font-bold">Year</th>
                      <th className="border border-blue-500 p-3 font-bold">Registered</th>
                      <th className="border border-blue-500 p-3 font-bold">Passed</th>
                      <th className="border border-blue-500 p-3 font-bold">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-100 transition-colors duration-200">
                      <td className="border border-blue-300 p-3 font-semibold text-blue-800">2025</td>
                      <td className="border border-blue-300 p-3 text-blue-700">128</td>
                      <td className="border border-blue-300 p-3 text-blue-700">84</td>
                      <td className="border border-blue-300 p-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-200 text-blue-800">
                          65.62%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section F - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">F. SCHOOL INFRASTRUCTURE</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <tbody>
                {[
                  ["Total Area", "8326 sqm", "🏫"],
                  ["Classrooms", "47 (each 46 sqm)", "🏛️"],
                  ["Labs", "6 (each 72 sqm)", "🔬"],
                  ["Internet Facility", "Yes", "🌐"],
                  ["Girls Toilets", "12", "🚺"],
                  ["Boys Toilets", "12", "🚹"],
                ].map(([label, value, emoji], i) => (
                  <tr key={i} className="hover:bg-indigo-50 transition-colors duration-200">
                    <td className={labelCellStyle}>
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{emoji}</span>
                        {label}
                      </div>
                    </td>
                    <td className={cellStyle}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section G - Enhanced */}
        <section className={sectionStyle}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">G. INSPECTION VIDEO</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className={tableStyle}>
              <tbody>
                <tr className="hover:bg-pink-50 transition-colors duration-200">
                  <td className={labelCellStyle}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎥</span>
                      Inspection Video
                    </div>
                  </td>
                  <td className={cellStyle}>
                    <a 
                      href="https://www.youtube.com/watch?v=i91PFqpKOUE" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 border border-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Enhanced Footer Note */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-lg animate-fade-in">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-2 rounded-lg mr-4">
              <CheckCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed">
                <strong>Note:</strong> All uploads are self-attested by Chairman/Manager/Secretary and Principal. 
                Non-genuine documents may attract action as per CBSE norms and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;