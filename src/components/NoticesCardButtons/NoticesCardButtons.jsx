import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOwnNotice } from 'redux/notices/operations';
import { endPoints } from 'constants/EndPoints';

import {
  CardButtonWrap,
  NoticesButton,
  NoticeButtonText,
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

  return (
    <CardButtonWrap own={own}>
      <NoticesButton type="button">
        <NoticeButtonText>Learn more</NoticeButtonText>
      </NoticesButton>
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
