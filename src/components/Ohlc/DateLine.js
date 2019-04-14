import React from "react";
import { LineWrapper } from "./styles";

export default function DateLine({ dates, unit }) {
  return (
    <LineWrapper width="0.2">
      {dates.map((date, i) => {
        const scale = (i + 1) * unit;
        return <line key={date} x1={scale} y1="0" x2={scale} y2="400" />;
      })}
    </LineWrapper>
  );
}
