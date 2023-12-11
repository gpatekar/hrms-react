import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';

interface IValidFileExtensions {
  [image: string]: string[];
}

export const ImageUpload = () => {
  const MAX_FILE_SIZE = 102400; //100KB

  const validFileExtensions: IValidFileExtensions = {
    image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
  };

  function isValidFileType(fileName: string, fileType: string): boolean {
    return !!(
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split('.').pop() as string) > -1
    );
  }

  const schema = Yup.object().shape({
    image: Yup.mixed()
      .required('Required')
      .test('is-valid-type', 'Not a valid image type', (value) => {
        return value && isValidFileType(value?.name?.toLowerCase(), 'image');
      })
      .test(
        'is-valid-size',
        'Max allowed size is 100KB',
        (value) => value && value.size <= MAX_FILE_SIZE
      ),
  });

  const handleSubmit = (values: { image: string }) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ image: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {(formik: any, onSubmit: any) => (
        <form onSubmit={onSubmit}>
          <TextField
            type="file"
            name="image"
            id="image"
            error={formik.touched.image && !!formik.errors.image}
            helperText={formik.errors.image}
            onChange={(event: any) => {
              formik.setFieldValue('image', event.currentTarget.files[0]);
            }}
          />
        </form>
      )}
    </Formik>
  );
};
