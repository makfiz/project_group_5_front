import * as yup from 'yup';

yup.addMethod(yup.string, 'password', function () {
  return this.matches(/^\S+$/, 'password must be without spaces');
});

yup.addMethod(yup.string, 'mail', function () {
  return this.matches(
    /^((?!-)([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'The email address is incorect'
  );
});

export const schema = yup.object().shape({
  email: yup.string().mail().required('Please enter your email!'),
  password: yup
    .string()
    .password()
    .min('7')
    .max('32')
    .required('Please enter your password!'),
});
