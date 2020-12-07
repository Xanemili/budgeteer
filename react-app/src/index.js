import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store'
import theme from './theme'
import {ThemeProvider} from '@material-ui/core/styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
