import Button from './NextBtn.styled';

const NextBtn = ({
  onClick,
  type = 'button',
  text = 'Next',
  disabled = false,
}) => {
  const clickHandler = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return (
    <Button type={type} onClick={clickHandler} disabled={disabled}>
      {text}
    </Button>
  );
};

export default NextBtn;
