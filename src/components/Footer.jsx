import React from 'react';
import { Link } from 'react-router-dom';
import { studioContact } from '../data/studio';

const Footer = () => {
  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-grid-minimal">
          <div className="footer-brand">
            <h2 className="footer-logo-minimal">LUXX</h2>
            <p>High-Fidelity / Heart-Driven.</p>
          </div>
          <div className="footer-links-minimal">
            <div className="footer-col">
              <h6>Vision</h6>
              <Link to="/">The Studio</Link>
              <Link to="/collection">Collection</Link>
              <Link to="/inquiry">Inquiry</Link>
            </div>
            <div className="footer-col">
              <h6>Studio</h6>
              <Link to="/studio">The Studio</Link>
              <Link to="/collection">Collection</Link>
              <Link to="/studio#location">Indiranagar</Link>
            </div>
            <div className="footer-col">
              <h6>Contact</h6>
              <a href={`mailto:${studioContact.email}`}>{studioContact.email}</a>
              <a href={studioContact.phoneHref}>{studioContact.phone}</a>
              <a href={studioContact.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
              <a href={studioContact.facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <p>© 2026 Luxx Tattoo Studio. All rites reserved.</p>
          <p>Editorial / V1.1</p>
        </div>
      </div>
      <style>{`
        .footer-editorial {
          padding: 150px 0 60px;
          background: #000;
          color: #fff;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-grid-minimal {
          display: flex;
          justify-content: space-between;
          margin-bottom: 100px;
        }
        .footer-logo-minimal {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: 0.15em;
          margin-bottom: 20px;
          font-weight: 200;
          color: #fff;
        }
        .footer-brand p {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.7rem;
          opacity: 0.5;
        }
        .footer-links-minimal {
          display: flex;
          gap: 100px;
          flex-wrap: wrap;
        }
        .footer-col h6 {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.65rem;
          margin-bottom: 40px;
          opacity: 0.4;
          font-weight: 600;
        }
        .footer-col a {
          display: block;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          margin-bottom: 18px;
          opacity: 0.6;
          transition: var(--transition-smooth);
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.05em;
        }
        .footer-col a:hover {
          opacity: 1;
          color: #fff;
          transform: translateX(5px);
        }
        .footer-legal {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 40px;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.7rem;
          opacity: 0.3;
        }
        @media (max-width: 768px) {
          .footer-grid-minimal {
            flex-direction: column;
            gap: 60px;
          }
          .footer-links-minimal {
            gap: 40px;
            flex-wrap: wrap;
          }
          .footer-logo-minimal {
            font-size: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
