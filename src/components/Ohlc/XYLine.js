import React from "react";
import { LineWrapper } from "./styles";

export default function XYLine() {
  return (
    <LineWrapper>
      <line x1="0" y1="400" x2="800" y2="400" />
      <line x1="0" y1="0" x2="0" y2="400" />
    </LineWrapper>
  );
}
