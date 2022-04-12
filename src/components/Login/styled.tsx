import styled from 'styled-components';
import Naver from '../../assets/naver.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
  background: transparent url(${Naver}) no-repeat 0 0;
  background-size: contain;
  border: none;
`;
