import React, { useState } from 'react';
import { studioContact } from '../data/studio';

const Contact = () => {
  const [name, setName] = useState('');
  const [intention, setIntention] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const createInquiryMailto = () => {
    const subject = encodeURIComponent(`Tattoo Inquiry: ${name || 'New Client'}`);
    const body = encodeURIComponent(`Name: ${name}\n\nVision:\n${intention}`);

    return `mailto:${studioContact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = createInquiryMailto();
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 15000);
  };

  return (
    <section id="contact" className="contact-editorial">
      <div className="container contact-editorial-grid">
        <div className="contact-editorial-left" data-reveal>
          <span className="editorial-label">Collaboration</span>
          <h2 className="editorial-heading">Let's Create Something <br/> <span>Infinite</span></h2>
          <div className="editorial-contact-info">
            <div className="info-block">
              <h6>Location</h6>
              <p>792, 9th A Main Rd <br/> Indiranagar, Bengaluru 560038</p>
            </div>
            <div className="info-block">
              <h6>Email</h6>
              <a href={`mailto:${studioContact.email}`}>{studioContact.email}</a>
            </div>
            <div className="info-block">
              <h6>Phone</h6>
              <a href={studioContact.phoneHref}>{studioContact.phone}</a>
            </div>
            <div className="info-block">
              <h6>Social</h6>
              <a href={studioContact.instagramUrl} target="_blank" rel="noreferrer">
                {studioContact.instagramHandle}
              </a>
              <a href={studioContact.facebookUrl} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="contact-editorial-right" data-reveal>
          {submitted ? (
            <div className="success-message-container" style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '20px' }}>Inquiry Started</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', marginBottom: '40px', opacity: 0.8 }}>
                Your email client should have opened. <br/> 
                If not, click the button below to send your vision directly to Roshan.
              </p>
              <a 
                href={createInquiryMailto()}
                className="editorial-submit"
                style={{ border: '1px solid rgba(255,255,255,0.7)', color: '#fff', padding: '20px 40px', textDecoration: 'none', display: 'inline-block' }}
              >
                Send Email Manually →
              </a>
              <button 
                onClick={() => setSubmitted(false)}
                style={{ display: 'block', marginTop: '30px', background: 'none', border: 'none', color: '#fff', textDecoration: 'underline', cursor: 'pointer', opacity: 0.5 }}
              >
                ← Back to form
              </button>
            </div>
          ) : (
            <form className="editorial-form" onSubmit={handleSubmit} data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="editorial-input-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="editorial-input-group">
                <label>Intention</label>
                <textarea 
                  name="intention"
                  placeholder="Describe your vision..." 
                  rows="4" 
                  required
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="editorial-submit">Submit Inquiry —</button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        .contact-editorial {
          padding: 200px 0;
          background: #000;
          color: #fff;
        }
        .contact-editorial-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
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
        .editorial-heading {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 80px;
        }
        .editorial-heading span {
          font-style: italic;
          font-weight: 300;
        }
        .editorial-contact-info {
          display: flex;
          gap: 80px;
          row-gap: 40px;
          flex-wrap: wrap;
        }
        .info-block h6 {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.8rem;
          margin-bottom: 20px;
          opacity: 0.4;
        }
        .info-block p,
        .info-block a {
          display: block;
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 1.4vw, 1.5rem);
          font-weight: 300;
          line-height: 1.4;
          overflow-wrap: anywhere;
          text-decoration: none;
        }
        .info-block a + a {
          margin-top: 8px;
        }
        .editorial-form {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }
        .editorial-input-group {
          display: flex;
          flex-direction: column;
          gap: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          padding-bottom: 20px;
        }
        .editorial-input-group label {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.7rem;
          opacity: 0.5;
        }
        .editorial-input-group input, 
        .editorial-input-group textarea {
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 300;
          color: #fff;
        }
        .editorial-input-group input::placeholder,
        .editorial-input-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .editorial-submit {
          align-self: flex-start;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 1rem;
          padding: 20px 0;
          transition: var(--transition-smooth);
        }
        .editorial-submit:hover {
          transform: translateX(15px);
          color: #888;
        }
        @media (max-width: 1024px) {
          .contact-editorial-grid {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .editorial-heading {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
