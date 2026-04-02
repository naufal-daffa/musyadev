const Contact = () => {
  return (
    <form action="https://formspree.io/f/mrbbbpqd" data-form method="post">
      <section className="contact-section">
        <div className="section-title">Get in Touch</div>
        <div className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="nama" data-form-input placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" data-form-input placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" data-form-input placeholder="Hello, I'd like to talk about..."></textarea>
          </div>
          <button className="btn-submit" type='submit'>Send Message</button>
        </div>
      </section>
    </form>
  );
};

export default Contact;