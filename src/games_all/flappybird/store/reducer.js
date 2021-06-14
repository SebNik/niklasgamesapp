// this is the main reducer
import initialState from "./initialState"
import uniqid from 'uniqid'

function add_new_pipe(piping, game) {
    // const rand = min + Math.random() * (max - min);
    let random_height = Math.floor(Math.random() * ((game.game_height - piping.height_space - 50) - piping.height_space)) + piping.height_space;
    console.log(game.game_height, random_height, game.game_width)
    return [piping.heights.concat(random_height), piping.x_offset.concat(game.game_width), piping.pipes_id.concat(uniqid())]
}

function scroll_pipes(x_offset_array, offset) {
    let moved_pipes = []
    for (const pipe_x of x_offset_array) {
        // console.log(pipe_x)
        moved_pipes.push(pipe_x + offset)
    }
    // console.log(moved_pipes)
    return moved_pipes
}

function bird_hit_pipe(state) {
    for (let i = 0; i < state.piping.x_offset.length; i++) {
        if (((state.bird.height + state.bird.startHeight) < (state.piping.heights[i] + 65)) && (state.piping.x_offset[i] < 960) && (960 < state.piping.x_offset[i] + 50)) {
            console.log('Hit the upper pipe')
            return true
        } else if (((state.bird.height + state.bird.startHeight) > (state.piping.heights[i] + 65 + state.piping.height_space)) && (state.piping.x_offset[i] < 960) && (960 < state.piping.x_offset[i] + 50)) {
            console.log('Hit the lower pipe')
            return true
        }
    }
    return false
}


function rootReducer(state = initialState, action) {
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

            // if (state.game.game_height == null) {
            state_current.game.top_offset = parseInt(getComputedStyle(document.getElementById("site-navigation")).getPropertyValue("height").replace("px", ""))
            state_current.game.game_height = parseInt(getComputedStyle(document.getElementById("game-screen-flappy-bird")).getPropertyValue("height").replace("px", ""))
            state_current.game.game_width = parseInt(getComputedStyle(document.getElementById("game-screen-flappy-bird")).getPropertyValue("width").replace("px", ""))
            state_current.game.floor_offset = parseInt(getComputedStyle(document.getElementById("main-flappy-bird")).getPropertyValue("grid-template-rows").split(" ")[1].replace("px", ""))
            // }

            // checking if a pipe passed the bird an adding it to the score
            for (var i = 0; i < state.piping.pipes_id.length; i++) {
                if ((state.piping.x_offset[i] < (state_current.game.game_width/2)) && (!state.piping.pipes_passed_id.includes(state.piping.pipes_id[i]))) {
                    state_current.piping.pipes_passed_id.push(state.piping.pipes_id[i])
                    state_current.game.score += 1
                }
            } 
            
            if ((state.game.game_height + state.game.top_offset < (state.bird.height + state.bird.startHeight) || state.game.top_offset > (state.bird.height + state.bird.startHeight)) || (bird_hit_pipe(state))) {
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
                const id = state_current.pipes_id.shift()
                state_current.pipes_passed_id = state_current.pipes_passed_id.filter(item => item !== id)
            }
            // checking if to add a new pipe because distance is reached
            if (state_current.x_offset[state_current.x_offset.length - 1] < window.innerWidth - state.piping.space_between_pipes) {
                const [heights_new, x_offset_new, id_pipes] = add_new_pipe(state_current, state.game)
                state_current.x_offset = x_offset_new
                state_current.heights = heights_new
                state_current.pipes_id = id_pipes
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
            const [heights_new, x_offset_new, id_pipes] = add_new_pipe(state.piping, state.game);
            return {
                ...state,
                piping: {
                    ...state.piping,
                    heights: heights_new,
                    x_offset: x_offset_new,
                    pipes_id: id_pipes,
                }
            }
        }
        // ---------------------------- DEFAULT ----------------------------
        default:
            return state;
    }
}


export default rootReducer
