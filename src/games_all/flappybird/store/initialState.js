export default {
    game: {
        status: 'menu',
        interval: 22,
        interval_id: null,
    },
    bird: {
        gravitation: 1.5,
        fly_up_speed: -13,
        // gravitation: 0.00001,
        // fly_up_speed: 0.00001,
        status: 'normal',
        height: 0,
        startHeight: 188,
        speed_y: 0,
    },
    piping: {
        space_between_pipes: 200,
        height_space: 120,
        x_offset: [1600],
        heights: [300],
        scroll_speed: -1.5,
    }
}
