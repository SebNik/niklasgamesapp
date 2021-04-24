// this reducer handles all the action for the pipes
import initialState from './initialState'

export default function reducer_game(state = initialState.piping, action) {
    switch (action.type) {
        case 'piping/scroll': {

            return {
                ...state,
                x_offset: state.x_offset + state.scroll_speed,
            }

        }
        default:
            return state;
    }
}
