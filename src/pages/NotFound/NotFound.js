import {
  ErrorPageText,
  NoticeText,
  Layout,
  DirectionText,
  Link,
  Container,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <ErrorPageText>404</ErrorPageText>
      <NoticeText>Opps, we have an error</NoticeText>
      <Layout>
        <DirectionText>go back to</DirectionText>
        <Link to="/news"> Home page</Link>
      </Layout>
    </Container>
  );
};

export default NotFound;
