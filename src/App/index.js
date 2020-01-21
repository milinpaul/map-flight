import React from 'react'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import Store from './Store'
import theme from './Theme'
import Layout from './Components/Layout'
import Routes from './Routes'
import Loader from './Components/Loader'

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={Store}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router history={history}>
              <Layout>
                <React.Suspense fallback={<Loader />}>
                  <Routes />
                </React.Suspense>
              </Layout>
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  )
}

export default App
