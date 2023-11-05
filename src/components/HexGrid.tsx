import { Stage, Layer } from "react-konva";

import { type HexagonGame } from "./App";
import { HexagonCell } from "./HexagonCell";

type Props = {
  hexagonGame: HexagonGame;
  onHexClick: (index: number) => void;
};

const HexGrid = ({ hexagonGame, onHexClick }: Props) => {
  const hexSize = 70;

  const { hexagons } = hexagonGame;

  return (
    <Stage width={800} height={600}>
      <Layer>
        {hexagons.map((hexagon) => (
          <HexagonCell
            key={hexagon.index}
            hexagon={hexagon}
            hexSize={hexSize}
            onHexClick={onHexClick}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default HexGrid;
