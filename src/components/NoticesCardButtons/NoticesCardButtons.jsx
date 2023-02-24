import PropTypes from 'prop-types';

import {
  CardButtonWrap,
  NoticesButton,
  NoticeButtonText,
  DeleteButton,
  DeleteButtonText,
} from './NoticesCardButtons.styled';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';

export const NoticesCardButtons = ({ own, setDeleteModalIsOpen }) => {
  return (
    <CardButtonWrap own={own}>
      <NoticesButton type="button">
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
