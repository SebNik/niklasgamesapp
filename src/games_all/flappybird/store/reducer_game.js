// this reducer handles all the action from the game
import initialState from './initialState'

export default function reducer_game(state = initialState.game, action) {
    switch (action.type) {
        case 'game/new_game': {
            console.log("Starting a new game: flappy-bird")
            return {
                ...state,
                status: 'playing',
                interval_id: action.payload
            }

        }
        case 'game/game_over': {
            console.log("You lost the game: flappy-bird")
            clearInterval(state.interval_id)
            return {
                ...state,
                // status: 'game_over'
                status: 'menu',
                interval_id: null,
            }

        }

        default:
            return state;
    }
}
