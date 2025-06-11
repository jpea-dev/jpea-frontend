import React from 'react';

interface DocumentLink {
  label: string;
  url: string;
}

const docLinks: DocumentLink[] = [
  {
    label: 'Affiliation/Upgradation Letter & Extension',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/UPGRADATION-LETTERCERTIFIED.pdf',
  },
  {
    label: 'Society/Trust Registration Certificate',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/RC-certified.pdf',
  },
  {
    label: 'No Objection Certificate (NOC) - State Govt.',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/NOCCERTIFIED.pdf',
  },
  {
    label: 'Recognition Certificate under RTE Act, 2009',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/RL-N-TO-8CERTIFIED.pdf',
  },
  {
    label: 'Building Safety Certificate',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/NBCCERTIFIED.pdf',
  },
  {
    label: 'Fire Safety Certificate',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/FIRE-NOC-INITIALCERTIFIEDN.pdf',
  },
  {
    label: 'DEO Certificate for Affiliation/Upgradation',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/DEO-CERTIFICATECERTIFIED.pdf',
  },
  {
    label: 'Water, Health & Sanitation Certificates',
    url: 'https://www.jpeducationacademy.com/wp-content/uploads/2021/06/HEALTH-AND-SANITATIONCERTIFIED.pdf',
  },
];

const academicsLinks: DocumentLink[] = [
  {
    label: 'Fee Structure',
    url: 'http://www.jpeducationacademy.com/wp-content/uploads/2023/04/fee-structure-2023-24.pdf',
  },
  {
    label: 'Annual Academic Calendar',
    url: 'http://www.jpeducationacademy.com/wp-content/uploads/2023/04/annual-academic-calender-2023-24.pdf',
  },
  {
    label: 'School Management Committee (SMC)',
    url: 'http://www.jpeducationacademy.com/wp-content/uploads/2021/06/SMCCERTIFIED.pdf',
  },
  {
    label: 'PTA Members List',
    url: 'http://www.jpeducationacademy.com/wp-content/uploads/2021/06/PTACERTIFIED.pdf',
  },
  {
    label: 'Last 3 Years Board Exam Results',
    url: 'http://www.jpeducationacademy.com/wp-content/uploads/2023/04/last-3-years-results-2023-24.pdf',
  },
];

const MandatoryDisclosure: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Mandatory Public Disclosure
        </h1>
        <p className="text-gray-700">
          (As per CBSE SARAS Portal Appendix-IX)
        </p>
      </div>

      {/* General Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">A. General Information</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="mb-2"><span className="font-medium">School Name:</span> J P EDUCATION ACADEMY GURSAHAIGANJ KANNAUJ UP</div>
              <div className="mb-2"><span className="font-medium">Affiliation No.:</span> 2132627</div>
              <div className="mb-2"><span className="font-medium">School Code:</span> 70724</div>
              <div className="mb-2"><span className="font-medium">Address:</span> J P EDUCATION ACADEMY, VILL UNCHA PARGANA TALGRAM TIRWA RD, NR POWER HOUSE GURSAHAIGANJ, KANNAUJ, - 209788</div>
            </div>
            <div>
              <div className="mb-2"><span className="font-medium">Principal Name:</span> Amarendra Singh</div>
              <div className="mb-2"><span className="font-medium">Principal Qualification:</span> M.A. B.ED.</div>
              <div className="mb-2"><span className="font-medium">School Email ID:</span> jpeducationacadmeyghj@gmail.com</div>
              <div className="mb-2"><span className="font-medium">Contact (Landline/Mobile):</span> 9838653719</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents and Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">B. Documents and Information</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <ul className="list-disc pl-5 space-y-2">
            {docLinks.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-600">
            Note: Uploads are self-attested by Chairman/Manager/Secretary and Principal. Non-genuine documents may attract action as per norms.
          </p>
        </div>
      </section>

      {/* Result and Academics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">C. Result and Academics</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <ul className="list-disc pl-5 space-y-2">
            {academicsLinks.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Staff (Teaching) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">D. Staff (Teaching)</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="mb-2"><span className="font-medium">Principal:</span> ONE</div>
              <div className="mb-2"><span className="font-medium">Total No. of Teachers:</span> 45</div>
              <div className="mb-2"><span className="font-medium">PGT:</span> 13</div>
              <div className="mb-2"><span className="font-medium">TGT:</span> 18</div>
              <div className="mb-2"><span className="font-medium">PRT:</span> 14</div>
              <div className="mb-2"><span className="font-medium">Teacher Section Ratio:</span> 1:5</div>
            </div>
            <div>
              <div className="mb-2"><span className="font-medium">Special Educator:</span> Mr. Arun Kumar (B.A. B.Ed. Special Education)</div>
              <div className="mb-2"><span className="font-medium">Counsellor & Wellness Teacher:</span> Ms. Sakshi (M.A. Psychology)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Exam Results */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">E. Board Exam Results</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <span className="font-semibold text-gray-800 block mb-2">Class X (2022):</span>
            <div className="text-gray-700">Registered: 159 | Passed: 157 | Pass %: 98.74%</div>
          </div>
          <div>
            <span className="font-semibold text-gray-800 block mb-2">Class XII (2022):</span>
            <div className="text-gray-700">Registered: 84 | Passed: 79 | Pass %: 94.04% <span className="text-xs text-gray-500">(1 Absent)</span></div>
          </div>
        </div>
      </section>

      {/* School Infrastructure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">F. School Infrastructure</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="mb-2"><span className="font-medium">Total Campus Area (sq. m):</span> 8326</div>
              <div className="mb-2"><span className="font-medium">No. & Size of Classrooms (sq. m):</span> 25 & 46</div>
              <div className="mb-2"><span className="font-medium">No. & Size of Labs (incl. Computer Labs) (sq. m):</span> 5 & 72</div>
              <div className="mb-2"><span className="font-medium">Internet Facility:</span> YES</div>
            </div>
            <div>
              <div className="mb-2"><span className="font-medium">No. of Girls Toilets:</span> 12</div>
              <div className="mb-2"><span className="font-medium">No. of Boys Toilets:</span> 12</div>
              <div className="mb-2">
                <span className="font-medium">YouTube Video (Inspection):</span>{' '}
                <a
                  href="https://www.youtube.com/watch?v=i91PFqpKOUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Watch Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
