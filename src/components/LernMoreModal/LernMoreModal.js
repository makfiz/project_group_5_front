import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

import { closeModal } from '../../redux/form/formSlice';
import { cleanNotice } from '../../redux/notices/operations';

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
  HeartIcon,
  LeftPartWraper,
  RightPartWraper,
  List,
  ListItem,
  ListItemTitle,
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
  } = itemNotice.notice;

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
                  <FavoriteWraper>
                    <FavotiteType>{category}</FavotiteType>
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
                        <ListItemTitle>Lovation:</ListItemTitle>
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
                        <ListItem>{location}</ListItem>
                        <ListItem>{sex}</ListItem>
                        <ListItem>mail</ListItem>
                        <ListItem>phone</ListItem>
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
                <Button style={StyledButton}>
                  Add to
                  <HeartIcon size={16} />
                </Button>

                <Button children="Contact" style={StyledButton} />
              </ButtonWraper>
            </Container>
          </Wraper>
        </Modal>
      )}
    </>
  );
}
