// this reducer will handle everything with the bird
import initialState from './initialState'


export default function reducer_bird(state = initialState.bird, action) {
    switch (action.type) {
        case 'bird/falling': {
            return {
                ...state,
                status: 'falling',
                speed_y: state.speed_y + state.gravitation,
                height: state.height + state.speed_y,
            }

        }
        case 'bird/reset': {
            return {
                ...initialState.bird
            }

        }
        case 'bird/fly_up': {
            return {
                ...state,
                status: 'fly_up',
                speed_y: state.fly_up_speed
            }
        }

        default:
            return state;
    }
}
