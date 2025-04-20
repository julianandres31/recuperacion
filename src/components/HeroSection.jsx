import React from 'react';

function HeroSection() {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#e9ecef', // Ejemplo de color de fondo
  };

  const textContainerStyle = {
    flex: 1,
    paddingRight: '20px',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '10px',
    color: '#343a40',
  };

  const subtitleStyle = {
    fontSize: '1.8em',
    color: '#6c757d',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#495057',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  };

  const videoPlaceholderStyle = {
    flex: 1,
    backgroundColor: '#adb5bd',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const playIconStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    // Aquí podrías añadir estilos para un icono de play
  };

  return (
    <section style={heroStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>LANDING PAGE TEMPLATE</h1>
        <h2 style={subtitleStyle}>LOREIPSUM TITLE</h2>
        <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <button style={buttonStyle}>NEXT</button>
      </div>
      <div style={videoPlaceholderStyle}>
        <div style={playIconStyle}></div>
      </div>
    </section>
  );
}

export default HeroSection;