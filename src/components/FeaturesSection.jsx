import React from 'react';

function FeaturesSection() {
  const featuresStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '30px',
  };

  const featureBoxStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '30%',
  };

  const titleStyle = {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#343a40',
  };

  const imagePlaceholderStyle = {
    backgroundColor: '#e0e0e0', // Un color gris claro para el placeholder
    height: '200px', // Ajusta la altura según necesites
    width: '500px', // Ajusta el ancho según necesites
    margin: '15px auto', // Centra el placeholder y añade espacio
    borderRadius: '5px', // Opcional: bordes redondeados
  };

  const textStyle = {
    color: '#495057',
    lineHeight: '1.6',
  };

  return (
    <section style={featuresStyle}>
      <div style={featureBoxStyle}>
        <h3 style={titleStyle}>DOLOR FIT BOR</h3>
        <div style={imagePlaceholderStyle}>
          {/* Aquí iría la imagen */}
        </div>
        <p style={textStyle}>Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
      <div style={featureBoxStyle}>
        <h3 style={titleStyle}>PERMOS DOLOROS</h3>
        <div style={imagePlaceholderStyle}>
          {/* Aquí iría la imagen */}
        </div>
        <p style={textStyle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </div>
      <div style={featureBoxStyle}>
        <h3 style={titleStyle}>GOREMINOT BIRJU</h3>
        <div style={imagePlaceholderStyle}>
          {/* Aquí iría la imagen */}
        </div>
        <p style={textStyle}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;