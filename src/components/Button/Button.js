export const Button = ({
  type = 'button',
  children,
  style: StyledButton,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
