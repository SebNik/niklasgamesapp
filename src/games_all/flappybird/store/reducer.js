// import initialState from './initialState'

const initialState = {
    game: {
        status: 'over',
    },
    bird: {
        status: 'normal',
            height: 188,
            startHeight: 188,
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'bird/falling': {
            // Can return just the new todos array - no extra object around it
            return [
                ...state,
                {
                    bird: {
                        status: 'falling',
                        height: state.bird.height - 20,
                        startHeight: 188,
                    }
                }
            ]
        }
        default:
            break;
    }
}
