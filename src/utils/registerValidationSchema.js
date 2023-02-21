import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The number should have digits only');
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(
    /^([A-Za-z][A-Za-z\-\']{1,50})|([А-ЯЁIЇҐЄа-яёіїґє][А-ЯЁIЇҐЄа-яёіїґє\-\']{1,50})$/,
    'The name should have  only alphabets'
  );
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

  confirmPassword: yup
    .string()
    .label('confirm password')
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  name: yup.string().min('3').leters().required('Please enter your name!'),
  city: yup
    .string()
    .min('3')
    .leters()
    .required('Please enter city and region!'),

  mobilePhone: yup
    .string()
    .min('3')
    .numeric()
    .required('Please enter your number!'),
});
