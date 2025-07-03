import React from 'react';

const SelfAffidavit: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold text-blue-700 mb-6">Self Affidavit</h1>
    <iframe
      src="/self_affidavit.pdf"
      title="Self Affidavit"
      className="w-full h-[80vh] border rounded"
    />
    <a
      href="/self_affidavit.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-blue-600 underline"
    >
      Download Self Affidavit PDF
    </a>
  </div>
);

export default SelfAffidavit;