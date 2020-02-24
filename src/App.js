import React from "react";
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
