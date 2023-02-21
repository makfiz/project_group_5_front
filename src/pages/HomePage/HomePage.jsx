import { Title, TitleWrapper, PageWrapper, Container } from './HomePage.styled';

import { PetsData } from '../../components/UserPage/PetsData/PetsData';

const Home = () => {
  return (
    <PageWrapper>
      {/* <Container>
        <TitleWrapper>
          <Title>Take good care of your small pets</Title>
        </TitleWrapper>
      </Container> */}
      <PetsData />
    </PageWrapper>
  );
};

export default Home;
