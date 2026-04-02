const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        MUSYADEV
      </div>
      <div className="nav-right">
        <button onClick={toggleTheme} title="Toggle theme">
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;