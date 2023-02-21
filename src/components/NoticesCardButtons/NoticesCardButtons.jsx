import { useDispatch } from 'react-redux';
import { deleteOwnNotice } from 'redux/notices/operations';
import { endPoints } from 'constants/EndPoints';

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
  return (
    <CardButtonWrap own={own}>
      <LearnMoreLink>Learn more</LearnMoreLink>
      {own && (
        <DeleteButton onClick={deleteHandler} type="button">
          <DeleteButtonText>Delete</DeleteButtonText>
          <DeleteIcon />
        </DeleteButton>
      )}
    </CardButtonWrap>
  );
};
