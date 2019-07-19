import React from 'react';
import '../App.css';

class Card extends React.Component{

    constructor(props)
    {
       super(props);
       this.state={
            eventId : '',
            eventName:'',
            dateOfEvent :'',
            typeOfEvent : '',
            typeOfStaduium : '',
            noOfSeats : '',
            price : '',
            discount : '',
            location : '',
            broucherImage : '',
            finalAmount : 0,
            booked : '',
            dateOfEve : 0,
            monthOfEve : 0,
            availableSeats : 0
       } 
    }
    
    componentDidMount(){
        let amount = Math.abs((this.props.item.Price) - Math.floor((this.props.item.Price) * ((this.props.item.Discount)/100)));
        let availTicket = this.props.item.Numberofseats - parseInt(this.props.item.Booked);
        let date = parseInt(this.props.item.Dateofevent.substring(0,2));
        let month = parseInt(this.props.item.Dateofevent.substring(3,5))
        this.setState({
            eventId : this.props.item.Eventid,
            eventName:this.props.item.Eventname,
            dateOfEvent :this.props.item.Dateofevent ,
            typeOfEvent : this.props.item.Eventtype,
            typeOfStaduium : this.props.item.Stadiumtype,
            noOfSeats : this.props.item.Numberofseats,
            price : this.props.item.Price,
            booked : this.props.item.Booked,
            discount : this.props.item.Discount,
            location : this.props.item.Location,
            broucherImage : this.props.item.Bimage,
            finalAmount : amount,
            availableSeats :  availTicket,
            dateOfEve : date,
            monthOfEve : month 
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
                                    <div className='col-sm-3 col-md-3 col-xl-3'>
                                        <div className='row'>
                                            <img  className="rounded imagesize"src={"http://localhost:8080/"+this.state.broucherImage} alt='broucher-img'></img>
                                        </div>
                                        <div className='row'>
                                            <h5>Available Tickets : <span style={{color:'red'}}>{this.state.availableSeats}</span> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className='col-sm-9 col-md-9 col-xl-9'>
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
                                                <h6> Event ID : {this.state.eventId}</h6>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Event Location :  {this.state.location}</h5>
                                            </div>
                                        </div>
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h6>Event Type : {this.state.typeOfEvent}</h6>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Type of Stadium :  {this.state.typeOfStaduium}</h5>
                                            </div>
                                        </div>
                                        
                                        <div className='row' style={{marginTop:'10px'}}>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h6>Discount : {this.state.discount}<span style={{color:"red"}}>%</span></h6>
                                            </div>
                                            <div className='col-sm-6 col-md-6 col-xl-6'>
                                                <h5>Price :  <strike>&#x20b9;{this.state.price}</strike> <span style={{color:'red'}}>&#x20b9; {this.state.finalAmount}</span></h5>
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
export default Card;