import React from 'react';
import { studioContact } from '../data/studio';

const About = () => {
  return (
    <section id="about" className="about-editorial">
      <div className="container about-grid">
        <div className="about-image-col" data-reveal>
          <img src="/artist1.png" alt="Luxx" className="master-portrait" style={{ objectPosition: 'center 20%' }} />
          <div className="image-caption">LUXX — FOUNDER & MASTER ARTIST</div>
        </div>
        <div className="about-text-col" data-reveal>
          <span className="editorial-label">Client Stories</span>
          <h2 className="about-heading">The Record of <br/> <span>Excellence</span></h2>
          <div className="about-content">
            <div className="reviews-snippet">
              <div className="review-item">
                <p>"Had a wonderful experience with Roshan. The artwork was absolutely incredible, creative, detailed, and exceeded my expectations."</p>
                <span className="review-author">— Arshitha M.V.</span>
              </div>
              <div className="review-item">
                <p>"High precision work. Best tattoo studio in Indiranagar. The attention to detail is unparalleled."</p>
                <span className="review-author">— Gnanadass</span>
              </div>
            </div>
            <p>
              Operating from his private sanctuary in Indiranagar, Roshan treats every tattoo as a collaboration of souls. 
              Find his full portfolio on Instagram <a href={studioContact.instagramUrl} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{studioContact.instagramHandle}</a>.
            </p>
          </div>
          <div className="signature">LUXX_</div>
        </div>
      </div>
      <style>{`
        .about-editorial {
          min-height: 100vh;
          padding: 100px 0;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .master-portrait {
          width: 100%;
          height: 800px;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1);
        }
        .image-caption {
          margin-top: 20px;
          font-family: var(--font-body);
          letter-spacing: 5px;
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .editorial-label {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.9rem;
          margin-bottom: 30px;
          opacity: 0.5;
        }
        .about-heading {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 50px;
        }
        .about-heading span {
          font-style: italic;
        }
        .accent-p {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 300;
          font-style: italic;
          margin-bottom: 40px;
          border-left: 2px solid rgba(255, 255, 255, 0.7);
          padding-left: 30px;
        }
        .about-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 30px;
          max-width: 500px;
        }
        .reviews-snippet {
          margin-bottom: 40px;
          border-left: 2px solid rgba(255, 255, 255, 0.7);
          padding-left: 30px;
        }
        .review-item {
          margin-bottom: 25px;
        }
        .review-item p {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-style: italic;
          margin-bottom: 10px;
          color: #fff;
        }
        .review-author {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          opacity: 0.6;
        }
        .signature {
          font-family: var(--font-heading);
          font-size: 3rem;
          margin-top: 60px;
          letter-spacing: 10px;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-heading {
            font-size: 3.5rem;
          }
          .master-portrait {
            height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
