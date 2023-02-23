import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOwnNotice } from 'redux/notices/operations';
import { endPoints } from 'constants/EndPoints';
import { openModal } from '../../redux/form/formSlice';

import {
  CardButtonWrap,
  LearnMoreLink,
  DeleteButton,
  DeleteButtonText,
} from './NoticesCardButtons.styled';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';

export const NoticesCardButtons = ({ own, noticeId }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    const path = `${endPoints.pathDeleteOwn}${noticeId}`;
    dispatch(deleteOwnNotice({ path }));
  };

  const showMore = () => {
    dispatch(openModal());
  };

  return (
    <CardButtonWrap own={own}>
      <LearnMoreLink onClick={showMore}>Learn more</LearnMoreLink>
      {own && (
        <DeleteButton onClick={deleteHandler} type="button">
          <DeleteButtonText>Delete</DeleteButtonText>
          <DeleteIcon />
        </DeleteButton>
      )}
    </CardButtonWrap>
  );
};

NoticesCardButtons.propTypes = {
  own: PropTypes.bool.isRequired,
  noticeId: PropTypes.string.isRequired,
};
