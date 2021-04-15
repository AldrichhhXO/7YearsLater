import React, {useState}from 'react'
import './Spinner.css'

export default function Spinner(props) {

    const [ loading, setLoading ] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2500)

    if (loading) {
        return (
            <div className = "Spinner-Page">
                <div className = "Spinner-Container">
                    <div className = "Circle"></div>
                    <div className = "Circle"></div>
                    <div className = "Circle"></div>
                </div>
                <p>{props.welcome}</p>
            </div>
        )
    }
    else return null

}
