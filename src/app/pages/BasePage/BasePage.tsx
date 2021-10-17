import React from 'react';
// import  from '@mui/material/Grid';
import { Box } from '@mui/material';

import { Header, SidebarNav } from '../../components';

import './BasePage.css';

export const BasePage: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Box display="flex">
        <SidebarNav />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          {children}
        </Box>
      </Box>
    </div>
  );
};
