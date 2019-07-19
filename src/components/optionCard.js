import React from 'react';
import '../App.css';
import FinalAddEventModal from '../components/finalAddEventModal';
import FinalLiveStatusModal from '../components/finalLiveStatusModal' ;
import MyBookingModal from '../components/myBookingModal'


class OptionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }
    componentDidMount(){
        this.setState({
            userData : this.props.greeting
        })
        console.log(this.props.greeting)
    }
    render() {
            return (
                <div>
                     <div className="card text-center shadow p-3 mb-5 bg-white" style={{ width: '15rem' }}>
                     
                   
                    
                        {this.state.userData.Typeoflogin === 'admin' 
                            ?
                            <div>
                                <div className="card-header">
                                    Featured
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <button className='btn btn-info' data-toggle="modal" data-target="#AddEvent" data-keyboard='false' data-backdrop='static'>
                                            Add Event
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button className='btn btn-info' data-toggle="modal" data-target="#listEventModal" data-keyboard='false' data-backdrop='static'>
                                            Live Status
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button className='btn btn-info' data-toggle="modal" data-target="#mybookingModal" data-keyboard='false' data-backdrop='static' >
                                            My Bookings
                                        </button>
                                    </li>
                                </ul>
                                <FinalAddEventModal />
                                <FinalLiveStatusModal />
                                
                                <MyBookingModal user={this.state.userData}/>
                            </div>
                            : 
                            <div>
                                <div className="card-header">
                                    Featured
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <button className='btn btn-info'  data-toggle="modal" data-target="#mybookingModal" data-keyboard='false' data-backdrop='static'>
                                            My Booked Event
                                        </button>
                                    </li>
                                </ul>
                                {console.log("tsrget",this.state.userData)}
                                <MyBookingModal user={this.props.greeting}/>
                                
                            </div>
                            
                        }

                    </div>
                    
                </div>
            );

    }
}

export default OptionCard