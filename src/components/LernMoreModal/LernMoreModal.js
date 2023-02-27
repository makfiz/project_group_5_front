import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import EllipsisText from 'react-ellipsis-text';

import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { closeModal } from 'redux/form/formSlice';
import { endPoints } from 'constants/EndPoints';
import {
  renameNoticesCategory,
  convertLocationStringToCityName,
  showWarningNotification,
} from 'utils';

import { selectUser } from 'redux/auth/selectors';
import {
  addNoticeToFavorite,
  removeNoticeFromFavorite,
  cleanNotice,
} from 'redux/notices/operations';
import {
  addToFavoriteInModal,
  removeFromFavoriteInModal,
} from 'redux/notices/noticesSlice';
import noPhoto from 'assets/default-img/default.jpg';

import {
  Wraper,
  Icon,
  IconWraper,
  Container,
  ImageWraper,
  FavoriteWraper,
  FavotiteType,
  Title,
  StyledButton,
  CommentsTitle,
  CommentsText,
  MoreInfoWraper,
  ContentWraper,
  Layout,
  ButtonWraper,
  LeftPartWraper,
  RightPartWraper,
  List,
  ListItem,
  ListItemTitle,
  Img,
  IconHeart,
  IconHeartBg,
  ListItemEmail,
  ListItemPhone,
} from './LernMoreModal.styled';
import { selectIsLoadingNotices } from 'redux/notices/selectors';

export function LernMoreModal() {
  const [heartColor, setHeartColor] = useState(false);

  const dispatch = useDispatch();
  const itemNotice = useSelector(state => state.notices.notice);
  const openModal = useSelector(state => state.form.isModalOpen);
  const { id: userId } = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoadingNotices);
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    _id,
    title = 'unknown',
    comments,
    category,
    name = 'unknown',
    birth = 'unknown',
    breed = 'unknown',
    location,
    sex,
    price,
    photoURL,
    favoritesIn,
    email = 'unknown',
    phone = 'unknown',
  } = itemNotice[0];

  const place = convertLocationStringToCityName(location);

  useEffect(() => {
    if (favoritesIn.includes(userId)) {
      setHeartColor(true);
    } else {
      setHeartColor(false);
    }
    if (!isLoading) {
      setIsUpdating(false);
    }
  }, [favoritesIn, isLoading, userId]);

  const onHandleClick = () => {
    dispatch(cleanNotice());
    dispatch(closeModal());
  };

  const phoneCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const emailSend = () => {
    window.location.href = `mailto:${email}`;
  };

  const onFavorite = () => {
    if (!userId) {
      return showWarningNotification(
        'Only authorized users can add to favorite',
        2500
      );
    }

    const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;
    if (heartColor) {
      setHeartColor(false);
      setIsUpdating(true);
      dispatch(removeNoticeFromFavorite({ path }));
      dispatch(removeFromFavoriteInModal({ noticeId: _id, userId }));
    }

    if (!heartColor) {
      setHeartColor(true);
      setIsUpdating(true);
      dispatch(addNoticeToFavorite({ path }));
      dispatch(addToFavoriteInModal({ noticeId: _id, userId }));
    }
  };

  return (
    <>
      {openModal && (
        <Modal onClick={onHandleClick} filter="true">
          <Wraper>
            <Container>
              <IconWraper>
                <Icon onClick={onHandleClick} />
              </IconWraper>

              <ContentWraper>
                <ImageWraper>
                  <Img src={photoURL ? photoURL : noPhoto} alt={breed} />
                  <FavoriteWraper>
                    <FavotiteType>
                      {renameNoticesCategory(category)}
                    </FavotiteType>
                  </FavoriteWraper>
                </ImageWraper>

                <Layout>
                  <Title>{title}</Title>
                  <MoreInfoWraper>
                    <LeftPartWraper>
                      <List>
                        <ListItemTitle>Name:</ListItemTitle>
                        <ListItemTitle>Birthday:</ListItemTitle>
                        <ListItemTitle>Breed:</ListItemTitle>
                        <ListItemTitle>Location:</ListItemTitle>
                        <ListItemTitle>The sex:</ListItemTitle>
                        <ListItemTitle>Email:</ListItemTitle>
                        <ListItemTitle>Phone:</ListItemTitle>
                        {category === 'sell' && (
                          <ListItemTitle>Price:</ListItemTitle>
                        )}
                      </List>
                    </LeftPartWraper>
                    <RightPartWraper>
                      <List>
                        <ListItem>{name}</ListItem>
                        <ListItem>{birth}</ListItem>
                        <ListItem>{breed}</ListItem>
                        <ListItem>{place}</ListItem>
                        <ListItem>{sex}</ListItem>
                        <ListItemEmail onClick={emailSend}>
                          {
                            <EllipsisText
                              text={email ?? 'unknown'}
                              length={16}
                            />
                          }
                        </ListItemEmail>
                        <ListItemPhone onClick={phoneCall}>
                          {phone.trim() ? phone : 'unknown'}
                        </ListItemPhone>
                        {category === 'sell' && <ListItem>{price}</ListItem>}
                      </List>
                    </RightPartWraper>
                  </MoreInfoWraper>
                </Layout>
              </ContentWraper>

              <div>
                <CommentsTitle>Comments:</CommentsTitle>
                <CommentsText>{comments}</CommentsText>
              </div>

              <ButtonWraper>
                <Button
                  children={<span>Contact</span>}
                  style={StyledButton}
                  type="button"
                  onClick={phoneCall}
                  disabled={isLoading}
                />

                <Button
                  style={StyledButton}
                  type="button"
                  onClick={onFavorite}
                  disabled={isLoading}
                >
                  {heartColor ? (
                    <span>{isUpdating ? 'Adding...' : 'Remove from '}</span>
                  ) : (
                    <span>{isUpdating ? 'Removing...' : 'Add to'}</span>
                  )}
                  {!isUpdating && (
                    <>
                      {heartColor ? (
                        <IconHeartBg size={16} />
                      ) : (
                        <IconHeart size={16} />
                      )}
                    </>
                  )}

                  {isUpdating && <MoonLoader size={16} color={'#FF6101'} />}
                </Button>
              </ButtonWraper>
            </Container>
          </Wraper>
        </Modal>
      )}
    </>
  );
}
