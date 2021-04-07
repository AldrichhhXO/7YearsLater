import React, { Component } from 'react'
import Guest from '../../Components/Guest/Guest'

export default class GuestListContainer extends Component {
    constructor(props) {
        super(props)
    }

   
    render() {
        let guestListContainerStyles = {
            marginTop: '10px',
            border: '1px solid black',
            width: '80%',
            margin: '20px auto'
        }
        return (
            <div style = {guestListContainerStyles}>
                <Guest name = "Aldrich"/>
                <Guest name = "Aldrich"/>
                <Guest name = "Aldrich"/>
                <Guest name = "Aldrich"/>
                <Guest name = "Aldrich"/>
            </div>
        )
    }
}
