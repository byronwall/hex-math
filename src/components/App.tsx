import { useState } from "react";
import { produce } from "immer";
import { Button } from "@nextui-org/react";

import { createHexagonGame } from "~/game/createHexagonGame";

import HexGrid from "./HexGrid";

export type HexagonData = {
  index: number;
  row: number;
  col: number;
  value: number;
  isActive: boolean;
};

export type HexagonGame = {
  hexagons: HexagonData[];

  gridWidth: number;
  gridHeight: number;

  targetSum: number;
};

const App = () => {
  // random number up to 20

  const [hexagonGame, setHexagonGame] = useState<HexagonGame>(
    createHexagonGame(5, 5)
  );

  const handleHexClick = (index: number) => {
    const newGame = produce(hexagonGame, (draft) => {
      draft.hexagons[index].isActive = !draft.hexagons[index].isActive;

      const newSum = draft.hexagons.reduce((acc, hexagon) => {
        if (hexagon.isActive) {
          return acc + hexagon.value;
        }
        return acc;
      }, 0);

      if (newSum == targetSum) {
        // assign new random number to all active hexagons
        // make all hexagons in active state inactive

        draft.hexagons.forEach((hexagon) => {
          if (hexagon.isActive) {
            hexagon.value = Math.floor(Math.random() * 20) + 1;
            hexagon.isActive = false;
          }
        });

        draft.targetSum = Math.floor(Math.random() * 20) + 1;
      }
    });

    setHexagonGame(newGame);
  };

  const activeHexagons = hexagonGame.hexagons.filter(
    (hexagon) => hexagon.isActive
  );

  const total = activeHexagons.reduce((acc, hexagon) => {
    return acc + hexagon.value;
  }, 0);

  const targetSum = hexagonGame.targetSum;

  return (
    <div className="flex flex-col items-center">
      <h2>Target: {targetSum}</h2>
      <h2>
        Equation: {activeHexagons.map((hexagon) => hexagon.value).join(" + ")} ={" "}
        {total}
      </h2>
      <Button
        onClick={() => {
          setHexagonGame(createHexagonGame(5, 5));
        }}
      >
        reset
      </Button>

      <HexGrid hexagonGame={hexagonGame} onHexClick={handleHexClick} />
    </div>
  );
};

export default App;
