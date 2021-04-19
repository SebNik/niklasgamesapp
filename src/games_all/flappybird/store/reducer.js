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
                    height: state.bird.height + 2,
                }
            }

        }
        case 'bird/flyup': {
            return {
                ...state,
                bird: {
                    status: 'flyup',
                    height: state.bird.height - 20,
                }
            }
        }
        default:
            return state;
    }
}
