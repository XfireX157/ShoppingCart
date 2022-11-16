import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDOM from './Router';
import './Reset.scss'
import { ProductContextProvider } from "./Common/AddProduct";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterDOM />
    </ProductContextProvider>
  </React.StrictMode>
);
