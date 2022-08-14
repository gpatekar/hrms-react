import React from 'react';
import { Paper } from '@mui/material';
import { Carousel } from '../../../components';

export const BirthDay: React.FC = () => {
  return (
    <Paper>
       <Carousel>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
       </Carousel>
    </Paper>
  );
};