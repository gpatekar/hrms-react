import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material/';
// import ExpandLess from '@mui/icons-material/ExpandLess';

import { nav, navItem } from '../../schemas/navigation';

export const SidebarNav: React.FC = () => {
  const drawerWidth = 280;
  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 64,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
  }
  const [open, setOpen] = useState(true);
  const openDropDown = () => {
    setOpen(!open);
  };
  const nav: nav[] = [
    {
      name: 'Dashboard',
      link: '/',
    },
    {
      name: 'Employee',
      link: '',
      subLinks: [
        {
          name: 'Employee List',
          link: '/employee/employee-list',
        }
      ],
    },
    {
      name: 'Demos',
      link: '',
      subLinks: [
        {
          name: 'Formik demo',
          link: 'formik-demo',
        },
        
        {
          name: 'Editor demo',
          link: 'editor-demo',
        }
      ],
    },
  ];

  const dropdownMenu = (menuItem: nav) => {
    return (
      <Fragment key={menuItem.name}>
        <ListItemButton onClick={openDropDown}>
          <ListItemText primary={menuItem.name} />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItem.subLinks?.map((subLinkItem: navItem) => (
              <ListItemButton key={subLinkItem.name} sx={{ pl: 4 }} component="a" href={subLinkItem.link}>
                <ListItemText primary={subLinkItem.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  };

  return (
    <Drawer
      sx={{ ...drawerStyle }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {nav.map((navItem) => {
          return navItem.subLinks ? (
            dropdownMenu(navItem)
          ) : (
            <ListItem disablePadding key={navItem.name}>
              <ListItemButton component="a" href={navItem.link}>
                <ListItemText primary={navItem.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
