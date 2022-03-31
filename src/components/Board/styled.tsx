import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 200px;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h3``;

export const TableHead = styled.tr`
  background-color: aliceblue;
`;

export const TableItem = styled.tr`
  & td {
    text-align: center;
  }
`;

export const WriteButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  margin-left: auto;
  background-color: #444;
  color: #fff;
  border-radius: 5px;

  &:hover {
    background-color: #222;
  }
`;

export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;
