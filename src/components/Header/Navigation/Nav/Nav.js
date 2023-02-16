import { Link } from './Nav.styled';

export const Navigation = ({ onClick }) => {
  return (
    <>
      <Link to="/news" onClick={onClick}>
        News
      </Link>
      <Link to="/notices" onClick={onClick}>
        Find pet
      </Link>
      <Link to="/friends" onClick={onClick}>
        Our friends
      </Link>
    </>
  );
};
