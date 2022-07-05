import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@context/CartContext';
import App from '@layouts/App';
import GlobalStyles from '@styles/Global';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
