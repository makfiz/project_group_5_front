import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The number should have digits only');
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(/^[aA-zZ\s]+$/, 'The email should have only alphabets');
});

yup.addMethod(yup.string, 'mail', function () {
  return this.matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    'The email address is incorect'
  );
});

export const schema = yup.object().shape({
  email: yup.string().mail().required('Please enter your email!'),
  password: yup
    .string()
    .min('5')
    .leters()
    .required('Please enter your password!'),
});
