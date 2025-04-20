import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const registerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  };

  const bodyStyle = {
    height: '100vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5', // Agregamos el color de fondo aquí
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#343a40',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={bodyStyle}> {/* Aplicamos los estilos al div principal */}
      <div style={containerStyle}>
        <div style={registerStyle}>
          <h2 style={titleStyle}>Registro de Usuario</h2>
          <input type="text" placeholder="Nombre de usuario" style={inputStyle} />
          <input type="email" placeholder="Correo electrónico" style={inputStyle} />
          <input type="password" placeholder="Contraseña" style={inputStyle} />
          <input type="password" placeholder="Confirmar contraseña" style={inputStyle} />
          <button style={buttonStyle}>Registrarse</button>
          <p style={{ marginTop: '10px' }}>
            ¿Ya tienes cuenta? <Link to="/login" style={linkStyle}>Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;