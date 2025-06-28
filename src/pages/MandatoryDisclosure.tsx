import React from 'react';
import { ExternalLink } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  const sectionStyle = "bg-white border rounded shadow-md p-6 mb-8";

  const documentLinks = [
    ["Affiliation Letter", "https://ik.imagekit.io/jpeaghj/docs/extension_upgradation.pdf"],
    ["Society Registration Certificate", "https://ik.imagekit.io/jpeaghj/docs/society_certificate.pdf"],
    ["No Objection Certificate", "https://ik.imagekit.io/jpeaghj/docs/noc_certificate.pdf"],
    ["Recognition Certificate", "https://ik.imagekit.io/jpeaghj/docs/recognition_and_renewal.pdf"],
    ["Building Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/nbc.pdf"],
    ["Fire Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/fire_safety.pdf"],
    ["Self Certification", "https://ik.imagekit.io/jpeaghj/docs/deo_certificate.pdf"],
    ["Water, Health & Sanitation Certificate", "https://ik.imagekit.io/jpeaghj/docs/safe_drinking_water_sanitation.pdf"],
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
                ["1. Name of the School", "J P Education Academy"],
                ["2. Affiliation No.", "2132627"],
                ["3. School Code", "70724"],
                ["4. Address", "VILL UNCHA PARGANA, TALGRAM TIRWA RD, NR POWER HOUSE, GURSAHAIGANJ, KANNAUJ, 209722"],
                ["5. Principal Name", "Amarendra Singh"],
                ["6. Principal Qualification", "M.A., B.Ed., M.B.A."],
                ["7. Email ID", "jpeducationacadmeyghj@gmail.com"],
                ["8. Contact", "9838653719"],
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
          {documentLinks.map(([label, url], i) => (
            <div key={i} className="flex justify-between items-center border p-3 mb-2 rounded">
              <span>{i + 1}. {label}</span>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                View <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </section>

        {/* Section C */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">C. RESULT AND ACADEMICS</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/fee_structure.pdf" className="text-blue-600 hover:underline">Fee Structure</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/annual_ac_calendar.pdf" className="text-blue-600 hover:underline">Annual Academic Calendar</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/smc.pdf" className="text-blue-600 hover:underline">SMC List</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/pta.pdf" className="text-blue-600 hover:underline">PTA Members List</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/result_3yrs.pdf" className="text-blue-600 hover:underline">Board Results (Last 3 Years)</a></li>
          </ul>
        </section>

        {/* Section D */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">D. STAFF (TEACHING)</h2>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Principal: One</li>
            <li>Total Teachers: 56 (PGT: 16, TGT: 20, PRT: 8)</li>
            <li>Teacher-Section Ratio: 1:5</li>
            <li>Special Educator: Mr. Rahul Kumar – M.A. B.Ed. (Special Ed.)</li>
            <li>Counsellor & Wellness Teacher: Ms. Archana Chaturvedi – M.A. Psychology</li>
          </ul>
        </section>

        {/* Section E */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">E. EXAM RESULTS</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Class X</h3>
            <table className="table-auto w-full border text-sm">
              <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
              <tbody><tr><td className="border p-2">2025</td><td className="border p-2">143</td><td className="border p-2">135</td><td className="border p-2">94.40%</td></tr></tbody>
            </table>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Class XII</h3>
            <table className="table-auto w-full border text-sm">
              <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
              <tbody><tr><td className="border p-2">2025</td><td className="border p-2">128</td><td className="border p-2">84</td><td className="border p-2">65.62%</td></tr></tbody>
            </table>
          </div>
        </section>

        {/* Section F */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">F. SCHOOL INFRASTRUCTURE</h2>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Total Area: 8326 sqm</li>
            <li>Classrooms: 47 (each 46 sqm)</li>
            <li>Labs: 6 (each 72 sqm)</li>
            <li>Internet Facility: Yes</li>
            <li>Girls Toilets: 12</li>
            <li>Boys Toilets: 12</li>
          </ul>
        </section>

        {/* Section G */}
        <section className={sectionStyle + " text-center"}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">G. INSPECTION VIDEO</h2>
          <a href="https://www.youtube.com/watch?v=i91PFqpKOUE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
            Watch on YouTube
          </a>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;import React from 'react';
import { ExternalLink } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  const sectionStyle = "bg-white border rounded shadow-md p-6 mb-8";

  const documentLinks = [
    ["Affiliation Letter", "https://ik.imagekit.io/jpeaghj/docs/extension_upgradation.pdf"],
    ["Society Registration Certificate", "https://ik.imagekit.io/jpeaghj/docs/society_certificate.pdf"],
    ["No Objection Certificate", "https://ik.imagekit.io/jpeaghj/docs/noc_certificate.pdf"],
    ["Recognition Certificate", "https://ik.imagekit.io/jpeaghj/docs/recognition_and_renewal.pdf"],
    ["Building Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/nbc.pdf"],
    ["Fire Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/fire_safety.pdf"],
    ["Self Certification", "https://ik.imagekit.io/jpeaghj/docs/deo_certificate.pdf"],
    ["Water, Health & Sanitation Certificate", "https://ik.imagekit.io/jpeaghj/docs/safe_drinking_water_sanitation.pdf"],
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
                ["1. Name of the School", "J P Education Academy"],
                ["2. Affiliation No.", "2132627"],
                ["3. School Code", "70724"],
                ["4. Address", "VILL UNCHA PARGANA, TALGRAM TIRWA RD, NR POWER HOUSE, GURSAHAIGANJ, KANNAUJ, 209722"],
                ["5. Principal Name", "Amarendra Singh"],
                ["6. Principal Qualification", "M.A., B.Ed., M.B.A."],
                ["7. Email ID", "jpeducationacadmeyghj@gmail.com"],
                ["8. Contact", "9838653719"],
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
          {documentLinks.map(([label, url], i) => (
            <div key={i} className="flex justify-between items-center border p-3 mb-2 rounded">
              <span>{i + 1}. {label}</span>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                View <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </section>

        {/* Section C */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">C. RESULT AND ACADEMICS</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/fee_structure.pdf" className="text-blue-600 hover:underline">Fee Structure</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/annual_ac_calendar.pdf" className="text-blue-600 hover:underline">Annual Academic Calendar</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/smc.pdf" className="text-blue-600 hover:underline">SMC List</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/pta.pdf" className="text-blue-600 hover:underline">PTA Members List</a></li>
            <li><a href="https://ik.imagekit.io/jpeaghj/docs/result_3yrs.pdf" className="text-blue-600 hover:underline">Board Results (Last 3 Years)</a></li>
          </ul>
        </section>

        {/* Section D */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">D. STAFF (TEACHING)</h2>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Principal: One</li>
            <li>Total Teachers: 56 (PGT: 16, TGT: 20, PRT: 8)</li>
            <li>Teacher-Section Ratio: 1:5</li>
            <li>Special Educator: Mr. Rahul Kumar – M.A. B.Ed. (Special Ed.)</li>
            <li>Counsellor & Wellness Teacher: Ms. Archana Chaturvedi – M.A. Psychology</li>
          </ul>
        </section>

        {/* Section E */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">E. EXAM RESULTS</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Class X</h3>
            <table className="table-auto w-full border text-sm">
              <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
              <tbody><tr><td className="border p-2">2025</td><td className="border p-2">143</td><td className="border p-2">135</td><td className="border p-2">94.40%</td></tr></tbody>
            </table>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Class XII</h3>
            <table className="table-auto w-full border text-sm">
              <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
              <tbody><tr><td className="border p-2">2025</td><td className="border p-2">128</td><td className="border p-2">84</td><td className="border p-2">65.62%</td></tr></tbody>
            </table>
          </div>
        </section>

        {/* Section F */}
        <section className={sectionStyle}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">F. SCHOOL INFRASTRUCTURE</h2>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>Total Area: 8326 sqm</li>
            <li>Classrooms: 47 (each 46 sqm)</li>
            <li>Labs: 6 (each 72 sqm)</li>
            <li>Internet Facility: Yes</li>
            <li>Girls Toilets: 12</li>
            <li>Boys Toilets: 12</li>
          </ul>
        </section>

        {/* Section G */}
        <section className={sectionStyle + " text-center"}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">G. INSPECTION VIDEO</h2>
          <a href="https://www.youtube.com/watch?v=i91PFqpKOUE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
            Watch on YouTube
          </a>
        </section>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;
