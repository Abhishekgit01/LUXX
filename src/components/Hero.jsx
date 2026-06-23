import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => (
    <div className="hero-inner">
      <div className="hero-philosophy">
        <h1 className="philosophy-title">Luxx tattoo studio</h1>
      </div>

      <div className="hero-logo-large">
         <span className={isLoaded ? 'animate-luxx' : ''}>LUXX</span>
      </div>
      
      <div className="hero-subtext">
        <p className="master-artist">Luxx — Master Calligrapher & Ink Artist</p>
        <div className="hero-cta-group">
          <button className="btn-main">View Portfolio</button>
          <Link to="/inquiry" className="btn-outline">Book Session</Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero-split-fullscreen">
      {/* Light Layer (Background) */}
      <div className="hero-layer layer-light">
        {renderContent()}
      </div>
      
      {/* Dark Layer (Clipped Foreground) */}
      <div className="hero-layer layer-dark">
        {renderContent()}
      </div>

      <style>{`
        .hero-split-fullscreen {
          height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
          background: #000;
        }
        .hero-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-font-smoothing: antialiased;
        }
        .layer-light {
          background: #000000;
          color: #ffffff;
          z-index: 1;
        }
        .layer-dark {
          background: #000000;
          color: #ffffff;
          z-index: 2;
          clip-path: inset(0 0 0 50%);
        }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0;
          text-align: center;
          position: relative;
        }
        .philosophy-title {
          font-family: 'Jost', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 5.5rem);
          line-height: 1.1;
          font-weight: 200;
          letter-spacing: 0.12em;
          text-transform: none;
          margin: 0;
          max-width: calc(100vw - 40px);
          white-space: nowrap;
          color: #fff;
          opacity: 0.95;
          text-rendering: optimizeLegibility;
        }
        .hero-logo-large {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 18vw, 16rem);
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.4em;
          font-weight: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 4vh 0 1vh;
          padding: 10px 0;
          text-indent: 0.4em;
          color: #fff;
          text-shadow: 
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 40px rgba(255, 255, 255, 0.9),
            0 0 80px rgba(255, 255, 255, 0.6);
        }
        .hero-subtext {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3vh;
        }
        .master-artist {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 0.8em;
          font-size: 0.7rem;
          font-weight: 600;
          opacity: 0.5;
        }
        .hero-cta-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          width: 100%;
        }
        .btn-main, .btn-outline {
          width: 220px; /* Force consistent width for symmetry */
          padding: 18px 0;
          text-align: center;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.75rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .layer-light .btn-main,
        .layer-dark .btn-main {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
        }
        .layer-light .btn-outline { border: 1px solid #fff; color: #fff; background: transparent; }
        .layer-dark .btn-outline { border: 1px solid #fff; color: #fff; background: transparent; }
        
        .btn-main:hover { transform: translateY(-3px); }
        .btn-outline:hover,
        .btn-main:hover {
          background: rgba(255,255,255,0.08);
        }
        .layer-dark .btn-outline:hover { background: rgba(255,255,255,0.05); }

        @keyframes flyInLogo {
          0% { transform: scale(1.05); opacity: 0; letter-spacing: 0.5em; }
          100% { transform: scale(1); opacity: 1; letter-spacing: 0.3em; }
        }
        .animate-luxx {
          animation: flyInLogo 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
