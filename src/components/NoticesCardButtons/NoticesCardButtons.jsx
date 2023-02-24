import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchNoticeById } from 'redux/notices/operations';
import { openModal } from '../../redux/form/formSlice';

import {
  CardButtonWrap,
  NoticesButton,
  NoticeButtonText,
  DeleteButton,
  DeleteButtonText,
} from './NoticesCardButtons.styled';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';

export const NoticesCardButtons = ({ own, noticeId, setDeleteModalIsOpen }) => {
  const dispatch = useDispatch();

  const showMore = () => {
    dispatch(openModal());
    dispatch(fetchNoticeById(noticeId));
  };

  return (
    <CardButtonWrap own={own}>
      <NoticesButton onClick={showMore} type="button">
        <NoticeButtonText>Learn more</NoticeButtonText>
      </NoticesButton>
      {own && (
        <DeleteButton onClick={() => setDeleteModalIsOpen(true)} type="button">
          <DeleteButtonText>Delete</DeleteButtonText>
          <DeleteIcon />
        </DeleteButton>
      )}
    </CardButtonWrap>
  );
};

NoticesCardButtons.propTypes = {
  own: PropTypes.bool.isRequired,
  setDeleteModalIsOpen: PropTypes.func.isRequired,
};
