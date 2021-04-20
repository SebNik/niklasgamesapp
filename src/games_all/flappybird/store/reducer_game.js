// this reducer handles all the action from the game
import initialState from './initialState'

export default function reducer_game(state = initialState.game, action) {
    switch (action.type) {
        case 'game/new_game': {
            console.log("Starting a new game: flappy-bird")
            return {
                ...state,
                status: 'playing'
            }

        }

        default:
            return state;
    }
}
