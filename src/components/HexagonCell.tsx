import { RegularPolygon, Text } from "react-konva";

import { type HexagonGame } from "./App";

type Props = {
  hexagon: HexagonGame["hexagons"][0];
  onHexClick: (number: number) => void;
  hexSize: number;
};

export function HexagonCell({ hexagon, onHexClick, hexSize }: Props) {
  const { col, row, value, index, isActive } = hexagon;

  const x_offset = row % 2 === 0 ? hexSize / 2 : hexSize;
  const y = row * (hexSize * 1.5) + hexSize;
  const x = col * hexSize * 2 + x_offset;

  const hexProps = {
    x: x,
    y: y,
    sides: 6,
    radius: hexSize,
    fill: isActive ? "red" : "white",
    stroke: "black",
    strokeWidth: 1,
    onClick: () => onHexClick(index),
  };

  const textProps = {
    x: hexProps.x,
    y: hexProps.y,
    text: String(value),
    fontSize: 36,
    fontFamily: "Arial",
    fill: "black",
    width: hexSize,
    align: "center",
    verticalAlign: "middle",
    offsetX: hexSize,
    offsetY: hexSize / 2,
  };

  return (
    <>
      <RegularPolygon {...hexProps} />
      <Text {...textProps} />
    </>
  );
}
