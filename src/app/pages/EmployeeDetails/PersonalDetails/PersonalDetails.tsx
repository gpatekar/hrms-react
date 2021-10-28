import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material/';

import { detailItemSchema } from '../../../schemas/employee';

interface personalDetailsSchema {
    personalDetails: detailItemSchema[]
}

export const PersonalDetails: React.FC<personalDetailsSchema> = ({ personalDetails }) => {

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Avatar sx={{ width: 100, height: 100 }}>GP</Avatar>
        </Box>
        <List>
          {personalDetails.map((personalItem:detailItemSchema) => (
            <ListItem key={personalItem.label}>
              <ListItemText>{personalItem.label}</ListItemText>
              <Box marginLeft="auto">
                  <ListItemText>{personalItem.value}</ListItemText>
              </Box>
              
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
