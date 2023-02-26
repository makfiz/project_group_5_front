import styled from 'styled-components';

const ToggleContainer = styled.button`
  width: 40px;
  height: 20px;
  background-color: ${props => props.theme.colors.userAddPetBtnBg};
  border-radius: 10px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const ToggleSwitch = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.userAddPetBtnBgHover};
  transition: transform 0.2s;
  transform: translateX(${props => props.theme.isDark ? '20px' : '0'});
`;


const ThemeToggle = ({ theme, toggleTheme }) => {
  // console.log("theme:", theme)
  // console.log("toggleTheme:", toggleTheme)
  return (
    <ToggleContainer onClick={toggleTheme}>
      <ToggleSwitch />
    </ToggleContainer>
    // <button onClick={toggleTheme}>Toggle theme</button>
  );
}

export default ThemeToggle;