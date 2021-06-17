import React from 'react';
import produce from 'immer';

export default function Clear(props) {
return (
    <div
    className="button"
        onClick={ ()  => {
          props.setGrid(props.generateEmptyGrid());
      }}>
        Clear
    </div>
   )     
}