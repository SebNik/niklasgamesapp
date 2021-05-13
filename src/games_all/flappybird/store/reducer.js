// this is the main reducer
import initialState from "./initialState"

function add_new_pipe(piping) {
    let random_height =  Math.floor(Math.random() * (window.innerHeight-(2*(piping.height_space+65+70))))+piping.height_space+65+70;
    // console.log(window.innerHeight, random_height)
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

function bird_hit_pipe(state) {
    for (var i = 0; i < state.piping.x_offset.length; i++) {
        if (((state.bird.height+state.bird.startHeight) < (state.piping.heights[i]+65)) && (state.piping.x_offset[i] < 960) && (960 < state.piping.x_offset[i]+50)) {
            console.log('Hit the upper pipe')
            return true
        }
        else if (((state.bird.height+state.bird.startHeight) > (state.piping.heights[i]+65+state.piping.height_space)) && (state.piping.x_offset[i] < 960) && (960 < state.piping.x_offset[i]+50)) {
            console.log('Hit the lower pipe')
            return true
        }
    }
    return false
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
        case 'game/update': {
            // this will update the game and check if it is still playing
            // copy of state
            let state_current = state

            if ((window.innerHeight < (state.bird.height + state.bird.startHeight) || 65 > (state.bird.height + state.bird.startHeight)) || (bird_hit_pipe(state))) {
                console.log("You lost the game: flappy-bird")
                clearInterval(state.game.interval_id)
                state_current.game.status = 'menu'
                state_current.game.interval_id = null
                state_current.bird = initialState.bird
                state_current.piping = initialState.piping
            }

            return {
                ...state_current
            }
        }
        // ---------------------------- PIPING ----------------------------
        case 'piping/update': {
            // out ? --> new ? --> scroll !
            // make the new data copy of state
            let state_current = state.piping
            // checking the first and therefore oldest pipe if out of screen
            if (state.piping.x_offset[0] < 0) {
                // removing this pipe
                // console.log('Removing a Pipe 0')
                state_current.x_offset.shift()
                state_current.heights.shift()
            }
            // checking if to add a new pipe because distance is reached
            if (state_current.x_offset[state_current.x_offset.length-1] < window.innerWidth - state.piping.space_between_pipes ) {
                const [heights_new, x_offset_new] = add_new_pipe(state_current)
                state_current.x_offset = x_offset_new
                state_current.heights = heights_new
            }
            // making the scroll for all the pipes
            // adding the scroll to current
            state_current.x_offset = scroll_pipes(state_current.x_offset, state.piping.scroll_speed)
            return {
                ...state,
                piping: {
                    ...state_current,
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
        // ---------------------------- DEFAULT ----------------------------
        default:
            return state;
    }
}



export default rootReducer
