import React from 'react';

const TCSample: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold text-blue-700 mb-6">TC Sample</h1>
    <iframe
      src="/transfer_certificate.pdf"
      title="TC Sample"
      className="w-full h-[80vh] border rounded"
    />
    <a
      href="/transfer_certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-blue-600 underline"
    >
      Download TC Sample PDF
    </a>
  </div>
);

export default TCSample;