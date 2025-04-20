import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Estilo para el contenedor principal que centrará el formulario
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',    // Centra verticalmente
    height: '100vh',         // Asegura que el contenedor ocupe el 100% del alto de la pantalla
    width: '100vw',          // Asegura que el contenedor ocupe el 100% del ancho de la pantalla
    backgroundColor: '#f0f2f5', // Un fondo suave para la página
    margin: 0,               // Elimina cualquier margen predeterminado del body
  };

  const loginStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    width: '300px', // Mantenemos un ancho fijo para el formulario
    maxWidth: '90%', // Aseguramos que no se extienda demasiado en pantallas pequeñas
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
    backgroundColor: '#007bff',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Intentando iniciar sesión con:', username, password);
    // Aquí iría tu lógica de autenticación
  };

  return (
    <div style={containerStyle}> {/* Contenedor principal */}
      <div style={loginStyle}>
        <h2 style={titleStyle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
        </form>
        <p style={{ marginTop: '10px' }}>
          ¿No tienes cuenta? <Link to="/register" style={linkStyle}>Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;