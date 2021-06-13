import React, { useCallback, useEffect, useState, useRef } from "react";
import produce from 'immer'; 

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
]

function Gameoflife() {

  // Aufbau Grid: erst die Reihen, dann die
  const [grid, setGrid] = useState (()  => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0 )) 
    }
    return rows;
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
          for (let k = 0; k < numCols; k++ ){
            let neighbors = 0; 
            //Zeigt wieviele Nachbaren eine Zelle hat
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y; 
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols){
                neighbors += g[newI][newK]
              }
            })
              //Regeln
            if (neighbors < 2 || neighbors > 3 )  {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3){
              gridCopy[i][k] = 1;
            }
          }
        }
    });
  });


  const newGrid = produce;
  

  setTimeout(runSimulation, 30);
 }, [])

  return (
    <>
      <button
        onClick ={() => {
          setRunning(!running); //wenn man clickt wird der Burron zum gegenteil von 'running'
            if (!running) {
              runningRef.current = true;
            runSimulation();
          }   
        }}
      >{running ? 'stop' : 'start' }</button>
        <div style= {{
          display: 'grid',
          gridTemplateColumns:`repeat(${numCols}, 20px )`
           }} >
          {grid.map((rows, i) => 
            rows.map((col, k) => (
              <div
                key = {`${i}-${k}`}
                onClick= { () => {
                    const newGrid = produce ( grid, gridCopy => {
                      gridCopy[i][k] = grid [i][k] ? 0 : 1; //Zelle tot -> Lebendig; Zelle Lebendig -> Tot
                    })
                    setGrid(newGrid);
                }}

                style= {{
                  width:20, height: 20, 
                  backgroundColor: grid[i][k] ? 'black' :  "white",
                  border : "solid 1px #bcbcbc"
                }}
              />
            ))
          )}
      </div>
    </>
  );
};

export default Gameoflife;