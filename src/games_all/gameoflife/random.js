import React from 'react';
import produce from 'immer';

export default function Random(props) {
return (
    <div
      
      className="button"
        onClick={()  => {
          const rows = [];
          for (let i = 0; i < props.numRows; i++) {
            rows.push(Array.from(Array(props.numCols), () => Math.random() > 0.5 ? 1 : 0 )) 
          }
          props.setGrid(rows);  
      }}>
      Random
      </div>
   )     
}