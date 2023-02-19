import { useState } from 'react';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { ReactComponent as CloseIcon } from '../../../assets/menu-icons/close-menu.svg';
import defaultImg from '../../../assets/default-img/default.jpg'

export const ModalAddsPetSecond = (props) => {
  const [img, setImg] = useState(null);
  const [valid] = useState(false);

  const handleSubmit = (values) => {
    props.next(values, true);
    props.closeModal();
  };
  return (
    <div>
      <button type="button" onClick={props.closeModal}>
        <CloseIcon/>
      </button>
      <h3>Add pet</h3>
      <div>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form encType="multipart/form-data">
              <p>Add photo and some comments</p>
              <button type="button">
                {!img ? (
                  <img src={defaultImg} alt="Pet"/>
                ) : (
                  <img src={img} alt="avatar" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('petImage', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));
                    
                  }}
                />
                <p>{!valid && 'Image is required'}</p>
              </button>

              <div>
                <label> Comments</label>
                  <Field name="comments" as="textarea" placeholder="Type comments" />
                  <ErrorMessage name="comments" component="p" />            
              </div>

              <div>
                <button type="submit">
                  Done
                </button>
                <button type="button" onClick={props.prev}>
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};