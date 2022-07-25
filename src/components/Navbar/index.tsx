import {
  DivNavbarTitle,
  NavbarContainer,
  NavbarTitle,
  NavbarTitleSub,
} from "./styles";

export function Navbar() {
  return (
    <NavbarContainer>
      <DivNavbarTitle>
        <NavbarTitle>BBR</NavbarTitle>
        <NavbarTitleSub>The Broklyn Brothers</NavbarTitleSub>
      </DivNavbarTitle>
    </NavbarContainer>
  );
}
