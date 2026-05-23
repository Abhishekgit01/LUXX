import React from 'react';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Studio = () => {
  return (
    <div className="page-studio" style={{ paddingTop: '80px' }}>
      <About />
      <div style={{ height: '2px', background: '#000', width: '100%' }}></div>
      <div className="studio-location-info container">
        <div className="location-card">
          <h3>The Sanctuary</h3>
          <p>792, 9th A Main Rd, Stage 1 <br/> Indiranagar, Bengaluru 560038</p>
          <div className="hours">
            <span>Open Daily</span>
            <span>10:30 AM – 9:00 PM</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/Luxx+Tattoo+Studio/@12.9775819,77.638386,17z/data=!4m8!3m7!1s0x3bae17809a0fc025:0x3f2afc7dc4488374!8m2!3d12.9775819!4d77.638386!9m1!1b1!16s%2Fg%2F11z0_fqvg5" 
            target="_blank" 
            rel="noreferrer"
            className="directions-link"
          >
            Get Directions
          </a>
        </div>
      </div>
      <Reviews />
      <Contact />
      <style>{`
        .studio-location-info {
          padding: 100px 0;
          background: #fff;
          color: #000;
        }
        .location-card {
          border-left: 1px solid #000;
          padding-left: 40px;
          max-width: 600px;
        }
        .location-card h3 {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-transform: lowercase;
        }
        .location-card p {
          font-family: var(--font-body);
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.8;
        }
        .hours {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 40px;
        }
        .directions-link {
          display: inline-block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.8rem;
          border-bottom: 1px solid #000;
          padding-bottom: 5px;
          transition: opacity 0.3s ease;
        }
        .directions-link:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default Studio;
