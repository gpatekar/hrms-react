import React from 'react';
import { Typography } from '@mui/material/';
 
export const PageTitle: React.FC = ({ children }) => {
  return ( 
       <Typography variant="h4" component="h1" gutterBottom>
        {children}
      </Typography>
  );
};