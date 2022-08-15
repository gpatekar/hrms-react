import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from '@mui/material/';

import { useAppSelector } from '../../../redux/hooks';

import { PageTitle } from '../../../components/UI';
import { EditEmployee } from '../../../components';

export const EmployeeList: React.FC = () => {
  const employeeList = useAppSelector((state) => state.employeeReducer.employeeList);

  const history = useHistory();
  const [editModalOpen, setEditModalOpen] = useState(false);

  const viewDetails = (code: string) => {
    history.push(`/employee/employee-details:${code}`);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };
  const handleEditModalOpen = () => setEditModalOpen(true);

  return (
    <div>
      <PageTitle>Employee List</PageTitle>
      <Grid container spacing={2}>
        {employeeList.map((employee) => (
          <Grid item xs={4}>
            <Card>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Name
                  </Typography>
                  <Typography variant="body1">{employee.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => viewDetails(employee.code)}
                  >
                    Details
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEditModalOpen()}
                  >
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Delete
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* edit employee */}
      <EditEmployee
        open={editModalOpen}
        handleClose={handleEditModalClose}
        employeeID={'CCI00001'}
      />
    </div>
  );
};
