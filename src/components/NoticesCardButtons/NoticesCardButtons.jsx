import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoticeById } from 'redux/notices/operations';
import { openModal } from '../../redux/form/formSlice';
import { selectIsLoadingNotices } from 'redux/notices/selectors';
import { MoonLoader } from 'react-spinners';

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
  const isLoading = useSelector(selectIsLoadingNotices);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    if (!isLoading) {
      setIsUpdating(false);
    }

    return () => {};
  }, [isLoading]);

  const showMore = () => {
    setIsUpdating(true);
    dispatch(openModal());
    dispatch(fetchNoticeById(noticeId));
  };

  return (
    <CardButtonWrap own={own}>
      <NoticesButton onClick={showMore} disabled={isLoading} type="button">
        <NoticeButtonText>Learn more</NoticeButtonText>
        <MoonLoader size={18} color={'#FF6101'} loading={isUpdating} />
      </NoticesButton>
      {own && (
        <DeleteButton
          onClick={() => setDeleteModalIsOpen(true)}
          disabled={isLoading}
          type="button"
        >
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
