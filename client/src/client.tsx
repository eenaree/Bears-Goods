import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '@styles/Global';
import App from '@layouts/App';
import { CartProvider } from '@context/CartContext';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
