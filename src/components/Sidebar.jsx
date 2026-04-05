const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">About Me:</div>
      <p className="sidebar-bio">
        I am a web developer with over a year of experience, primarily focused on front-end development. I am passionate about creating clean, responsive, and user-friendly interfaces that deliver meaningful user experiences.
        Over time, I have expanded my expertise beyond the front end, exploring back-end development and data science to build more complete and scalable solutions.
        I have hands-on experience developing user interfaces using React and Laravel, and I am currently building integrated systems on the back end using Node.js, Express, and Laravel.
      </p>
      <div className="sidebar-meta">
        <div className="meta-item">
          <i className="fas fa-location-dot"></i> Indonesia
        </div>
        <div className="meta-item">
          <i className="fas fa-building"></i> Bogor City
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;