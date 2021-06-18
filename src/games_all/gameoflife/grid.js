import React from 'react';
import produce from 'immer';

export default function Grid(props) {
    return(
        <div
        className="body"
        style= {{
          display: 'grid',
          gridTemplateColumns:`repeat(${props.numCols}, 20px )`
        }}
      >
        {props.grid.map((rows, i) => 
          rows.map((col, k) => (
            <div
              key = {`${i}-${k}`}
              onClick= { () => {
                const newGrid = produce ( props.grid, gridCopy => {
                  gridCopy[i][k] = props.grid[i][k] ? 0 : 1; // Zelle tot -> Lebendig; Zelle Lebendig -> Tot
                })
                props.setGrid(newGrid);
              }}
              style= {{
                width:20, 
                height: 20, 
                backgroundColor: props.grid[i][k] ? "#005CC8" :  "transparent",
                border : "solid 1px #bcbcbc"
              }}
              />
          ))
        )}
      </div>
    )
    
}
