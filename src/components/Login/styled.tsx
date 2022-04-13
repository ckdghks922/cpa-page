import styled from 'styled-components';
import Naver from '../../assets/naver.png';
import KaKao from '../../assets/kakao.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: 150px;
`;

export const NaverButton = styled.button`
  width: 190px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
  background: transparent url(${Naver}) no-repeat 0 0;
  background-size: contain;
  border: none;
`;

export const KaKaoButton = styled.button`
  width: 190px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
  background: transparent url(${KaKao}) no-repeat 0 0;
  background-size: contain;
  border: none;
`;
