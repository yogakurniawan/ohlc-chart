import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100%;
  overflow-y: auto;
`;

export const Menu = styled.div`
  border: 2px solid #edf8ef;
  background-color: ${props => props.active ? '#a9deb6' : '#d2f1da'};
  padding: 1rem;
  box-sizing: border-box;
  height: 62px;
  color: #a6b6b2;
  &:hover {
    cursor: pointer;
    background-color: #a9deb6;
  }
`;
