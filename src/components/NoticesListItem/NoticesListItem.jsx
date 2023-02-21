import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { renameNoticesCategory } from 'utils/renameNoticesCategory';

import {
  addNoticeToFavorite,
  removeNoticeFromFavorite,
  deleteOnFavoritePage,
} from 'redux/notices/operations';
import { endPoints } from 'constants/EndPoints';

import { Box } from 'components/Box/Box';
import { NoticesDescriptionText } from 'components/NoticesDescriptionText/NoticesDescriptionText';
import { NoticesCardButtons } from 'components/NoticesCardButtons/NoticesCardButtons';
import noPhoto from '../../assets/default-img/default.jpg';

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

export const NoticesListItem = ({ ad, askedPage }) => {
  const {
    _id,
    category,
    title,
    birth,
    breed,
    location,
    price,
    photoURL = noPhoto,
    favoritesIn,
    owner,
  } = ad;

  // TODO: own parametr to render card delete button
  const userId = '63ef3ab7764df6f672fdc7cc';

  // TODO: age in text format
  const age = formatDistanceToNowStrict(Date.parse(birth));

  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(() =>
    favoritesIn.includes(userId)
  );
  const categoryTitle = renameNoticesCategory(category);
  const sellPage = category === 'sell' && askedPage === 'sell';
  const own = owner === userId;

  const handleFavorite = e => {
    console.log('click');
    const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;
    if (!inFavorite) {
      dispatch(addNoticeToFavorite({ path }));
      setInFavorite(true);
      return;
    }
    if (askedPage === 'favorite') {
      dispatch(deleteOnFavoritePage({ path }));
      setInFavorite(false);
      return;
    }
    if (askedPage !== 'favorite') {
      dispatch(removeNoticeFromFavorite({ path }));
      setInFavorite(false);
      return;
    }
  };

  return (
    <Box>
      <ImgWrap>
        <Img src={photoURL} alt={breed} />
        <ImgBadge category={category}>{categoryTitle}</ImgBadge>
        <AddInFavoriteBtn onClick={handleFavorite} type="button">
          <Favorite fill={inFavorite ? '#F59256' : '#FFFFFF'} />
        </AddInFavoriteBtn>
      </ImgWrap>

      <TextWrap>
        <Title>{title}</Title>
        <Box display="flex">
          <Box>
            <NoticesDescriptionText text="Breed:" />
            <NoticesDescriptionText text="Place:" />
            <NoticesDescriptionText text="Age:" />
            {sellPage && <NoticesDescriptionText text="Price:" />}
          </Box>

          <DescriptionDefinitions>
            <NoticesDescriptionText text={breed} />
            <NoticesDescriptionText text={location} />
            <NoticesDescriptionText text={age} />
            {sellPage && <NoticesDescriptionText text={price} />}
          </DescriptionDefinitions>
        </Box>

        <NoticesCardButtons own={own} noticeId={_id} />
      </TextWrap>
    </Box>
  );
};
