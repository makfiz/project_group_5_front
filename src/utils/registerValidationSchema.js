import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(/^\d+$/, 'The number should have digits only');
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(/^[aA-zZ\s]+$/, 'The name should have  only alphabets');
});

yup.addMethod(yup.string, 'mail', function () {
  return this.matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    'The email address is incorect'
  );
});

export const schema = yup.object().shape({
  email: yup.string().mail().required('Please enter your email!'),
  password: yup.string().min('5').required('Please enter your password!'),

  confirmPassword: yup
    .string()
    .when('password', (password, field) =>
      password ? field.required().oneOf(['password']) : field
    ),
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
