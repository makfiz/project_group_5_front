
import { ContainerStyled } from "./Container.styled"

export function Container({children}) {
    return (
        <ContainerStyled>{children}</ContainerStyled>
    )
}