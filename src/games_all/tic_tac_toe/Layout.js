import React from 'react';
import Box from './Box'

function Layout({boxes, onClick}) {
    return (
        <div className="layout-tictactoe">
            {boxes.map((box, i) => (
                <Box key={i} value={box} onClick={() => onClick(i)}/>
            ))}
        </div>
    );
}

// const style = {
//     border: '4px solid lightblue',
//     borderRadius: '10px',
//     width: '20%',
//     height: cal(20% * 100vw),
//     margin: '0 auto',
//     display: 'grid',
//     gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
// };

export default Layout;
