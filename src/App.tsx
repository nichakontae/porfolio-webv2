import { ThemeProvider } from '@chakra-ui/react'
import React from 'react'
import AppRouter from './router'

const App = () => {
  return (
    // <React.Fragment> used for grouping multiple elements without adding extra DOM nodes be like <>...</>
    <React.Fragment>

         <AppRouter/>

    </React.Fragment>
  )
}

export default App