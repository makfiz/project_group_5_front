import { Field, ErrorMessage, Form, Formik } from 'formik';
import { ReactComponent as CloseIcon } from '../../../assets/menu-icons/close-menu.svg';

export const ModalAddsPetFirst = (props) => {
  
  const handleSubmit = (values) => {
    props.next(values, true);
  };
 
  return (
    <div>
      <button type="button" onClick={props.closeModal}>
        <CloseIcon/>
      </button>
      <h3>Add pet</h3>
      <div>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <label htmlFor="namePet">
                Name pet
              </label>
              <div>
                <Field name="name" placeholder="Type name pet" type="text" />
                <ErrorMessage name="name" component="p" />
              </div>

              <label htmlFor="dateOfBirth">
                Date of birth
              </label>
              <div>
                <Field name="dateOfBirth" placeholder="Type date of birth" />
                <ErrorMessage name="dateOfBirth" component="p" />
              </div>
              <label htmlFor="breed">
                Breed
              </label>
              <div>
                <Field name="breed" placeholder="Type breed" type="text" />
                <ErrorMessage name="breed" component="p" />
              </div>
              <div>
                <button type="submit">
                  Next
                </button>
                <button type="button" onClick={props.closeModal}>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

