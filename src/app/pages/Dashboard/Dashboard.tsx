import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { StaticDatePicker, LocalizationProvider } from '@mui/lab';
import { BirthDay } from './BirthDay/BirthDay';

export const Dashboard: React.FC = () => {
  return (
    <div>
      Dashboard
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BirthDay />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider  dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              displayStaticWrapperAs="desktop"
              value={new Date()}
              onChange={(newValue) => {
                console.log(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </div>
  );
};
