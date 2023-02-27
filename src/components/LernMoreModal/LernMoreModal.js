import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

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
import { addNoticeToFavorite, cleanNotice } from 'redux/notices/operations';
import { addToFavoriteInModal } from 'redux/notices/noticesSlice';
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
    title,
    comments,
    category,
    name,
    birth,
    breed,
    location,
    sex,
    price,
    photoURL,
    favoritesIn,
    email,
    phone,
  } = itemNotice[0];

  const place = convertLocationStringToCityName(location);
  const chechNotice = favoritesIn.includes(userId);

  useEffect(() => {
    if (chechNotice) {
      setHeartColor(true);
    }
    if (!isLoading) {
      setIsUpdating(false);
    }
  }, [chechNotice, heartColor, isLoading]);

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

    if (chechNotice || heartColor) {
      return showWarningNotification('Notice already in favorite', 2500);
    }

    if (!chechNotice && !heartColor) {
      const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;
      setIsUpdating(true);
      dispatch(addNoticeToFavorite({ path }));
      dispatch(addToFavoriteInModal({ noticeId: _id, userId }));
      setHeartColor(true);
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
                          {email}
                        </ListItemEmail>
                        <ListItemPhone onClick={phoneCall}>
                          {phone}
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
                />

                <Button style={StyledButton} type="button" onClick={onFavorite}>
                  <span>Add to</span>
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
