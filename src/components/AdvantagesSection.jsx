import React from 'react';

function AdvantagesSection() {
  const advantagesStyle = {
    padding: '30px',
    backgroundColor: '#e9ecef',
  };

  const titleStyle = {
    fontSize: '3em',
    marginBottom: '20px',
    textAlign: 'left',
    color: '#343a40',
  };

  const gridStyle = {
    display: 'grid',
    /* Definimos 3 columnas con anchos más específicos */
    gridTemplateColumns: '1fr 1fr 1.5fr',
    /* Definimos 3 filas */
    gridTemplateRows: 'auto auto auto',
    gap: '15px',
  };

  const advantageBoxStyle = {
    backgroundColor: '#e9ecef',
    padding: '15px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  };

  const imagePlaceholderStyle = {
    backgroundColor: '#d3d3d3',
    width: '70px',
    height: '70px',
    padding: '15px',
  };

  const advantageInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const advantageTitleStyle = {
    fontSize: '1.2em',
    marginBottom: '5px',
    color: '#343a40',
  };

  const advantageTextStyle = {
    color: '#495057',
    lineHeight: '1.5',
    fontSize: '0.9em',
  };

  const featuredBoxStyle = {
    backgroundColor: '#545b62',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    /* Ocupa la tercera columna y las filas 1, 2 y 3 */
    gridColumn: '3',
    gridRow: '1 / span 3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  };

  const featuredTitleStyle = {
    fontSize: '1.1em',
    marginBottom: '5px',
    lineHeight: '1.2',
  };

  const groburStyle = {
    ...advantageBoxStyle,
    /* Ocupa la primera columna de la tercera fila */
    gridColumn: '1',
    gridRow: '3',
  };

  const nogitsMotpoStyle = {
    ...advantageBoxStyle,
    /* Ocupa la tercera columna de la tercera fila */
    gridColumn: '2',
    gridRow: '3',
  };

  return (
    <section style={advantagesStyle}>
      <h2 style={titleStyle}>COMPANY ADVANTAGES</h2>
      <div style={gridStyle}>
        <div style={advantageBoxStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>DOLOR FIT BOR</h3>
            <p style={advantageTextStyle}>volutpat. Ut wisi enim ad minim veniam, quis nostrud</p>
          </div>
        </div>
        <div style={advantageBoxStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>POSTURMAT</h3>
            <p style={advantageTextStyle}>euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          </div>
        </div>
        <div style={featuredBoxStyle}>
          <h3 style={featuredTitleStyle}>LOREIPSUM DOLOR</h3>
          <h3 style={featuredTitleStyle}>TAURUS BIGOR</h3>
        </div>
        <div style={advantageBoxStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>BITUS GOROTUS</h3>
            <p style={advantageTextStyle}>laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
          </div>
        </div>
        <div style={advantageBoxStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>FIT BOR</h3>
            <p style={advantageTextStyle}>euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          </div>
        </div>
        <div style={groburStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>GROBUR</h3>
            <p style={advantageTextStyle}>volutpat. Ut wisi enim ad minim veniam, quis nostrud</p>
          </div>
        </div>
        <div style={nogitsMotpoStyle}>
          <div style={imagePlaceholderStyle}></div>
          <div style={advantageInfoStyle}>
            <h3 style={advantageTitleStyle}>NOGITS MOTPO</h3>
            <p style={advantageTextStyle}>euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;