import { FaPaw } from "react-icons/fa";
import {ToggleContainer, ToggleBtn, ToggleSwitch } from './ThemeToggle.styled'


const ThemeToggle = ({ theme, toggleTheme }) => {
  // console.log("theme:", theme)
  // console.log("toggleTheme:", toggleTheme)

  const displayMessadge = () => {
    console.log('Change theme')

  }
  return (
    <ToggleContainer onMouseEnter={displayMessadge}>
      <FaPaw size='20' fill='white' stroke='black' strokeWidth={7}/>
      <ToggleBtn onClick={toggleTheme}>
        <ToggleSwitch />
      </ToggleBtn>
      <FaPaw size='20' fill='black' stroke='white' strokeWidth={10}/>
    </ToggleContainer>
    // <button onClick={toggleTheme}>Toggle theme</button>
  );
}

export default ThemeToggle;