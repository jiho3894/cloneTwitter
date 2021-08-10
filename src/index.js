import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import globalStyles from 'components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <globalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
