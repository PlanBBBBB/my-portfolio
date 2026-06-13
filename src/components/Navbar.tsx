import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo navbar-logo-link">
        <span className="navbar-logo-emoji">👨🏻‍💻</span>
      </Link>
      <div className="navbar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          关于我
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          教育背景
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          工作经历
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          专业技能
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          学习与探索
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
