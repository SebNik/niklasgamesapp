import React, { useCallback, useState, useRef } from "react";
import produce from 'immer';
import Grid from './gameoflife/grid';
import OnOf from './gameoflife/onofbutton';
import Clear from "./gameoflife/clear";
import Random from "./gameoflife/random";

// setting up the basic grid
const numRows = 50;
const numCols = 50;

// GOOD TO KNOW
// - i und k sind die beiden Koordianten


// beschreibt die Koordinaten von den Nachbarn z.b. 1, 0 ist der östliche Nachbar
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0 )) 
  }
  return rows;
};

function Gameoflife() {
  const [grid, setGrid] = useState (()  => {
    return generateEmptyGrid();
  });

  // console.log(grid);

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current= running

  const runSimulation = useCallback(() => {
    if(!runningRef.current) {
      return;
    }
    // Simulation ab hier

    
    //geht durch jede Zelle
    setGrid((g) => {
    return produce(g, gridCopy => {
      for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            //Zeigt wieviele Nachbaren eine Zelle hat
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK]
              }
            })
              //Regeln
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    const newGrid = produce;

  setTimeout(runSimulation, 50);
  }, [])

  return (
    <div>
      <div className="menu">
        <OnOf 
        setRunning={setRunning}
        running={running}
        runningRef = {runningRef}
        runSimulation = {runSimulation}>
        </OnOf>       

        <Clear
        setGrid = {setGrid}
        generateEmptyGrid = {generateEmptyGrid}> 
        </Clear>

        <Random
        numRows={numRows}
        numCols={numCols}
        setGrid={setGrid}>
        </Random>
        
        
      </div>
      
      <Grid numCols={numCols} grid={grid} setGrid={setGrid}></Grid>

    </div>
  );
};

export default Gameoflife;