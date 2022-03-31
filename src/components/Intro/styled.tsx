import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  & img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`;
