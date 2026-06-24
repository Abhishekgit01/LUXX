import React from 'react';
import Contact from '../components/Contact';

const Inquiry = () => {
  return (
    <div className="page-inquiry" style={{ paddingTop: '80px', minHeight: '100vh', background: '#000' }}>
      <Contact />
      <style>{`
        .page-inquiry .contact-editorial {
          padding: 100px 0;
        }
      `}</style>
    </div>
  );
};

export default Inquiry;
