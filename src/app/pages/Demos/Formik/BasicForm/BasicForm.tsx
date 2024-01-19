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

export const BasicForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required('Required').email('Invalid email'),
    phone: Yup.number()
      .required('Required')
      .nullable(true)
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point"),
    count: Yup.number().required('Required').min(2, 'Minimum 2').max(50, 'Maximum 50'),
    cities: Yup.array().required('Required').min(2, 'Minimum 2').max(50, 'Maximum 50'),
    checkboxGroup: Yup.array().required('Required').min(1, 'Minimum 2'),
    isAllowed: Yup.boolean().required('Required'),
  });

  const initialValues = {
    email: '',
    phone: '',
    cities: [30],
    checkboxGroup: [],
    isAllowed: '',
    count: '',
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
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                name="email"
                id="email"
                label="Email"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                name="phone"
                id="phone"
                label="Phone"
                value={formik.values.phone}
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                name="count"
                id="count"
                label="count"
                value={formik.values.count}
                error={formik.touched.count && !!formik.errors.count}
                helperText={formik.touched.count && formik.errors.count}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel>Cities</InputLabel>
                <Select
                  name="cities"
                  id="cities"
                  value={formik.values.cities}
                  error={formik.touched.cities && !!formik.errors.cities}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiple
                  fullWidth
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {formik.touched.cities && formik.errors.cities && (
                  <FormHelperText>{formik.errors.cities}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isAllowed"
                    id="isAllowed"
                    value={formik.values.isAllowed}
                    // error={formik.touched.cities && !!formik.errors.cities}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label="Allowed"
              />
              {formik.touched.isAllowed && formik.errors.isAllowed && (
                <FormHelperText>{formik.errors.isAllowed}</FormHelperText>
              )}
            </Grid>
            <Grid>
              <FormGroup
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="checkboxGroup"
              >
                <FormControlLabel
                  control={<Checkbox name="checkboxGroup" value="option 1" />}
                  label="Label"
                />
                <FormControlLabel
                  control={<Checkbox name="checkboxGroup" value="option 2" />}
                  label="Required"
                />
                <FormControlLabel
                  control={<Checkbox name="checkboxGroup" value="option 3" />}
                  label="Disabled"
                />
              </FormGroup>
              {formik.touched.checkboxGroup && formik.errors.checkboxGroup && (
                <FormHelperText>{formik.errors.checkboxGroup}</FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
