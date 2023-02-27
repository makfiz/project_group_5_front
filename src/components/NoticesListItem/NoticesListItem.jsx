import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BounceLoader } from 'react-spinners';

import {
  showWarningNotification,
  calculateAndConvertAge,
  renameNoticesCategory,
  convertLocationStringToCityName,
} from 'utils';

import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
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
import { NoticesConfirmDeletingModal } from 'components/NoticesConfirmDeletingModal/NoticesConfirmDeletingModal';
import noPhoto from 'assets/default-img/default.jpg';

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

  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isUpdating, setIsUpdating] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [inFavorite, setInFavorite] = useState(false);

  useEffect(() => {
    if (loadingNotices) return;

    if (!loadingNotices) {
      setIsUpdating(false);
      if (favoritesIn.includes(userId)) {
        setInFavorite(true);
      } else {
        setInFavorite(false);
      }
    }

    return () => {};
  }, [loadingNotices, favoritesIn, userId]);

  const age = calculateAndConvertAge(birth);
  const categoryTitle = renameNoticesCategory(category);
  const place = convertLocationStringToCityName(location);
  const sellPage = category === 'sell' && askedPage === 'sell';
  const own = owner === userId;

  const handleFavorite = e => {
    const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;

    if (!isLoggedIn) {
      return showWarningNotification(
        'Only authorized users can add to favorite',
        2500
      );
    }

    if (!inFavorite) {
      setIsUpdating(true);
      dispatch(addNoticeToFavorite({ path }));
      setInFavorite(true);
      return;
    }
    if (askedPage === 'favorite') {
      setIsUpdating(true);
      dispatch(deleteOnFavoritePage({ path }));
      setInFavorite(false);

      return;
    }
    if (askedPage !== 'favorite') {
      setIsUpdating(true);
      dispatch(removeNoticeFromFavorite({ path }));
      setInFavorite(false);

      return;
    }
  };
  return (
    <Box>
      <ImgWrap>
        <Img
          height="288"
          width="280"
          src={photoURL ? photoURL : noPhoto}
          alt={breed}
        />
        <ImgBadge category={category}>{categoryTitle}</ImgBadge>
        <AddInFavoriteBtn
          disabled={loadingNotices}
          onClick={handleFavorite}
          type="button"
        >
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
        <Title text={title} length={15} />
        <Box display="flex">
          <Box>
            <NoticesDescriptionText text="Breed:" />
            <NoticesDescriptionText text="Place:" />
            <NoticesDescriptionText text="Age:" />
            {sellPage && <NoticesDescriptionText text="Price:" />}
          </Box>

          <DescriptionDefinitions>
            <NoticesDescriptionText text={breed} />
            <NoticesDescriptionText text={place} />
            <NoticesDescriptionText text={age} />
            {sellPage && <NoticesDescriptionText text={price} />}
          </DescriptionDefinitions>
        </Box>

        <NoticesCardButtons
          own={own}
          noticeId={_id}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
        />

        {deleteModalIsOpen && (
          <NoticesConfirmDeletingModal
            noticeId={_id}
            setDeleteModalIsOpen={setDeleteModalIsOpen}
          />
        )}
      </TextWrap>
    </Box>
  );
};

NoticesListItem.propTypes = {
  askedPage: PropTypes.string.isRequired,
  ad: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string,
    photoURL: PropTypes.string,
    favoritesIn: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.string.isRequired,
  }),
};
