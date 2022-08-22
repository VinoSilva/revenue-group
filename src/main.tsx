import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import theme from '@/theme'

import { store } from '@/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
