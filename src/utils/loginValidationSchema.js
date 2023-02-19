import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The number should have digits only');
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(/^[aA-zZ\s]+$/, 'The email should have only alphabets');
});

yup.addMethod(yup.string, 'mail', function () {
  return this.matches(
    /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    'The email address is incorect'
  );
});

export const schema = yup.object().shape({
  email: yup.string().mail().required('Please enter your email!'),
  password: yup.string().min('7').required('Please enter your password!'),
});
