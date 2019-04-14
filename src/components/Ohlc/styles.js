import styled from "styled-components";

export const LineWrapper = styled.g`
  stroke: black;
  stroke-width: ${props => props.width || 1};
`;

export const Container = styled.div`
  padding: 15vh 1rem;
  width: 100%;
`;
