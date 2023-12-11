import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, Container, Button, TextField } from '@mui/material';

import { PageTitle } from '../../components/UI';

export const Login = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = yup.object({
    email: yup.string().required('Please enter email').email('Invalid email'),
    password: yup.string().required('Please enter password'),
  });
  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <PageTitle>Login</PageTitle>
      <Box sx={{ width: '100%' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Box sx={{ mt: 1 }}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  error={!!props.errors.email}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  label="Password"
                  fullWidth
                  name="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  error={!!props.errors.password}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
