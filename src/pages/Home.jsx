import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const featuredWorks = [
  { src: '/mountain.png', title: 'The Mountain Wanderer', desc: 'Fine-line detailed landscape band' },
  { src: '/greco.png', title: 'Divine Realism', desc: 'Greco-Roman inspired sleeve fragment' },
  { id: 3, src: '/anubis.png', title: 'Ancient Echoes', desc: 'Blackwork mythology study' },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev === featuredWorks.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? featuredWorks.length - 1 : prev - 1));

  return (
    <div className="page-home">
      <Hero />

      {/* Featured Slider */}
      <section className="home-featured-slider">
        <div className="container">
          <div className="slider-header">
            <span className="label">Featured Works</span>
            <h2 className="section-title">Selected Portfolio</h2>
          </div>
          
          <div className="slider-container">
            <div className="slider-content">
              <div className="slider-image-wrapper">
                <img 
                  src={featuredWorks[activeSlide].src} 
                  alt={featuredWorks[activeSlide].title} 
                  className="active-image"
                />
                <div className="slider-nav">
                  <button onClick={prevSlide} className="nav-btn prev">←</button>
                  <button onClick={nextSlide} className="nav-btn next">→</button>
                </div>
              </div>
              <div className="slider-info">
                <span className="slide-number">0{activeSlide + 1} / 0{featuredWorks.length}</span>
                <h3 className="slide-title">{featuredWorks[activeSlide].title}</h3>
                <p className="slide-desc">{featuredWorks[activeSlide].desc}</p>
                <Link to="/collection" className="view-link">View Collection —</Link>
              </div>
            </div>
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
        .home-featured-slider {
          padding: 150px 0;
          background: #000;
          color: #fff;
          overflow: hidden;
        }
        .slider-header {
          margin-bottom: 80px;
        }
        .slider-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
          align-items: center;
        }
        .slider-image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          background: #111;
        }
        .active-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1);
        }
        .slider-nav {
          position: absolute;
          bottom: 0;
          right: 0;
          display: flex;
          background: #000;
        }
        .nav-btn {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: #000;
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background: #fff;
          color: #000;
        }
        .slider-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .slide-number {
          font-family: var(--font-body);
          font-size: 0.9rem;
          opacity: 0.4;
          letter-spacing: 5px;
        }
        .slide-title {
          font-size: 4rem;
          line-height: 1;
        }
        .slide-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.7;
          max-width: 400px;
        }
        .view-link {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          width: fit-content;
          padding-bottom: 10px;
          transition: all 0.3s ease;
        }
        .view-link:hover {
          border-color: #fff;
          letter-spacing: 6px;
        }

        /* Google Reviews */
        .home-reviews {
          padding: 120px 0;
          background: #fff;
          color: #000;
        }
        .home-reviews .section-title {
          color: #000;
          font-size: 2.5rem;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .review-card {
          border-left: 2px solid #000;
          padding-left: 30px;
          text-decoration: none;
          color: #000;
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
