import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => (
    <div className="hero-inner">
      <div className="hero-philosophy">
        <h1 className="philosophy-title">
          everything that <br/>
          <span>comes from the</span> <br/>
          <span className="italic-word">heart</span> is <span className="italic-word">art</span>
        </h1>
      </div>

      <div className="hero-logo-large">
         <span className={isLoaded ? 'animate-luxx' : ''}>LUXX</span>
      </div>
      
      <div className="hero-subtext">
        <p className="master-artist">Luxx — Master Calligrapher & Ink Artist</p>
        <div className="hero-cta-group">
          <button className="btn-main">View Portfolio</button>
          <button className="btn-outline">Book Session</button>
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
          background: #ffffff;
          color: #000000;
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
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 6vw, 3.2rem);
          line-height: 1.1;
          font-weight: 400;
          text-transform: lowercase;
          margin: 0;
          max-width: 90vw;
        }
        .italic-word {
          font-style: italic;
          font-weight: 300;
        }
        .hero-logo-large {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 18vw, 16rem);
          line-height: 1;
          pointer-events: none;
          letter-spacing: 0.3em;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 5vh 0 2vh;
          padding: 10px 0;
          text-indent: 0.3em; /* Use text-indent for centering letter-spacing */
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
          letter-spacing: 12px;
          font-size: 0.7rem;
          opacity: 0.6;
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
        .layer-light .btn-main { background: #000; color: #fff; }
        .layer-dark .btn-main { background: #fff; color: #000; }
        .layer-light .btn-outline { border: 1px solid #000; color: #000; background: transparent; }
        .layer-dark .btn-outline { border: 1px solid #fff; color: #fff; background: transparent; }
        
        .btn-main:hover { transform: translateY(-3px); }
        .btn-outline:hover { background: rgba(0,0,0,0.05); }
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
