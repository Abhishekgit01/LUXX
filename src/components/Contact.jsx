import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [intention, setIntention] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tattoo Inquiry: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nVision:\n${intention}`);
    
    // This is the "Working" part: it opens their email app immediately
    window.location.href = `mailto:roshantattooartist@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 20000);
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
              <p>DM on Instagram</p>
            </div>
            <div className="info-block">
              <h6>Social</h6>
              <p>@luxx_tattoo_studio</p>
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
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a 
                  href={`mailto:roshantattooartist@gmail.com?subject=Tattoo Inquiry: ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AVision: ${intention}`}
                  className="editorial-submit"
                  style={{ background: '#000', color: '#fff', padding: '20px 40px', textDecoration: 'none', display: 'inline-block' }}
                >
                  Send Email Manually →
                </a>
                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', opacity: 0.5 }}
                >
                  ← Back
                </button>
              </div>
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
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="editorial-input-group">
                <label>Intention</label>
                <textarea 
                  name="intention"
                  placeholder="Describe your vision (size, placement, style)..." 
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
          background: #fff;
          color: #000;
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
        }
        .info-block h6 {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.8rem;
          margin-bottom: 20px;
          opacity: 0.4;
        }
        .info-block p {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 300;
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
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
          color: #000;
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
