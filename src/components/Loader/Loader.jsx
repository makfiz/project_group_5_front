import { RotatingLines } from  'react-loader-spinner';
import { Spiner } from "./Loader.styled.jsx";

export function Loader() {
    return <Spiner>
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
      </Spiner>
}
