import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { AppRoutes } from './AppRoute';

import yup from './configs/YupConfig';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AppRoutes />
    </div>
  );
};

export default App;
