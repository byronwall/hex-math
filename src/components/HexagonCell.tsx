import { RegularPolygon, Text } from "react-konva";

import { type HexagonGame } from "./App";

type Props = {
  hexagon: HexagonGame["hexagons"][0];
  onHexClick: (number: number) => void;
  hexSize: number;
};

export function HexagonCell({ hexagon, onHexClick, hexSize }: Props) {
  const { col, row, value, index, isActive } = hexagon;

  const hexWidth = (Math.sqrt(3) / 2) * hexSize;

  const x_offset = row % 2 === 0 ? hexWidth * 2 : hexWidth;
  const x = col * hexWidth * 2 + x_offset;

  const y = row * (hexSize * 1.5) + hexSize;

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
    offsetX: hexWidth / 2,
    offsetY: hexWidth / 3,
    onClick: () => onHexClick(index),
  };

  return (
    <>
      <RegularPolygon {...hexProps} />
      <Text {...textProps} />
    </>
  );
}
