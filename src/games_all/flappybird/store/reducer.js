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
            return {
                ...state,
                bird: {
                    status: 'falling',
                        height: state.bird.height - 20,
                        startHeight: 188,
                }
            }

        }
        default:
            return state;
    }
}
