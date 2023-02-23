import { RotatingLines } from 'react-loader-spinner';
import { Spiner } from './Loader.styled.jsx';

export function Loader({ Width = 96 }) {
  return (
    <Spiner>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={Width}
        visible={true}
      />
    </Spiner>
  );
}
