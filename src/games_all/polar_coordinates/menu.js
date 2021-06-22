import React from 'react'
import DropDownSingle from '../../component/DropDownMenu/DropDownSingle'
import { options_polar_coordinates } from './options'

const Menu = props => {

    
    return (
        <div className={"polar-coordinates-settings"}>
            {/* INFO */}
            {/* This is he first dropdown menu to set the general working enviroment we are currently in. */}
            <DropDownSingle
                headerTitle="Select simulation"
                list={options_polar_coordinates}
            ></DropDownSingle>

            {/* Here are all the settings. With the variable number of input options, defined by the dropdown fields. */}
            <form>
                <label for="fname">First input:</label><br/>
                <input type="range" className="slider" name="mySlider" id="newspeed" min={0} max={100} value={50} /><br/>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
            </form>
        </div>
    )
}

export default Menu