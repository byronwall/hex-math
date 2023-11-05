import { Stage, Layer } from "react-konva";

import { type HexagonGame } from "./App";
import { HexagonCell } from "./HexagonCell";

type Props = {
  hexagonGame: HexagonGame;
  onHexClick: (index: number) => void;
};

const HexGrid = ({ hexagonGame, onHexClick }: Props) => {
  const { hexagons } = hexagonGame;

  return (
    <Stage width={600} height={600}>
      <Layer>
        {hexagons.map((hexagon) => (
          <HexagonCell
            key={hexagon.index}
            hexagon={hexagon}
            hexSize={50}
            onHexClick={onHexClick}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default HexGrid;
