import { Container } from 'components/Container/Container';

import { Title, TitleWrapper, PageWrapper } from './HomePage.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Container>
        <TitleWrapper>
          <Title>Take good care of your small pets</Title>
        </TitleWrapper>
      </Container>
    </PageWrapper>
  );
};

export default Home;
