import React from 'react';

const tattoos = [
  { id: 1, src: '/portfolio1.png', category: 'Fine-Line Divinity', title: 'The Silent Muse' },
  { id: 2, src: '/portfolio2.png', category: 'Greco-Roman Realism', title: 'Classical Drapery' },
  { id: 3, src: '/portfolio3.png', category: 'Renaissance Study', title: 'Classical Fragment' },
  { id: 4, src: '/portfolio4.png', category: 'Dark Surrealism', title: 'Fragmented Soul' },
  { id: 5, src: '/portfolio5.png', category: 'Ancient Blackwork', title: 'Anubis & The Pyramids' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header" data-reveal>
          <span className="editorial-label">Selected Works</span>
          <h2 className="gallery-title">The Collection</h2>
        </div>
        
        <div className="masonry-grid">
          {tattoos.map((item) => (
            <div key={item.id} className="masonry-item" data-reveal>
              <a href="https://www.instagram.com/luxx_tattoo_studio/" target="_blank" rel="noreferrer" className="work-card">
                <img src={item.src} alt={item.title} className="work-image" />
                <div className="work-overlay">
                  <div className="work-info">
                    <span className="work-category">{item.category}</span>
                    <h3 className="work-title">{item.title}</h3>
                    <span className="work-source">View on Instagram →</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-section {
          padding: 150px 0;
          background: #000;
          color: #fff;
        }
        .gallery-header {
          margin-bottom: 80px;
        }
        .editorial-label {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.9rem;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        .gallery-title {
          font-family: var(--font-heading);
          font-size: 4rem;
          font-weight: 300;
        }
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 40px;
        }
        .masonry-item:nth-child(even) {
          margin-top: 60px;
        }
        .work-card {
          position: relative;
          overflow: hidden;
          background: #111;
          aspect-ratio: 4/5;
          display: block;
          text-decoration: none;
          color: #fff;
        }
        .work-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .work-card:hover .work-image {
          transform: scale(1.05);
          filter: grayscale(0) contrast(1);
        }
        .work-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: flex-end;
          padding: 40px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .work-card:hover .work-overlay {
          opacity: 1;
        }
        .work-category {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          margin-bottom: 10px;
        }
        .work-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 300;
        }
        .work-source {
          display: block;
          margin-top: 12px;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.6rem;
          opacity: 0.5;
        }
        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
          }
          .masonry-item:nth-child(even) {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
