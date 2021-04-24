// this reducer handles all the action for the pipes
import initialState from './initialState'


function scroll_pipes(x_offset_array, offset) {
    let moved_pipes = []
    for (const pipe_x of x_offset_array){
        // console.log(pipe_x)
        moved_pipes.push(pipe_x+offset)
    }
    // console.log(moved_pipes)
    return moved_pipes
}

export default function reducer_game(state = initialState.piping, action) {
    switch (action.type) {
        case 'piping/scroll': {
            // console.log(state.x_offset, state.y_offset)
            return {
                ...state,
                x_offset: scroll_pipes(state.x_offset, state.scroll_speed),
            }

        }
        case 'piping/reset': {
            return {
                ...initialState.piping,
            }
        }
        case 'piping/add_new': {
            let random_height =  Math.floor(Math.random() * (window.innerHeight-(state.height_space*2)))+state.height_space;
            console.log(window.innerHeight, random_height)
            return {
                ...state,
                heights: state.heights.concat(random_height),
                x_offset: state.x_offset.concat(window.innerWidth),
            }
        }
        case 'piping/remove_pipe': {
            return {
                ...initialState.piping,
            }
        }
        default:
            return state;
    }
}
