import React from 'react';

import { ImageUpload } from './ImageUpload/ImageUpload';
import { BasicForm } from './BasicForm/BasicForm';

export const Formik = () => {
  return (
    <div>
      <h5>Image upload</h5>
      <ImageUpload />

      <h5>Basic form</h5>
      <BasicForm />
    </div>
  );
};
