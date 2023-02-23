import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
// import { formatDistanceToNowStrict } from 'date-fns';
import { calculateAndConvertAge } from 'utils/calculateAndConvertAge';
import { renameNoticesCategory } from 'utils/renameNoticesCategory';
import { selectUser } from 'redux/auth/selectors';
import { selectIsLoadingNotices } from 'redux/notices/selectors';

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

  const loadingNotices = useSelector(selectIsLoadingNotices);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (loadingNotices) return;
    if (!loadingNotices) {
      setIsUpdating(false);
    }

    return () => {};
  }, [loadingNotices]);

  const { id: userId } = useSelector(selectUser);
  const age = calculateAndConvertAge(Date.parse(birth));
  const dispatch = useDispatch();
  const [inFavorite, setInFavorite] = useState(() =>
    favoritesIn.includes(userId)
  );
  const categoryTitle = renameNoticesCategory(category);
  const sellPage = category === 'sell' && askedPage === 'sell';
  const own = owner === userId;

  const handleFavorite = e => {
    const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;
    if (!loadingNotices) {
      setIsUpdating(true);
    }

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
          {!isUpdating && (
            <Favorite fill={inFavorite ? '#F59256' : '#FFFFFF'} />
          )}
          <BounceLoader
            size={44}
            color={'#FF6101'}
            loading={isUpdating}
            speedMultiplier={2}
          />
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
