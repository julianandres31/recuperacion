import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#f8f9fa', // Ejemplo de color de fondo
    borderBottom: '1px solid #dee2e6',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    marginRight: '15px',
  };

  const phoneStyle = {
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyle}>
      <div>
        {/* Aquí iría el logo si lo hubiera */}
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>COMPANY</span>
      </div>
      <div>
        <Link to="/" style={linkStyle}>COMPANY</Link>
        <Link to="/" style={linkStyle}>OUR CASES</Link>
        <Link to="/" style={linkStyle}>BLOG</Link>
        <Link to="/" style={linkStyle}>NEWS</Link>
        <Link to="/" style={linkStyle}>CONTACT</Link>
        <Link to="/login" style={linkStyle}>LOGIN</Link>
        <Link to="/register" style={linkStyle}>REGISTER</Link>
      </div>
      <div style={phoneStyle}>
        999-456-009
      </div>
    </nav>
  );
}

export default Navbar;