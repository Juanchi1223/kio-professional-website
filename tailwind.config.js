/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        kio: {
          terracota: '#9a3631',
          'terracota-oscuro': '#7a2a26',
          'terracota-claro': '#f6ebe9',
          'terracota-texto': '#f6e3e1', // texto claro sobre fondo terracota
          rosa: '#e8a49f',
          negro: '#131312',
          'negro-2': '#1f1e1d',
          'negro-3': '#2a2928',
          texto: '#4a4745',
          'texto-suave': '#5f5c5a',
          'texto-claro': '#d6d1ce',
          'texto-claro-2': '#b5b0ad',
          icuo: '#ffc600', // marca ICUO: usar siempre con texto negro (blanco no llega a AA)
          onyra: '#6c9cae', // marca onyrA: usar siempre con texto negro (blanco no llega a AA)
          'icuo-texto': '#b38a00', // ICUO oscurecido para texto grande (3,2:1 sobre blanco)
          'onyra-texto': '#5a8a9c', // onyrA oscurecido para texto grande (3,8:1 sobre blanco)
          gris: '#818080', // decorativo: NO usar como color de texto (no llega a AA)
          crema: '#f7f4f2',
          arena: '#efe9e6',
          'arena-2': '#e6dfdb',
          borde: '#ece8e6',
          'borde-2': '#e4dfdc',
          'borde-3': '#c9c2be',
          'linea-oscura': '#2f2e2d',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
      },
      boxShadow: {
        bar: '0 -6px 20px rgba(19,19,18,0.08)',
        float: '0 8px 24px rgba(19,19,18,0.10)',
      },
    },
  },
  plugins: [],
};
