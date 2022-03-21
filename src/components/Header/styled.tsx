import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const Title = styled.div`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled(Title)`
  margin: 0 30px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
