import React from 'react'
import './Dashboard.css'
import Instance from '../../../API/Axios'
import Guest from '../../../Components/Guest/Guest'
import NotificationContainer from '../../../Containers/NotificationContainer/NotificationContainer'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestlist: []
        }
    }

    

    componentDidMount() {
        Instance.get('/dashboard')
            .then(res => {
                this.setState({guestlist: res.data.guestlist})
            })
            .catch(err => {

            })
    }

    render() {
        document.title = "Reboja | Dorsey - Dashboard"

        let guestlist = this.state.guestlist.map((guest) => {
            return <Guest firstName = {guest.FirstName} lastName = {guest.LastName} />
            })

        let pendingGuests = this.state.guestlist.map((guest) => {   
            if (guest.Rsvp == 0)
            return <Guest key = {guest.UserID} firstName = {guest.FirstName} lastName = {guest.LastName} />
            
        })

        return (
            <div className = "Dashboard"> 


                <div className = "Left-Content">
                <div className = "Dashboard-Options">
                    <h1 className = "Dashboard-Header">Welcome, Melissa and Anthony</h1>
    
                    <p>Currently {this.state.guestlist.length} guests attending</p>



                    {guestlist}
                    
                    <h1>Guests who still need to RSVP</h1>
                    
                    <div className = "Dashboard-Stats-Container">
                        {pendingGuests}
                    </div>
    
                    <div>
                        <p>20 guests still need to reply</p>
                    </div>
                    
                </div>
                </div>

                <div className = "Notification-Center">
                    <NotificationContainer />
                </div>
    
            </div>
        )
    }

}
