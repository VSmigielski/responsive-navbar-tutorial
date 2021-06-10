import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { ThemeProvider } from '@material-ui/styles'
import theme from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  )
}

export default App

