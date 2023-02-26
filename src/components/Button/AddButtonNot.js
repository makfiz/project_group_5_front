const AddButtonNot = ({
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

export default AddButtonNot;
