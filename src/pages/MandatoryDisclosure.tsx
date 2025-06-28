import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Mandatory Public Disclosure</h1>

      {/* A: General Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">A. General Information</h2>
        <table className="table-auto w-full border">
          <tbody>
            <tr><td className="border p-2">1. Name of the School</td><td className="border p-2">J P Education Academy</td></tr>
            <tr><td className="border p-2">2. Affiliation No.</td><td className="border p-2">2132627</td></tr>
            <tr><td className="border p-2">3. School Code</td><td className="border p-2">70724</td></tr>
            <tr><td className="border p-2">4. Address</td><td className="border p-2">VILL UNCHA PARGANA, TALGRAM TIRWA RD, NR POWER HOUSE, GURSAHAIGANJ, KANNAUJ, 209722</td></tr>
            <tr><td className="border p-2">5. Principal Name</td><td className="border p-2">Amarendra Singh</td></tr>
            <tr><td className="border p-2">6. Principal Qualification</td><td className="border p-2">M.A., B.Ed., M.B.A.</td></tr>
            <tr><td className="border p-2">7. Email ID</td><td className="border p-2">jpeducationacadmeyghj@gmail.com</td></tr>
            <tr><td className="border p-2">8. Contact</td><td className="border p-2">9838653719</td></tr>
          </tbody>
        </table>
      </section>

      {/* B: Documents and Information */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">B. Documents and Information</h2>
        {[
          ["Affiliation Letter", "https://ik.imagekit.io/jpeaghj/docs/extension_upgradation.pdf"],
          ["Society Registration Certificate", "https://ik.imagekit.io/jpeaghj/docs/society_certificate.pdf"],
          ["No Objection Certificate", "https://ik.imagekit.io/jpeaghj/docs/noc_certificate.pdf"],
          ["Recognition Certificate", "https://ik.imagekit.io/jpeaghj/docs/recognition_and_renewal.pdf"],
          ["Building Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/nbc.pdf"],
          ["Fire Safety Certificate", "https://ik.imagekit.io/jpeaghj/docs/fire_safety.pdf"],
          ["Self Certification", "https://ik.imagekit.io/jpeaghj/docs/deo_certificate.pdf"],
          ["Water, Health & Sanitation Certificate", "https://ik.imagekit.io/jpeaghj/docs/safe_drinking_water_sanitation.pdf"],
        ].map(([name, link], i) => (
          <div key={i} className="flex items-center justify-between border p-3 rounded mb-2">
            <span>{i + 1}. {name}</span>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
              View <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </section>

      {/* C. Result & Academics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">C. Result and Academics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://ik.imagekit.io/jpeaghj/docs/fee_structure.pdf" className="text-blue-600 hover:underline">Fee Structure</a></li>
          <li><a href="https://ik.imagekit.io/jpeaghj/docs/annual_ac_calendar.pdf" className="text-blue-600 hover:underline">Annual Academic Calendar</a></li>
          <li><a href="https://ik.imagekit.io/jpeaghj/docs/smc.pdf" className="text-blue-600 hover:underline">SMC List</a></li>
          <li><a href="https://ik.imagekit.io/jpeaghj/docs/pta.pdf" className="text-blue-600 hover:underline">PTA Members List</a></li>
          <li><a href="https://ik.imagekit.io/jpeaghj/docs/result_3yrs.pdf" className="text-blue-600 hover:underline">Board Results (Last 3 Years)</a></li>
        </ul>
      </section>

      {/* D: Staff (Teaching) */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">D. Staff (Teaching)</h2>
        <p><strong>Principal:</strong> One</p>
        <p><strong>Total Teachers:</strong> 56 (PGT: 16, TGT: 20, PRT: 8)</p>
        <p><strong>Teacher-Section Ratio:</strong> 1:5</p>
        <p><strong>Special Educator:</strong> Mr. Rahul Kumar – M.A. B.Ed. (Special Ed.)</p>
        <p><strong>Counsellor & Wellness Teacher:</strong> Ms. Archana Chaturvedi – M.A. Psychology</p>
      </section>

      {/* E: Exam Results */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">E. Exam Results</h2>
        <table className="table-auto w-full border mb-6">
          <caption className="text-left font-semibold mb-2">Class X</caption>
          <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
          <tbody><tr><td className="border p-2">2025</td><td className="border p-2">143</td><td className="border p-2">135</td><td className="border p-2">94.40%</td></tr></tbody>
        </table>

        <table className="table-auto w-full border">
          <caption className="text-left font-semibold mb-2">Class XII</caption>
          <thead><tr><th className="border p-2">Year</th><th className="border p-2">Registered</th><th className="border p-2">Passed</th><th className="border p-2">Percentage</th></tr></thead>
          <tbody><tr><td className="border p-2">2025</td><td className="border p-2">128</td><td className="border p-2">84</td><td className="border p-2">65.62%</td></tr></tbody>
        </table>
      </section>

      {/* F. Infrastructure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">F. School Infrastructure</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Total Area: 8326 sqm</li>
          <li>Classrooms: 47 (each 46 sqm)</li>
          <li>Labs: 6 (each 72 sqm)</li>
          <li>Internet Facility: Yes</li>
          <li>Girls Toilets: 12</li>
          <li>Boys Toilets: 12</li>
        </ul>
      </section>

      {/* G. Inspection Video */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">G. Inspection Video</h2>
        <a
          href="https://www.youtube.com/watch?v=i91PFqpKOUE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Watch on YouTube
        </a>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
