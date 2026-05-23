import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/studio">Inquiry</Link>
            </div>
            <div className="footer-col">
              <h6>Studio</h6>
              <Link to="/studio">The Studio</Link>
              <Link to="/collection">Collection</Link>
              <Link to="/studio#location">Indiranagar</Link>
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
          font-size: 3rem;
          letter-spacing: 10px;
          margin-bottom: 20px;
        }
        .footer-brand p {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.8rem;
          opacity: 0.4;
        }
        .footer-links-minimal {
          display: flex;
          gap: 100px;
        }
        .footer-col h6 {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          margin-bottom: 30px;
          opacity: 0.3;
        }
        .footer-col :global(a) {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 300;
          margin-bottom: 15px;
          opacity: 0.6;
          transition: var(--transition-smooth);
          color: #fff;
          text-decoration: none;
        }
        .footer-col :global(a):hover {
          opacity: 1;
          transform: translateX(10px);
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
