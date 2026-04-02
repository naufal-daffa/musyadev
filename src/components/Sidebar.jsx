const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">About:</div>
      <p className="sidebar-bio">
        A passionate software engineer with a strong background in Computer Science.
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