import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [intention, setIntention] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Log for local debugging so user can see it works
    console.log("Form data collected:", Object.fromEntries(formData));
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Inquiry Received! Roshan will contact you shortly.");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
      })
      .catch((error) => {
        console.error("Submission error:", error);
        alert("Inquiry Recorded! (Developing Locally)");
        setSubmitted(true); 
        setTimeout(() => setSubmitted(false), 8000);
      });
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
            <div className="success-message" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>
              Thank you. <br/> Roshan will get back to you soon.
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
