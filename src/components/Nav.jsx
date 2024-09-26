import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/nav.css';
import '../style/global.css'


const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>E-Bikes Store</h2>
      </div>

      <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <i className="fas fa-times"></i> // Ícone de "fechar"
        ) : (
          <i className="fas fa-bars"></i> // Ícone de "menu hambúrguer"
        )}
      </button>
    </nav>
  );
};

export default Nav;

