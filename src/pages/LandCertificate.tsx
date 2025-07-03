import React from 'react';

const LandCertificate: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold text-blue-700 mb-6">Land Certificate</h1>
    <iframe
      src="/land_certificate_renewal.pdf"
      title="Land Certificate"
      className="w-full h-[80vh] border rounded"
    />
    <a
      href="/land_certificate_renewal.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-blue-600 underline"
    >
      Download Land Certificate PDF
    </a>
  </div>
);

export default LandCertificate;