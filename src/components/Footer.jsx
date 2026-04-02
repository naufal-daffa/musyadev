const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <i className="fas fa-code" style={{ fontSize: '10px', color: '#888' }}></i>
          </div>
          MUSYADEV
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/naufal-daffa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/naufal-daffa-musyava-b4ba81323/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/paall.2hiigh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <div className="footer-copyright">
          © {currentYear} Naufal Daffa Musyava. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;