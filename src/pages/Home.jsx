import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { galleryWorks } from '../data/studio';

const featuredWorks = galleryWorks.slice(0, 3);

const Home = () => {
  return (
    <div className="page-home">
      <Hero />

      {/* Featured Works Preview */}
      <section className="home-featured">
        <div className="container">
          <div className="section-header">
            <span className="label">Featured</span>
            <h2 className="section-title">Selected Works</h2>
          </div>
          <div className="featured-grid">
            {featuredWorks.map((work, i) => (
              <div key={i} className="featured-card">
                <img src={work.src} alt={work.title} />
                <p className="featured-label">{work.title}</p>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <Link to="/collection" className="view-all-link">View Full Collection →</Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="home-reviews">
        <div className="container">
          <div className="section-header">
            <span className="label">Google Reviews</span>
            <h2 className="section-title">★★★★★ 5.0</h2>
          </div>
          <div className="reviews-grid">
            <a href="https://www.google.com/maps/place/Luxx+Tattoo+Studio/@12.9775819,77.638386,17z/data=!4m8!3m7!1s0x3bae17809a0fc025:0x3f2afc7dc4488374!8m2!3d12.9775819!4d77.638386!9m1!1b1!16s%2Fg%2F11z0_fqvg5" target="_blank" rel="noreferrer" className="review-card">
              <p>"Had a wonderful experience with Roshan. His place had a great vibe, and the hospitality was truly welcoming. The artwork was absolutely incredible, creative, detailed, and exceeded my expectations."</p>
              <span className="reviewer">— Arshitha M.V.</span>
            </a>
            <a href="https://www.google.com/maps/place/Luxx+Tattoo+Studio/@12.9775819,77.638386,17z/data=!4m8!3m7!1s0x3bae17809a0fc025:0x3f2afc7dc4488374!8m2!3d12.9775819!4d77.638386!9m1!1b1!16s%2Fg%2F11z0_fqvg5" target="_blank" rel="noreferrer" className="review-card">
              <p>"It's a good place to get tattoo and the work done was literally awesome. I would recommend — Roshan is best person to get it done."</p>
              <span className="reviewer">— Satya Brata</span>
            </a>
            <a href="https://www.google.com/maps/place/Luxx+Tattoo+Studio/@12.9775819,77.638386,17z/data=!4m8!3m7!1s0x3bae17809a0fc025:0x3f2afc7dc4488374!8m2!3d12.9775819!4d77.638386!9m1!1b1!16s%2Fg%2F11z0_fqvg5" target="_blank" rel="noreferrer" className="review-card">
              <p>"High precision work. Best tattoo studio in Indiranagar. The attention to detail is unparalleled."</p>
              <span className="reviewer">— Gnanadass</span>
            </a>
          </div>
        </div>
      </section>

      {/* Studio Info Preview */}
      <section className="home-studio-preview">
        <div className="container studio-preview-grid">
          <div className="studio-text">
            <span className="label">The Sanctuary</span>
            <h2 className="section-title">Indiranagar, Bengaluru</h2>
            <p className="studio-desc">
              A private studio where precision meets passion. Every session is a personal collaboration between artist and canvas.
            </p>
            <div className="studio-meta">
              <div>
                <strong>Hours</strong>
                <span>10:30 AM – 9:00 PM, Daily</span>
              </div>
              <div>
                <strong>Rating</strong>
                <span>★★★★★ 5.0 on Google</span>
              </div>
            </div>
            <Link to="/studio" className="view-all-link">Explore Studio →</Link>
          </div>
          <div className="studio-image-col">
            <img src="/artist1.png" alt="Luxx Studio" className="studio-preview-img" />
          </div>
        </div>
      </section>

      <style>{`
        .home-featured {
          padding: 120px 0;
          background: #000;
          color: #fff;
        }
        .section-header {
          margin-bottom: 60px;
        }
        .label {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.7rem;
          margin-bottom: 15px;
          opacity: 0.5;
          font-weight: 600;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 200;
          letter-spacing: 0.05em;
        }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        .featured-card {
          overflow: hidden;
        }
        .featured-card img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1);
          transition: transform 0.6s ease;
        }
        .featured-card:hover img {
          transform: scale(1.05);
        }
        .featured-label {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          margin-top: 15px;
          opacity: 0.5;
        }
        .cta-row {
          text-align: center;
        }
        .view-all-link {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.85rem;
          color: #fff;
          text-decoration: none;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        .view-all-link:hover {
          border-color: #fff;
          letter-spacing: 6px;
        }

        /* Google Reviews */
        .home-reviews {
          padding: 120px 0;
          background: #000;
          color: #fff;
        }
        .home-reviews .section-title {
          color: #fff;
          font-size: 2.5rem;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .review-card {
          border-left: 2px solid rgba(255,255,255,0.7);
          padding-left: 30px;
          text-decoration: none;
          color: #fff;
          display: block;
          transition: opacity 0.3s ease;
        }
        .review-card:hover {
          opacity: 0.6;
        }
        .review-card p {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .reviewer {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          opacity: 0.5;
        }

        /* Studio Preview */
        .home-studio-preview {
          padding: 120px 0;
          background: #000;
          color: #fff;
        }
        .studio-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .studio-text .section-title {
          font-size: 3rem;
        }
        .studio-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.7;
          margin: 30px 0 40px;
          max-width: 450px;
        }
        .studio-meta {
          display: flex;
          gap: 60px;
          margin-bottom: 40px;
        }
        .studio-meta div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .studio-meta strong {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          opacity: 0.4;
        }
        .studio-meta span {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 300;
        }
        .studio-preview-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1);
        }
        .home-studio-preview .view-all-link {
          color: #fff;
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: 1fr 1fr;
          }
          .studio-preview-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .studio-preview-img {
            height: 400px;
          }
        }
        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
