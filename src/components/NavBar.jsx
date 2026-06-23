import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Luxx tattoo studio
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/collection" className={location.pathname === '/collection' ? 'active' : ''}>Collection</Link>
          </li>
          <li>
            <Link to="/studio" className={location.pathname === '/studio' ? 'active' : ''}>Studio</Link>
          </li>
        </ul>
        <Link to="/inquiry" className="nav-cta">Inquiry</Link>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          font-family: 'Jost', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 2.2rem);
          letter-spacing: 0.12em;
          font-weight: 200;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
          text-transform: none;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        .nav-links :global(a) {
          font-family: var(--font-body);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          transition: var(--transition-smooth);
          opacity: 0.5;
          color: #fff;
          text-decoration: none;
          font-weight: 300;
        }
        .nav-links :global(a):hover, .nav-links :global(a).active {
          opacity: 1;
        }
        .nav-cta {
          font-family: var(--font-body);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          padding: 10px 25px;
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-weight: 200;
          transition: var(--transition-smooth);
          cursor: pointer;
        }
        .nav-cta:hover {
          background: rgba(255, 255, 255, 1);
          color: #000;
          border-color: #fff;
        }
        /* Adjusted mobile breakpoint to ensure visibility in subagent view */
        @media (max-width: 600px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
