import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { closeModal } from '../../redux/form/formSlice';
import { cleanNotice } from '../../redux/notices/operations';
import { endPoints } from 'constants/EndPoints';

import { renameNoticesCategory } from 'utils/renameNoticesCategory';
import { convertLocationStringToCityName } from 'utils/convertLocationStringToCityName';

// import { ReactComponent as HeartIcon } from '../../assets/icons/akarIconsHeart.svg';
import noPhoto from '../../assets/default-img/default.jpg';
import { selectUser } from 'redux/auth/selectors';
import {
  addNoticeToFavorite,
  removeNoticeFromFavorite,
  deleteOnFavoritePage,
} from '../../redux/notices/operations';

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
} from './LernMoreModal.styled';

export function LernMoreModal() {
  const [heartColor, setHeartColor] = useState(false);

  const dispatch = useDispatch();
  const itemNotice = useSelector(state => state.notices.notice);
  const openModal = useSelector(state => state.form.isModalOpen);
  const notices = useSelector(state => state.notices.ads);

  const { id: userId } = useSelector(selectUser);

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
  const [isFav, setIsFav] = useState(() => favoritesIn.includes(userId));

  const notice = notices.filter(notice => notice.favoritesIn.includes(userId));
  const chechNotice = notice.find(item => item._id === _id);

  useEffect(() => {
    if (chechNotice) {
      setHeartColor(true);
    }
  }, []);
  // console.log('notice', notice);
  // console.log('id', _id);

  const onHandleClick = () => {
    dispatch(cleanNotice());
    dispatch(closeModal());
  };

  const phoneCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const onFavorite = () => {
    setHeartColor(true);
    const path = `${endPoints.noticesBase}${_id}${endPoints.noticesFavorite}`;

    if (chechNotice) {
      return Notiflix.Notify.failure('notice already in favorite', {
        timeout: 2500,
      });
    } else {
      dispatch(addNoticeToFavorite({ path }));
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
                        <ListItem>{email}</ListItem>
                        <ListItem>{phone}</ListItem>
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

                <Button
                  isFav={isFav}
                  style={StyledButton}
                  type="button"
                  onClick={onFavorite}
                >
                  <span>Add to</span>
                  {heartColor ? (
                    <IconHeartBg size={16} />
                  ) : (
                    <IconHeart size={16} />
                  )}
                </Button>
              </ButtonWraper>
            </Container>
          </Wraper>
        </Modal>
      )}
    </>
  );
}
