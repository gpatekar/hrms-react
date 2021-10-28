import React, { useEffect, useState } from 'react';
import { Modal, Paper, TextField, Grid, Button } from '@mui/material/';

import './EditEmployee.css';

interface editEmployeeSchema {
  open: boolean;
  handleClose: () => void;
  employeeID: string;
}
export const EditEmployee: React.FC<editEmployeeSchema> = ({
  open,
  handleClose,
  employeeID,
}) => {
  const [employee, setEmployee] = useState({
    name: 'Gurudatta patekar',
    designation: 'Lead Developer',
    email: 'guru.patekar@gmail.com',
    code: 'CCI00015',
    confirmationDate: '23-Jun-2011',
    group: 'FED',
  });

  const onEmployeeChange = (label: string, value: string) => {
    setEmployee({ ...employee, ...{ [`${label}`]: value } });
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Paper className="wrapper">
          <form>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  required
                  label="Name"
                  value={employee.name}
                  onChange={(e) => {
                    onEmployeeChange('name', e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Designation"
                  value={employee.designation}
                  onChange={(e) => {
                    onEmployeeChange('designation', e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Email"
                  value={employee.email}
                  onChange={(e) => {
                    onEmployeeChange('email', e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Confirmation Dt"
                  value={employee.confirmationDate}
                  onChange={(e) => {
                    onEmployeeChange('confirmationDate', e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Group"
                  value={employee.group}
                  onChange={(e) => {
                    onEmployeeChange('group', e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button variant="contained">Submit</Button>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};
