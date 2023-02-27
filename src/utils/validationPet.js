import * as Yup from 'yup';

export const stepOneValidSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .label('Name')
    .required('Name is required')
    .matches(/^[A-Za-zА-Яа-яІіЇїЄє'-.]+$/),
  dateOfBirth: Yup.string()
    .matches(
      /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}$/,
      'Correct format: dd.mm.yyyy'
    )
    .max(new Date(), "Date of birth must be before today's date")
    .label('Date of birth')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .label('Breed')
    .required('Breed is required')
});

export const stepTwoValidSchema = Yup.object({
  comments: Yup.string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .label('Comment')
    .required('Comment is required'),
  petImage: Yup.mixed()
    .label('Pet image')
    .test("fileSize", "File too large", (value) =>
      value ? value.size <= 5000000 : true
    )
    .required('Pet image is required')
});