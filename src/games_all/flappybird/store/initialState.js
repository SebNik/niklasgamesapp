export default {
    game: {
        status: 'menu',
        interval: 10,
        interval_id: null,
        game_height: null,
        game_width: null,
        top_offset: null,
        floor_offset: null,
    },
    bird: {
        gravitation: 0.4,
        fly_up_speed: -8,
        // gravitation: 0.00001,
        // fly_up_speed: 0.00001,
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
    }
}
