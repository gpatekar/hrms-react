import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material/';
import { useAuth0 } from '@auth0/auth0-react';

export const Header: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HRMS
          </Typography>
          {isAuthenticated ? (
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={loginWithRedirect}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
