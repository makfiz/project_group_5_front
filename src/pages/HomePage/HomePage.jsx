import portraitDesk from 'assets/images/homePage/portrait-desk.png';
import portraitDesk2x from 'assets/images/homePage/portrait-desk-2x.png';

import {
  Title,
  TitleWrapper,
  PageWrapper,
  Box,
  DesktopImage,
} from './HomePage.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Box>
        <TitleWrapper>
          <Title>Take good care of your small pets</Title>
        </TitleWrapper>

        <DesktopImage
          src={portraitDesk}
          srcSet={`${portraitDesk2x} 2x`}
          alt="Portrait of woman enjoys company of small dog"
        />
      </Box>
    </PageWrapper>
  );
};

export default Home;
