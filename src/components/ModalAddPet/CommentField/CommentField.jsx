import { Label, Error } from '../ModalAddPet.styled';
import { CommentWrap } from './CommentField.styled';
import { Field } from 'formik';

const CommentField = ({ touched, errors, name, validate }) => {
  return (
    <CommentWrap>
      <Label>
        <div>Comments</div>
        <Field
          as="textarea"
          placeholder="Type comment"
          name={name}
          validate={validate}
        />
        {touched.comments && errors.comments && (
          <Error>{errors.comments}</Error>
        )}
      </Label>
    </CommentWrap>
  );
};

export default CommentField;
