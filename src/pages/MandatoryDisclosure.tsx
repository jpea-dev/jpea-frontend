import React from 'react';

const MandatoryDisclosure: React.FC = () => (
  <div style={{ height: '100vh' }}>
    <embed
      src="/mandatory-disclosure.pdf" // path to your PDF in the public folder
      type="application/pdf"
      width="100%"
      height="100%"
    />
  </div>
);

export default MandatoryDisclosure;
