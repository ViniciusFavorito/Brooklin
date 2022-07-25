import styled from "styled-components";

export const DivCard = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivImgProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgProduct = styled.img`
  width: auto;
  height: 200px;
`;

export const DivNamePriceProduct = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: min-content;
`;

export const DivNameProduct = styled.div`
  padding-left: 10px;
  display: flex;
  justify-content: left;
  align-items: left;
  font-size: 20px;
`;

export const DivPriceProduct = styled.div`
  background-color: black;
  width: 50%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: right;
  font-size: 15px;
  border-radius: 0.5rem;
  color: white;
  margin-left: 3px;
  padding: 0.5rem;
  margin-right: 1rem;
`;

export const DivDescription = styled.div`
  padding-left: 10px;
  padding-right: 60px;
  width: 100%;
  height: auto;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 0.5;
  position: relative;
  padding-bottom: 15px;
`;

export const ButtonBuy = styled.button`
  display: flex;
  width: 100%;
  height: auto;
  color: white;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  cursor: pointer;
  &:hover {
    background-color: #6495ed;
  }
`;

export const DivBuyIcon = styled.div`
  /* padding: 10px; */
  padding-top: 10px;
  padding-bottom: 10px;
  width: 2%;
  padding-left: 40px;
  cursor: pointer;
`;

export const DivBuyWrite = styled.div`
  /* padding: 10px; */
  font-size: 18px;
  line-height: 18px;
  width: 100%;
  justify-content: start;
  align-items: start;
  padding-right: 10px;
  cursor: pointer;
`;

export const ContentBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const DivSkeleton = styled.div`
  width: 300px;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 14px;
`;

export const DivFooter = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const DivFooterContent = styled.div`
  background-color: #eeeeee;
  display: flex;
  width: 100%;
  color: black;
  justify-content: center;
  height: 34px;
  font-size: 12px;
`;
