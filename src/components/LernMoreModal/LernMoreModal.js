import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import { closeModal } from '../../redux/form/formSlice';

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
} from './LernMoreModal.styled';
import { Button } from 'components/Button/Button';

export function LernMoreModal() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.notices.ads);
  const openModal = useSelector(state => state.form.isModalOpen);

  const onHandleClick = () => {
    dispatch(closeModal());
  };

  const handleClick = () => {
    console.log('click');
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
                  <FavoriteWraper>
                    <FavotiteType>text</FavotiteType>
                  </FavoriteWraper>
                </ImageWraper>

                <Layout>
                  <Title>text</Title>
                  <MoreInfoWraper></MoreInfoWraper>
                </Layout>
              </ContentWraper>

              <CommentsText>
                <CommentsTitle>Comments:</CommentsTitle> Lorem ipsum dolor sit
                amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                ipsum dolor sit amet, consectetur Lorem
              </CommentsText>

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
