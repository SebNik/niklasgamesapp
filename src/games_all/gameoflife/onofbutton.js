import React from 'react';
import produce from 'immer';

export default function OnOf(props) {
return (
    <div
    className="button"
        onClick ={() => {
          props.setRunning(!props.running); //wenn man clickt wird der Button zum gegenteil von 'running'
            if (!props.running) {
              props.runningRef.current = true;
            props.runSimulation();
          }   
        }}
        >
            {props.running ? 'Stop' : 'Start' }
    </div>
   )     
}