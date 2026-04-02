import Image from "../assets/avatar.jpeg"

const Hero = () => {
  return (
    <header className="hero">
      <div className="avatar-placeholder">
        <img className="avatar-placeholder" src={Image} alt="Naufal Daffa Musyava" />
      </div>
      <div className="hero-info">
        <h1 className="hero-name">Naufal Daffa Musyava</h1>
        <p className="hero-role">FullStack Developer</p>
        <p className="hero-bio">
          
        </p>
        <div className="hero-contacts">
          <a href="mailto:naufaldaffamusyava@gmail.com" className="contact-badge">
            <i className="fas fa-envelope"></i> naufaldaffamusyava@gmail.com
          </a>
          <a href="tel:+6285719699395" className="contact-badge">
            <i className="fas fa-phone"></i> +6285719699395
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;