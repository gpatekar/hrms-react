import React from 'react';
import { Grid } from '@mui/material/';

import { PageTitle } from '../../components/UI';
import { PersonalDetails } from './PersonalDetails/PersonalDetails';
import { EmploymentDetails } from './EmploymentDetails/EmploymentDetails';

import { detailsSchema } from '../../schemas/employee';

export const EmployeeDetails: React.FC = () => {
  const employeeDetails: detailsSchema = {
    personal: [
      { label: 'Name', value: 'Gurudatta Patekar' },
      { label: 'Designation', value: 'Lead Developer' },
    ],
    employment: [
      { label: 'Email', value: 'guru.patekar@gmail.com' },
      { label: 'Code', value: 'CCI00015' },
      { label: 'Confirmation Dt', value: '23-Jun-2011' },
      { label: 'Group', value: 'FED' },
    ],
  };

  return (
    <div>
      <PageTitle>Employee Details</PageTitle>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PersonalDetails personalDetails={employeeDetails.personal} />
        </Grid>
        <Grid item xs={8}>
          <EmploymentDetails employmentDetails={employeeDetails.employment} />
        </Grid>
      </Grid>
    </div>
  );
};
