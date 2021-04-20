// this reducer will handle everything with the bird
import initialState from './initialState'

export default function reducer_bird(state = initialState.bird, action) {
    switch (action.type) {
        case 'bird/falling': {
            return {
                ...state,
                status: 'falling',
                speed_y: state.speed_y + 3,
                height: state.height + state.speed_y,
            }

        }
        case 'bird/fly_up': {
            return {
                ...state,
                status: 'fly_up',
                height: state.height - 20,
                speed_y: 0
            }
        }

        default:
            return state;
    }
}