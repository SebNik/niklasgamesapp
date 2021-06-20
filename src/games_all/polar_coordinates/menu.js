import React, {useEffect, useRef} from 'react'

const Menu = props => {

    
    return (
        <div className={"polar-coordinates-settings"}>
            {/* Here are all the settings. With the variable number of input options, defined by the dropdown fields. */}
            <form>
                <label for="fname">First name:</label><br/>
                <input type="range" className="slider" name="mySlider" id="newspeed" min={0} max={100} value={50} /><br/>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
            </form>
        </div>
    )
}

export default Menu