import { Title, TitleWrapper, PageWrapper, Container } from './HomePage.styled';

import { PetsList } from '../../components/UserPage/PetsList/PetsList';

const Home = () => {
  return (
    <>
      <PetsList />
    </>
    // <PageWrapper>
    //   <Container>
    //     <TitleWrapper>
    //       <Title>Take good care of your small pets</Title>
    //     </TitleWrapper>
    //   </Container>

    // </PageWrapper>
  );
};

export default Home;
