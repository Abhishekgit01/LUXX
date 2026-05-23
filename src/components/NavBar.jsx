import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          LUXX
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
        <button className="nav-cta">Inquiry</button>
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
          font-family: var(--font-heading);
          font-size: 1.8rem;
          letter-spacing: 5px;
          font-weight: 400;
          color: #fff;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 50px;
          list-style: none;
        }
        .nav-links :global(a) {
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          transition: var(--transition-smooth);
          opacity: 0.5;
          color: #fff;
          text-decoration: none;
        }
        .nav-links :global(a):hover, .nav-links :global(a).active {
          opacity: 1;
        }
        .nav-cta {
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 12px 30px;
          background: white;
          color: black;
          border: none;
          font-weight: 600;
          transition: var(--transition-smooth);
          cursor: pointer;
        }
        .nav-cta:hover {
          background: #ddd;
          transform: translateY(-2px);
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
