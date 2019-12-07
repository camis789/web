import styled from 'styled-components';
import Bg from '../../assets/img/books.jpg';

export const Container = styled.div`
  background-image: url(${Bg});
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 150%;
  display: grid;
`;

export const Menu = styled.nav`
  width:100%;
  height: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #8B8878;
  `;

  export const Caixa = styled.div`
   margin-top: 5%;
    margin-left:21.3%;
    width:800px;
    height: 50%;
    background-color: #fff;
    border-radius: 15px;


    `;
 
export const BotaoMenuH = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color:#8B8878;
  color: #000;
  border: 1px #8B8878 solid;

`;

export const BotaoMenuC = styled.button`
  display: inline-block;
  width: 105px;
  height: 40px;
  background-color:#8B8878;
  color: #fff;
  border: 1px #8B8878 solid;

`;

export const Botao = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color:#8B8878;
  color: #fff;
  border: 1px #8B8878 solid;

`;
export const TextMenu = styled.p`
margin-left: 20%;
font-family: Segoe UI;
font-size: 14px;
color: #A9A9A9;
text-align: justify;
`;

export const TextItems = styled.p`
    margin-top: 5%;
    margin-bottom: 100%;
    padding-top:5%;
    font-size: 25px;
    font-weight: bold;
    color: #000;
    text-align: center;
`;

export const Textsenha = styled.p`
    margin-left: 20%;
    font-family: Segoe UI;
    font-size: 14px;
    color: #A9A9A9;
    text-align: justify;
`;

export const Text = styled.p`
    margin-left: 15px;
    font-weight: bold;
`;