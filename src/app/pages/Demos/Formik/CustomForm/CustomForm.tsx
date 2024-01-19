import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  FormGroup,
  InputLabel,
} from '@mui/material';

export const CustomForm = () => {
  const artsUsers = ['Guru', 'Atelia', 'Hilario'];
  const commerceUsers = ['Ashwin', 'Sairaj', 'Ameh'];
  const scienceUsers = ['Sneha', 'Gautam', 'Reagan', 'Sweta'];

  const schema = Yup.object().shape({
    divisionName: Yup.string().required('Required'),
    divisionUsers: Yup.boolean().required('Required'),
  });

  const initialValues = {
    divisionName: '',
    users: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {(formik: any) => (
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <InputLabel>Division name</InputLabel>
            <Select
              name="divisionName"
              id="divisionName"
              value={formik.values.divisionName}
              error={formik.touched.divisionName && !!formik.errors.divisionName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            >
              <MenuItem value="arts">Arts</MenuItem>
              <MenuItem value="commerce">Commerce</MenuItem>
              <MenuItem value="science">Science</MenuItem>
            </Select>
            {formik.touched.cities && formik.errors.cities && (
              <FormHelperText>{formik.errors.cities}</FormHelperText>
            )}
          </FormControl>
          <br />
          <FormControl>
            <InputLabel>Users name</InputLabel>
            <Select
              name="divisionUsers"
              id="divisionUsers"
              value={formik.values.divisionUsers}
              error={formik.touched.divisionUsers && !!formik.errors.divisionUsers}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
            >
              {[...artsUsers, ...commerceUsers, ...scienceUsers].map((user: string) => (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.cities && formik.errors.cities && (
              <FormHelperText>{formik.errors.cities}</FormHelperText>
            )}
          </FormControl>
        </form>
      )}
    </Formik>
  );
};
