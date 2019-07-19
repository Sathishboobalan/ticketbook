import React from 'react';
import axios from 'axios';

class LessDetailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : [],
            details: [],
            eventId : '',
            eventName : '',
            eventType : '',
            aboutEvent : '',
            booked : '',
            eventLocation : '',
            stadiumType : '',
            price : '',
            discount : '',
            eventDate : '',
            bimage : '',
            numberOfSeats : '',
            dayofevent : '',
            monthofEvent : 0,
            finalAmount : 0,
            buy : 0,
            currentAmount : 0,


        }
    }
    componentDidMount() {
        this.setState({
            details: this.props.greets,
            user : this.props.user

        })
        console.log(this.props.greets);
        console.log(this.props.user)
    }
    whichClicked(indexVal){
        this.setState({
            eventId : this.state.details[indexVal].Eventid,
            eventName : this.state.details[indexVal].Eventname,
            eventType : this.state.details[indexVal].Eventtype,
            aboutEvent : this.state.details[indexVal].Abountevent,
            booked : this.state.details[indexVal].Booked,
            eventLocation : this.state.details[indexVal].Location,
            stadiumType : this.state.details[indexVal].Stadiumtype,
            price : this.state.details[indexVal].Price,
            eventDate : this.state.details[indexVal].Dateofevent,
            discount : this.state.details[indexVal].Discount,
            numberOfSeats : this.state.details[indexVal].Numberofseats,
            bimage : this.state.details[indexVal].Bimage,
            dayofevent : this.state.details[indexVal].Dateofevent.substring(0,2),
            monthofEvent : parseInt(this.state.details[indexVal].Dateofevent.substring(3,5)),
            finalAmount : Math.abs((parseInt(this.state.details[indexVal].Price)) - Math.floor((parseInt(this.state.details[indexVal].Price)) * ((parseInt(this.state.details[indexVal].Discount)) / 100)))
        })
        console.log( this.state.details[indexVal].Dateofevent.substring(0,2))
    }
    formHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            currentAmount : event.target.value * this.state.finalAmount
        })
    }
    book =  ()  => {
        console.log(this.state.user.Email)
        var firstname = this.state.user.FirstName
        var lastname = this.state.user.LastName
        var userMail = this.state.user.Email
        var userid = this.state.user.Userid
        var eventId = this.state.eventId;
        var eventName = this.state.eventName;
        var eventType = this.state.eventType;
        var stadiumType = this.state.stadiumType;
        var eventDate = this.state.eventDate;
        var eventLocation = this.state.eventLocation;
        var ticketBooked = this.state.buy;
        var bimage = this.state.bimage;
        var pattern = /\\/;
        bimage = bimage.split(pattern)[1]
        // var image = bimage[1]
        console.log(bimage)
        var amountPaid = this.state.finalAmount * ticketBooked;
        console.log(` ${eventId} ${eventName} ${eventType} ${stadiumType} ${eventType} ${eventDate} ${eventLocation} ${ticketBooked} ${amountPaid}`)
        if(userid !== ''  && eventId !== '' && eventName !== '' && eventType !== '' &&  eventDate !== '' && eventLocation !== '' && ticketBooked !==0 && amountPaid!==0 ){
            console.log(this.state)
            var link = "http://localhost:8080/bookevent/"+userid+"/"+firstname+"/"+lastname+"/"+userMail+"/"+bimage+"/"+eventId+"/"+eventName+"/"+eventType+"/"+stadiumType+"/"+eventDate +"/"+eventLocation+"/"+ticketBooked+"/"+amountPaid
            axios.post(link).then(res => {

                alert("Event booked Successfully")
                console.log(res)
            })
            
        }
        else{
            console.log("Something wrong")
        }
    }
    
    month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
    render() {
        return (
            <div className='row'>
                
                    {
                        this.state.details.map((element, index) => {
                            return (
                                <div key={index} className='col-md-4'>
                                    {console.log(index)}
                                    <div data-toggle="modal" onClick={() => this.whichClicked(index)} data-target="#finalBookingModal" data-keyboard='false' data-backdrop='static' style={{ textDecoration: 'none' }}>
                                        <div className='shadow less-det-card mb-5 bg-white rounded'>
                                            <div className='card '>
                                                <img className='card-img-top' src= {"http://localhost:8080/"+element.Bimage} alt='card-img' style={{ height: '350px' }} />
                                            </div>
                                            <div className='card-footer'>
                                                <div className='row'>
                                                    <div className='col-3'>
                                                        <div className='row'>
                                                            <div className='col-12'>
                                                                <h5 style={{ color: 'red' }}>{element.Dateofevent.substring(0,2)}</h5>
                                                            </div>
                                                            <div className='col-12'>
                                                                <h5>{this.month[parseInt(element.Dateofevent.substring(3,5))-1]}</h5>
                                                            </div>
                                                            <div className='col-12'>
                                                                <span className="badge badge-danger">{element.Discount}% off</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-9'>
                                                        <div className='row'>
                                                            <div className='col-12'>
                                                                <h5>{element.Eventname}</h5>
                                                            </div>
                                                            <div className='col-12'>
                                                                <h6>{element.Location}</h6>
                                                            </div>
                                                            <div className='col-12'>
                                                                <h5 style={{ float: 'right' }}><strike>&#x20b9;{element.Price}</strike> <span style={{ color: 'red' }}>&#x20b9; {Math.abs((parseInt(element.Price)) - Math.floor((parseInt(element.Price)) * ((parseInt(element.Discount)) / 100)))}</span></h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="modal fade text-left" id="finalBookingModal">
                                        <div className="modal-dialog modal-xl" style={{fontSize:'20px',fontFamily:''}}>
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title ">Event  Booking</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                <div className="modal-body" style={{ height: '500px', overflowY: 'scroll' }}>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            <div className='row'>
                                                                <div className='col-12'>
                                                                    <img src={"http://localhost:8080/"+this.state.bimage} alt='browcher' height='350' width='300' />
                                                                </div>
                                                                <div className='col-12'>
                                                                    <h2 style={{color:'red'}}>{this.state.dayofevent}</h2>
                                                                </div>
                                                                <div className='col-12'>
                                                                    <h4 >{this.month[this.state.monthofEvent - 1 ]}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-8'>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Event Name
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.eventName}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Event Id
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.eventId}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Event Type
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.eventType}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Stadium Type
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.stadiumType}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Location
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.eventLocation}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Total Seats
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.numberOfSeats}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Available Seats
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {parseInt(this.state.numberOfSeats - this.state.booked)}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-4'> 
                                                                    Price
                                                                </div>
                                                                <div className='col-8'> 
                                                                   {this.state.finalAmount}
                                                                </div>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col-6'>
                                                                    <div className="form-inline">
                                                                        <label >Buy tickets</label>
                                                                        <input type="number" className="form-control ml-4" onChange={this.formHandler.bind(this)} name='buy' />
                                                                    </div>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div className="from-inline">
                                                                        <div className='row mr-4'>
                                                                            <div className='col-2'>
                                                                                &#x2718;
                                                                            </div>
                                                                            <div className='col-2'>
                                                                                {this.state.finalAmount}
                                                                            </div>
                                                                            <div className='col-2'>
                                                                                    &#61;
                                                                            </div>
                                                                            <div className='col-6' style={{color:'red'}}>
                                                                                &#8377; {this.state.currentAmount}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {console.log(index)}
                                                <div className="modal-footer">
                                                    {
                                                        parseInt(this.state.numberOfSeats - this.state.booked)<this.state.buy || parseInt(this.state.numberOfSeats - this.state.booked)=== 0
                                                        ?
                                                        <div>
                                                            <button type="submit" value="Submit" className="btn btn-primary disabled"  >Book Event</button>
                                                        </div>
                                                        :
                                                        <div>
                                                            <button type="submit" value="Submit" className="btn btn-primary"  onClick={this.book.bind(this)}>Book Event</button>
                                                        </div>
                                                    }
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


            </div>
        )
    }
}
export default LessDetailCard