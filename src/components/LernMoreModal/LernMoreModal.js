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
} from './LernMoreModal.styled';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';

export function LernMoreModal() {
  const dispatch = useDispatch();
  const openModal = useSelector(state => state.form.isModalOpen);

  const onhandleClick = () => {
    dispatch(closeModal());
  };

  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      {openModal && (
        <Modal onClick={onhandleClick} filter="true">
          <Wraper>
            <Container>
              <IconWraper>
                <Icon />
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
                <Button
                  children="Contact"
                  style={StyledButton}
                  // onClick={handleClick}
                />
                <Button children="Add to" style={StyledButton} />
              </ButtonWraper>
            </Container>
          </Wraper>
        </Modal>
      )}
    </>
  );
}
