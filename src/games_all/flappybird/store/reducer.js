import initialState from './initialState'

// const initialState = {
//     game: {
//         status: 'playing',
//         gravitation: 0.5,
//         interval: 0.2,
//     },
//     bird: {
//         status: 'normal',
//         height: 188,
//         startHeight: 188,
//         speed_y: 0,
//     }
// }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'bird/falling': {
            return {
                ...state,
                bird: {
                    status: 'falling',
                    speed_y: state.bird.speed_y + 3,
                    height: state.bird.height + state.bird.speed_y,
                }
            }

        }
        case 'bird/flyup': {
            return {
                ...state,
                bird: {
                    status: 'flyup',
                    height: state.bird.height - 20,
                    speed_y: 0
                },
            }
        }
        // TODO split the two action types in two diffrent files --> Bird and Game (https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-4-initialHooks/?from-embed=&file=/src/features/todos/todosSlice.js)
        case 'game/newgame': {
            return {
                ...state,
                status: 'playing',
            }

        }
        default:
            return state;
    }
}
