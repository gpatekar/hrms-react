import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material/';

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HRMS
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
