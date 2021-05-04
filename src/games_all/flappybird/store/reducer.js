// this is the main reducer
import initialState from "./initialState";


function check_pipe_out(piping) {

}

function add_new_pipe(piping) {
    let random_height =  Math.floor(Math.random() * (window.innerHeight-(2*(piping.height_space+65))))+piping.height_space+65;
    console.log(window.innerHeight, random_height)
    return [piping.heights.concat(random_height), piping.x_offset.concat(window.innerWidth)]
}

function scroll_pipes(x_offset_array, offset) {
    let moved_pipes = []
    for (const pipe_x of x_offset_array){
        // console.log(pipe_x)
        moved_pipes.push(pipe_x+offset)
    }
    // console.log(moved_pipes)
    return moved_pipes
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        // ---------------------------- BIRD ----------------------------
        case 'bird/falling': {
            return {
                ...state,
                bird: {
                    ...state.bird,
                    status: 'falling',
                    speed_y: state.bird.speed_y + state.bird.gravitation,
                    height: state.bird.height + state.bird.speed_y,
                },
            }
        }
        case 'bird/reset': {
            return {
                ...state,
                bird: {
                    ...initialState.bird
                }
            }
        }
        case 'bird/fly_up': {
            return {
                ...state,
                bird: {
                    ...state.bird,
                    status: 'fly_up',
                    speed_y: state.bird.fly_up_speed
                }
            }
        }
        // ---------------------------- GAME ----------------------------
        case 'game/new_game': {
            console.log("Starting a new game: flappy-bird")
            return {
                ...state,
                game: {
                    ...state.game,
                    status: 'playing',
                    interval_id: action.payload
                }
            }
        }
        case 'game/game_over': {
            console.log("You lost the game: flappy-bird")
            clearInterval(state.game.interval_id)
            return {
                ...state,
                game: {
                    ...state.game,
                    // status: 'game_over'
                    status: 'menu',
                    interval_id: null,
                }
            }

        }
        // ---------------------------- PIPING ----------------------------
        case 'piping/scroll': {
            // console.log(state.x_offset, state.y_offset)
            return {
                ...state,
                piping: {
                    ...state.piping,
                    x_offset: scroll_pipes(state.piping.x_offset, state.piping.scroll_speed),
                }
            }
        }
        case 'piping/reset': {
            return {
                ...state,
                piping: {
                    ...initialState.piping
                }
            }
        }
        case 'piping/add_new': {
            const [heights_new, x_offset_new] = add_new_pipe(state.piping);
            return {
                ...state,
                piping: {
                    ...state.piping,
                    heights: heights_new,
                    x_offset: x_offset_new,
                }
            }
        }
        case 'piping/remove_pipe': {
            return {
                ...state,
                piping: {
                    ...initialState.piping,
                }
            }
        }

        // ---------------------------- DEFAULT ----------------------------
        default:
            return state;
    }
}



export default rootReducer
