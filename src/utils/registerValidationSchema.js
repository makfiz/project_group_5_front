import * as yup from 'yup';

yup.addMethod(yup.string, 'numeric', function () {
  return this.matches(
    /^\+3\d{11}$/,
    'the number must start with +3 and have digits only'
  );
});

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(
    /^([A-Za-z][A-Za-z\-\']{1,50})|([А-ЯЁIЇҐЄа-яёіїґє][А-ЯЁIЇҐЄа-яёіїґє\-\']{1,50})$/,
    'The name should have  only alphabets'
  );
});

yup.addMethod(yup.string, 'mail', function () {
  return this.matches(
    /^((?!-)([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'The email address is incorect'
  );
});

yup.addMethod(yup.string, 'password', function () {
  return this.matches(/^\S+$/, 'password must be without spaces');
});

yup.addMethod(yup.string, 'city', function () {
  return this.matches(
    /^[a-zA-Zа-яА-ЯіІїЇґҐ']+(?:[\s-][a-zA-Zа-яА-ЯіІїЇґҐ']+)*,\s*[a-zA-Zа-яА-ЯіІїЇґҐ']+(?:[\s-][a-zA-Zа-яА-ЯіІїЇґҐ']+)*$/,
    'is incorect, must be City, region'
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

  confirmPassword: yup
    .string()
    .password()
    .min('7')
    .max('32')
    .label('confirm password')
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  name: yup
    .string()
    .min('2')
    .max('16')
    .leters()
    .required('Please enter your name!'),
  city: yup
    .string()
    .min('3')
    .max('40')
    .city()
    .required('Please enter city and region!'),

  mobilePhone: yup
    .string()
    .min('3')
    .numeric()
    .required('Please enter your number!'),
});
