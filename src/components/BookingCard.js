import React from 'react';
import '../App.css';

class BookingCard extends React.Component{

    constructor(props)
    {
       super(props);
       this.state={
           eventId : '',
            eventName:'',
            dateOfEvent :'',
            typeOfEvent : '',
            typeOfStaduium : '',
            location: '',
            ticketbooked: '',
            amountpaid : 0,
            dateOfEve : 0,
            monthOfEve : 0,
            bimage : ''
       } 
    }
    
    componentDidMount(){
        let date = parseInt(this.props.item.Eventdate.substring(0,2));
        let month = parseInt(this.props.item.Eventdate.substring(3,5))
        this.setState({
            eventId : this.props.item.Eventid,
            eventName:this.props.item.Eventname,
            dateOfEvent : this.props.item.Eventdate,
            typeOfEvent : this.props.item.Eventtype,
            typeOfStaduium : this.props.item.Stadiumtype,
            location: this.props.item.Eventlocation,
            ticketbooked: this.props.item.Ticketbooked,
            amountpaid : this.props.item.Amountpaid,
            dateOfEve : date,
            monthOfEve : month ,
            bimage : this.props.broucher
        })
        console.log(this.props.item)
    }
    monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    render(){
        return(
            <div>
                <div className='container'>
                    <div className="card shadow-lg  mb-5 bg-white rounded">
                        <div className='card-body'>
                            <div className='container-fluid'>
                                <div className="row">
                                    
                                    <div className='col-sm-12 col-md-12 col-xl-12'>
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5><span style={{color:'red'}}>{this.state.dateOfEve} </span> {this.monthList[(this.state.monthOfEve)-1]}</h5>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6  '>
                                                <h5>Event Name : <span style={{color:'grey'}}> {this.state.eventName}</span> </h5>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5> Event ID : {this.state.eventId}</h5>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Event Location :  {this.state.location}</h5>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Event Type : {this.state.typeOfEvent}</h5>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Type of Stadium :  {this.state.typeOfStaduium}</h5>
                                            </div>
                                        </div>
                                        
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Ticket Booked : {this.state.ticketbooked}</h5>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Amountpaid :   <span style={{color:'red'}}>&#x20b9; {this.state.amountpaid}</span></h5>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default BookingCard;