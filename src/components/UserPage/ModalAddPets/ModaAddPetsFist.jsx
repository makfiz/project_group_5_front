import { Field, Form, Formik } from 'formik';

export const ModalAddsPetFirst = (props) => {
  
    const handleSubmit = (values) => {
    props.next(values, true);
  };
 
  return (
    <div className={scss.container}>
      <button type="button" onClick={Close}>
        X
      </button>
      <h3>{'Add pet'}</h3>
      <div>
        <Formik initialValues={props} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <label htmlFor="namePet">
                Name pet
              </label>
              <div>
                <Field name="name" placeholder="Type name pet" type = 'text' autofocus autoComplete />
              </div>

              <label htmlFor="dateOfBirth">
                Date of birth
              </label>
              <div>
                <Field name="dateOfBirth" placeholder="Type date of birth" type = 'text' autofocus autoComplete />              
              </div>
              <label htmlFor="breed">
                Breed
              </label>
              <div>
                <Field name="breed" placeholder="Type breed" type = 'text' autofocus autoComplete />               
              </div>
              <div>
                <button type="submit">
                  Next
                </button>
                <button type="button" onClick={Close}>
                  Сancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

