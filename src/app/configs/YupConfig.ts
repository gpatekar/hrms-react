import * as yup from 'yup';

// Set the Yup locale globally
yup.setLocale({
  mixed: {
    required: 'This field is required',
  },
  string: {
    email: 'Invalid email format',
  }, 
  number: {
    
  }
});

export default yup;
