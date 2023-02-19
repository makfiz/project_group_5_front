import { Box } from 'components/Box/Box';
import { NoticesDescriptionText } from 'components/NoticesDescriptionText/NoticesDescriptionText';
import { NoticesCardButtons } from 'components/NoticesCardButtons/NoticesCardButtons';

import {
  ImgWrap,
  Img,
  ImgBadge,
  AddInFavoriteBtn,
  TextWrap,
  Title,
  DescriptionDefinitions,
} from './NoticesListItem.styled';

import { ReactComponent as Favorite } from '../../assets/icons/Favorite.svg';

export const NoticesListItem = () => {
  // TODO: own parametr to render card delete button
  const own = false;
  const category = 'in good hands';

  return (
    <Box>
      <ImgWrap>
        <Img
          src="https://cdn.shopify.com/s/files/1/1133/5028/files/LAB_DAISY_CROWN_2500_2000x.jpg?v=1661012224"
          alt="pet"
        />
        <ImgBadge category={category}>{category}</ImgBadge>
        <AddInFavoriteBtn type="button">
          <Favorite />
        </AddInFavoriteBtn>
      </ImgWrap>

      <TextWrap>
        <Title>Сute dog looking for a home</Title>
        <Box display="flex">
          <Box>
            <NoticesDescriptionText text="Breed:" />
            <NoticesDescriptionText text="Place:" />
            <NoticesDescriptionText text="Age:" />
            {category === 'sell' && <NoticesDescriptionText text="Price:" />}
          </Box>

          <DescriptionDefinitions>
            <NoticesDescriptionText text="Pomeranian" />
            <NoticesDescriptionText text="Lviv" />
            <NoticesDescriptionText text="one year" />
            {category === 'sell' && <NoticesDescriptionText text="50$" />}
          </DescriptionDefinitions>
        </Box>

        <NoticesCardButtons own={own} />
      </TextWrap>
    </Box>
  );
};
