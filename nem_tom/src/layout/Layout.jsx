import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>Products</NavLink>
        </div>
      </nav>

      <main className="content">
        <Outlet /> {/* Itt jelennek meg az aloldalak */}
      </main>

      <footer className="footer">
        <p>&copy; 2024 React Gyakorló Projekt</p>
      </footer>
    </div>
  );
};

export default Layout;