import React from 'react';

const reviews = [
  { text: "Had a wonderful experience with Roshan. His place had a great vibe, and the hospitality was truly welcoming. The artwork was absolutely incredible, creative, detailed, and exceeded my expectations.", author: "Arshitha M.V.", rating: 5 },
  { text: "It's a good place to get tattoo and the work done was literally awesome. I would recommend — Roshan is best person to get it done.", author: "Satya Brata", rating: 5 },
  { text: "High precision work. Best tattoo studio in Indiranagar. The attention to detail is unparalleled.", author: "Gnanadass", rating: 5 },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-editorial">
      <div className="container">
        <div className="reviews-header" data-reveal>
          <span className="editorial-label">Testimonials</span>
          <h2 className="editorial-heading-small">A Record of trust</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <a key={index} href="https://www.google.com/maps/place/Luxx+Tattoo+Studio/@12.9775819,77.638386,17z/data=!4m8!3m7!1s0x3bae17809a0fc025:0x3f2afc7dc4488374!8m2!3d12.9775819!4d77.638386!9m1!1b1!16s%2Fg%2F11z0_fqvg5" target="_blank" rel="noreferrer" className="review-card-editorial" data-reveal>
              <div className="stars">★★★★★</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">— {review.author}</div>
              <span className="review-source">View on Google Maps →</span>
            </a>
          ))}
        </div>
        <div className="google-rating" data-reveal>
          <span className="rating-num">5.0</span>
          <div className="rating-stars">★★★★★</div>
          <span className="rating-desc">Google Local Guide Favorite</span>
        </div>
      </div>
      <style>{`
        .reviews-editorial {
          padding: 150px 0;
          background: #000;
          color: #fff;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          margin-bottom: 100px;
        }
        .editorial-heading-small {
          font-family: var(--font-heading);
          font-size: 3rem;
          margin-bottom: 80px;
          font-weight: 300;
        }
        .review-card-editorial {
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none;
          color: #fff;
          display: block;
          transition: opacity 0.3s ease;
        }
        .review-card-editorial:hover {
          opacity: 0.7;
        }
        .review-source {
          display: block;
          margin-top: 15px;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.65rem;
          opacity: 0.3;
          transition: opacity 0.3s ease;
        }
        .review-card-editorial:hover .review-source {
          opacity: 0.8;
        }
        .stars {
          color: #fff;
          margin-bottom: 20px;
          letter-spacing: 5px;
        }
        .review-text {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 300;
          margin-bottom: 30px;
          font-style: italic;
        }
        .review-author {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .google-rating {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 60px;
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .rating-num {
          font-family: var(--font-heading);
          font-size: 4rem;
        }
        .rating-stars {
          font-size: 1.5rem;
          letter-spacing: 5px;
        }
        .rating-desc {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 5px;
          opacity: 0.4;
        }
        @media (max-width: 1024px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
