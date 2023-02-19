import {
  CardButtonWrap,
  LearnMoreLink,
  DeleteButton,
  DeleteButtonText,
} from './NoticesCardButtons.styled';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';

export const NoticesCardButtons = ({ own }) => {
  return (
    <CardButtonWrap own={own}>
      <LearnMoreLink>Learn more</LearnMoreLink>
      {own && (
        <DeleteButton type="button">
          <DeleteButtonText>Delete</DeleteButtonText>
          <DeleteIcon />
        </DeleteButton>
      )}
    </CardButtonWrap>
  );
};
