import React from 'react';
import { ExternalLink } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  const sectionStyle = "bg-white border rounded shadow-md p-6 mb-8";

  const documentLinks = [
    ["1. COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", "/extension_upgradation.pdf"],
    ["2. COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", "/society_certificate.pdf"],
    ["3. COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", "/noc_certificate.pdf"],
    ["4. COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE", "/recognition_and_renewal.pdf"],
    ["5. COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", "nbc.pdf"],
    ["6. COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", "/fire_safety.pdf"],
    ["7. COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION", "/deo_certificate.pdf"],
    ["8. COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", "/safe_drinking_water_sanitation.pdf"],
  ];

  const resultAndAcademicsLinks = [
    ["1. FEE STRUCTURE OF THE SCHOOL", "/fee_structure.pdf"],
    ["2. ANNUAL ACADEMIC CALENDAR", "/annual_ac_calendar.pdf"],
    ["3. LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", "/smc.pdf"],
    ["4. LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", "/pta.pdf"],
    ["5. LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY", "/result_3yrs.pdf"],
  ];

  return (
    <div className="bg-gray-100 px-4 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700 underline underline-offset-4">
          Mandatory Public Disclosure
        </h1>

        {/* Section A */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">A. GENERAL INFORMATION</h2>
          <table className="w-full table-auto border text-sm">
            <tbody>
              {[
                ["1. NAME OF THE SCHOOL", "J P Education Academy"],
                ["2. AFFILIATION NO.", "2132627"],
                ["3. SCHOOL CODE", "70724"],
                ["4. COMPLETE ADDRESS WITH PIN CODE", "J P EDUCATION ACADEMY, VILL UNCHA PARGANA TALGRAM TIRWA RD, NR POWER HOUSE GURSAHAIGANJ, KANNAUJ, - 209722"],
                ["5. PRINCIPAL NAME", "AMARENDRA SINGH"],
                ["6. PRINCIPAL QUALIFICATION ", "M.A., B.Ed., M.B.A."],
                ["7. SCHOOL EMAIL ID", "jpeducationacadmeyghj@gmail.com"],
                ["8. CONTACT DETAILS (LANDLINE/MOBILE)", "9838653719"],
              ].map(([label, value], i) => (
                <tr key={i} className="border">
                  <td className="border p-2 font-medium w-1/2">{label}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section B */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">B. DOCUMENTS AND INFORMATION</h2>
          <table className="w-full table-auto border text-sm">
            <tbody>
              {documentLinks.map(([label, url], i) => (
                <tr key={i} className="border">
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section C */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">C. RESULT AND ACADEMICS</h2>
          <table className="w-full table-auto border text-sm">
            <tbody>
              {resultAndAcademicsLinks.map(([label, url], i) => (
                <tr key={i} className="border">
                  <td className="border p-2">{label}</td>
                  <td className="border p-2">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section D */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">D. STAFF (TEACHING)</h2>
          <table className="w-full table-auto border text-sm">
            <thead>
              <tr>
                <th className="border p-2 font-medium">SL NO.</th>
                <th className="border p-2 font-medium">INFORMATION</th>
                <th className="border p-2 font-medium">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border p-2">1</td>
                <td className="border p-2 font-medium">Principal</td>
                <td className="border p-2">One</td>
              </tr>
              <tr className="border">
                <td className="border p-2">2</td>
                <td className="border p-2 font-medium">Total No. of Teachers</td>
                <td className="border p-2">
                  <table className="w-full border text-sm">
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">PGT</td>
                        <td className="border p-2">16</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">TGT</td>
                        <td className="border p-2">20</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">PRT</td>
                        <td className="border p-2">8</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-2">3</td>
                <td className="border p-2 font-medium">Teacher-Section Ratio</td>
                <td className="border p-2">1:5</td>
              </tr>
              <tr className="border">
                <td className="border p-2">4</td>
                <td className="border p-2 font-medium">Details of Special Educator</td>
                <td className="border p-2">Mr. Rahul Kumar – M.A. B.Ed. (Special Ed.)</td>
              </tr>
              <tr className="border">
                <td className="border p-2">5</td>
                <td className="border p-2 font-medium">Counsellor & Wellness Teacher</td>
                <td className="border p-2">Ms. Archana Chaturvedi – M.A. Psychology</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section E */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">E. EXAM RESULTS</h2>
          <h3 className="font-semibold text-gray-700 mb-2">Class X</h3>
          <table className="table-auto w-full border text-sm mb-4">
            <thead>
              <tr>
                <th className="border p-2">Year</th>
                <th className="border p-2">Registered</th>
                <th className="border p-2">Passed</th>
                <th className="border p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">2025</td>
                <td className="border p-2">143</td>
                <td className="border p-2">135</td>
                <td className="border p-2">94.40%</td>
              </tr>
            </tbody>
          </table>
          <h3 className="font-semibold text-gray-700 mb-2">Class XII</h3>
          <table className="table-auto w-full border text-sm">
            <thead>
              <tr>
                <th className="border p-2">Year</th>
                <th className="border p-2">Registered</th>
                <th className="border p-2">Passed</th>
                <th className="border p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">2025</td>
                <td className="border p-2">128</td>
                <td className="border p-2">84</td>
                <td className="border p-2">65.62%</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section F */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">F. SCHOOL INFRASTRUCTURE</h2>
          <table className="w-full table-auto border text-sm">
            <tbody>
              {[
                ["Total Area", "8326 sqm"],
                ["Classrooms", "47 (each 46 sqm)"],
                ["Labs", "6 (each 72 sqm)"],
                ["Internet Facility", "Yes"],
                ["Girls Toilets", "12"],
                ["Boys Toilets", "12"],
              ].map(([label, value], i) => (
                <tr key={i} className="border">
                  <td className="border p-2 font-medium">{label}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section G */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">G. INSPECTION VIDEO</h2>
          <table className="w-full table-auto border text-sm">
            <tbody>
              <tr>
                <td className="border p-2 font-medium">Inspection Video</td>
                <td className="border p-2">
                  <a href="https://www.youtube.com/watch?v=i91PFqpKOUE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Watch on YouTube
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;