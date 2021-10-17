import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material/';

export const SidebarNav: React.FC = () => {
  const drawerWidth = 280;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        marginTop: 64,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
