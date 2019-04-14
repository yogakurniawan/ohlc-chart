import styled, { css } from "styled-components";

export const Middle = styled.div`
  padding: 0;
  vertical-align: middle;
  display: table-cell !important;
  margin: 0;
  text-align: center;
  > svg {
    ${({ color }) => css`
      color: ${color || "#000"};
    `}
  }
`;

export const Outer = styled.div`
  width: 100%;
  padding: 0;
  display: table !important;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  ${({ position }) => css`
    position: ${position || "absolute"};
  `}
`;
