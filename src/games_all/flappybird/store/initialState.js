/* eslint-disable import/no-anonymous-default-export */
export default {
    game: {
        status: 'menu',
        interval: 10,
        interval_id: null,
        game_height: null,
        game_width: null,
        top_offset: null,
        floor_offset: null,
        score: 0,
    },
    bird: {
        gravitation: 0.25,
        fly_up_speed: -6,
        //gravitation: 0.00001,
        //fly_up_speed: 0.00001,
        status: 'normal',
        height: 0,
        startHeight: 188,
        speed_y: 0,
    },
    piping: {
        space_between_pipes: 800,
        height_space: 200,
        x_offset: [],
        heights: [],
        scroll_speed: -1.5,
        //scroll_speed: -0.1,
        pipes_id: [],
        pipes_passed_id: [],
    }
}
