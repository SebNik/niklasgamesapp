// this reducer handles all the action for the pipes
import initialState from './initialState'

export default function reducer_game(state = initialState.piping, action) {
    switch (action.type) {
        // case 'game/game_over': {
        //     console.log("You lost the game: flappy-bird")
        //     clearInterval(state.interval_id)
        //     return {
        //         ...state,
        //         // status: 'game_over'
        //         status: 'menu',
        //         interval_id: null,
        //     }
        //
        // }
        default:
            return state;
    }
}
