import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 50px;
  background-color: beige;
`;

export const Title = styled.div`
  margin-right: 100px;
  font-size: 30px;
  cursor: pointer;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Menu = styled.li`
  padding: 5px 30px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    opacity: 0.3;
    border-radius: 5px;
  }
`;

export const Login = styled.button`
  width: 100px;
  height: 30px;
  margin-left: auto;
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

export const MenuIcon = styled.div`
  margin-left: auto;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
