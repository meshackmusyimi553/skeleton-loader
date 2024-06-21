import React from 'react';
import MaterialSkeletonLoader from './components/MaterialSkeletonLoader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MaterialSkeletonLoader />
    </ThemeProvider>
  );
}

export default App;
