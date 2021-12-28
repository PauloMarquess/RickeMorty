import styled from "styled-components";
import Img from "./assets/rick.png";
import Foto from "./assets/banner.png";

export const Banner = styled.img`
  background-image: url(${Foto});
  width: 100%;
  height: 280px;
  background-repeat: round;

  @media (max-width: 769px) {
    background-image: url(${Img});
    background-size: contain;
    width: 100%;
  }
`;

export const Imagens = styled.img`
  border-bottom-right-radius: 70px;
  width: 200px;
  border: solid 1px;
  margin: 0 25px;
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 769px) {
    padding: 0;
    margin-left: 40px;
  }
`;
export const Busca = styled.input`
  width: 300px;
  text-align: center;
  font-size: 1rem;
  border-bottom-right-radius: 70px;
  margin-top: 30px;
  outline: 2px solid gray;
  border: none;
  @media (max-width: 769px) {
    width: 90%;
    height: 30px;
  }
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: "Mulish", sans-serif;
`;
