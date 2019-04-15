import React from "react";
import { CHART_HEIGHT, CHART_WIDTH } from "../../constants";
import { LineWrapper } from "./styles";

export default function XYLine() {
  return (
    <LineWrapper>
      <line x1="0" y1={CHART_HEIGHT} x2={CHART_WIDTH} y2={CHART_HEIGHT} />
      <line x1="0" y1="0" x2="0" y2={CHART_HEIGHT} />
    </LineWrapper>
  );
}
