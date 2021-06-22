import React, { Component } from 'react'

class DropDownSingle extends Component {
    
    constructor(props){
        super(props)
        this.state = {
          isListOpen: false,
          headerTitle: this.props.title
        }
    }

    render () {
        const { isListOpen, headerTitle } = this.state;

        return (
            <p>{headerTitle}</p>
        )
    }
}

export default DropDownSingle