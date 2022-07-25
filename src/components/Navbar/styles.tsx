import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 5.5rem;
  background-color: #0f52ba;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const DivNavbarTitle = styled.div`
  display: flex;
`;

export const DivCarrinhoCompra = styled.div`
  display: flex;
`;

export const NavbarTitle = styled.h1`
  font-size: 40px;
  color: white;
  align-items: center;
  display: flex;
  margin-left: 65px;
`;

export const NavbarTitleSub = styled.h1`
  font-size: 20px;
  color: white;
  align-items: center;
  margin-left: 10px;
  display: flex;
  font-weight: 100;
  line-height: 19px;
`;

export const CarrinhoButton = styled.button`
  background-color: white;
  width: 5.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #a2a2a2;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarrinhoImg = styled.img`
  width: 18px;
  display: flex;
  margin-left: 13px;
`;

export const CarrinhoValor = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 13px;
`;
