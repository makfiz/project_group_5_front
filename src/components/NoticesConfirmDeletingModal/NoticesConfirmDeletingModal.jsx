import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { deleteOwnNotice } from 'redux/notices/operations';
import { endPoints } from 'constants/EndPoints';
import { selectIsLoadingNotices } from 'redux/notices/selectors';

import { Box } from 'components/Box/Box';
import { NoticesDescriptionText } from 'components/NoticesDescriptionText/NoticesDescriptionText';

import {
  DeleteModalWrap,
  DeleteModalInnerBlock,
  DeleteModalTitle,
  DeleteModalButton,
  DeleteModalButtonText,
} from './NoticesConfirmDeletingModal.styled';

export const NoticesConfirmDeletingModal = ({
  noticeId,
  setDeleteModalIsOpen,
}) => {
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

  const handleDelete = () => {
    setIsUpdating(true);
    const path = `${endPoints.pathDeleteOwn}${noticeId}`;
    dispatch(deleteOwnNotice({ path }));
  };

  return (
    <DeleteModalWrap>
      <DeleteModalInnerBlock>
        <DeleteModalTitle>Confirm action</DeleteModalTitle>
        <NoticesDescriptionText text="Are you sure want to delete this notice permanently?" />
        <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
          <DeleteModalButton
            onClick={() => setDeleteModalIsOpen(false)}
            type="button"
          >
            <DeleteModalButtonText>NO, cancel</DeleteModalButtonText>
          </DeleteModalButton>
          <DeleteModalButton onClick={handleDelete} type="button">
            <DeleteModalButtonText>
              {!isUpdating ? 'YES, confirm' : 'Deleting...'}
            </DeleteModalButtonText>
            <BeatLoader size={10} color={'#F59256'} loading={isUpdating} />
          </DeleteModalButton>
        </Box>
      </DeleteModalInnerBlock>
    </DeleteModalWrap>
  );
};

NoticesConfirmDeletingModal.propTypes = {
  noticeId: PropTypes.string.isRequired,
  setDeleteModalIsOpen: PropTypes.func.isRequired,
};
