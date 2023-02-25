import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { closeModal } from '../../redux/form/formSlice';
import { cleanNotice } from '../../redux/notices/operations';

import { renameNoticesCategory } from 'utils/renameNoticesCategory';
import { convertLocationStringToCityName } from 'utils/convertLocationStringToCityName';

import { ReactComponent as HeartIcon } from '../../assets/icons/akarIconsHeart.svg';
import noPhoto from '../../assets/default-img/default.jpg';

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
} from './LernMoreModal.styled';

export function LernMoreModal() {
  const dispatch = useDispatch();

  const itemNotice = useSelector(state => state.notices.notice);
  const openModal = useSelector(state => state.form.isModalOpen);

  const onHandleClick = () => {
    dispatch(cleanNotice());
    dispatch(closeModal());
  };

  const handleClick = () => {
    console.log('click');
  };

  if (itemNotice.length === 0) {
    return;
  }

  const {
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
    contacts = { email: 'unknown', phone: 'unknown' },
  } = itemNotice.notice;

  const place = convertLocationStringToCityName(location);

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
                        <ListItem>{contacts.email}</ListItem>
                        <ListItem>{contacts.phone}</ListItem>
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
                />
                <Button style={StyledButton} type="button">
                  <span>Add to</span>
                  <HeartIcon />
                </Button>
              </ButtonWraper>
            </Container>
          </Wraper>
        </Modal>
      )}
    </>
  );
}
