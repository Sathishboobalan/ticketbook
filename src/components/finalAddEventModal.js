import React from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import axios from 'axios';
import moment from 'moment';

//import { parse } from 'url';


class FinalAddEventModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eventname : '',
            aboutevent : '',
            eventtype : '',
            stadiumtype : '',
            numberofseats: '',
            price :'',
            booked : 0,
            location : '',
            bimage : '',
            finalImage : '',
            dateofevent : moment(),
            startDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {          
        this.setState({
          startDate: date,
          dateofevent : moment(date).format('DD:MM:YYYY')
        });
      }
      formHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    formHandler_img = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.files[0]
        })
    }
    onChange = date => this.setState({ date })
    eventbook = (event) =>{
        event.preventDefault();
        var eventname = this.state.eventname;
        var aboutevent = this.state.aboutevent;
        var eventtype = this.state.eventtype;
        var stadiumtype = this.state.stadiumtype;
        var numberofseats= this.state.numberofseats;
        var price = this.state.price;
        var booked = this.state.booked;
        var discount = this.state.discount;
        var location = this.state.location;
        var dateofevent = this.state.dateofevent;
        var eventId =  eventname.substring(0,2).toLocaleLowerCase()+numberofseats.substring(0,2)+location.substring(0,2).toLocaleLowerCase()+discount.substring(0,2);
        console.log(this.state.bimage)
        const fd = new FormData();
        fd.append("eventid",eventId)
        fd.append("eventname",eventname)
        fd.append("aboutevent",aboutevent)
        fd.append("eventtype",eventtype)
        fd.append("stadiumtype",stadiumtype)
        fd.append("numberofseats",numberofseats)
        fd.append("price",price)
        fd.append("discount",discount)
        fd.append("location",location)
        fd.append("dateofevent",dateofevent)
        fd.append("booked",booked)
        fd.append('file',this.state.bimage)
        
        // Password Field Checking
        if(eventId !== '' &&  eventname !== '' && aboutevent !== ''  && eventtype !== '' && stadiumtype !== '' && numberofseats !== '' &&price !== '' &&  discount !== '' && location !== '' &&  dateofevent !== ''){
            console.log(this.state)
            var link = "http://localhost:8080/eventbook" 
            axios.post(link,fd).then(res => {
                console.log(res)
                this.setState({state : {
                    eventname : '',
                    aboutevent : '',
                    eventtype : '',
                    stadiumtype : '',
                    numberofseats: '',
                    price :'',
                    booked : '',
                    location : '',
                    bimage : '', 
                    dateofevent : moment(),
                    startDate: new Date()
                }})
            })
            alert("Event Registered successfully"); 
        }
        
    }
        
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <div className="modal fade text-left" id="AddEvent">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title ">Event Registration</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body" style={{height:'500px',overflowY:'scroll'}}>
                        <form>
                            <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Event name</label>
                                            <input type="text" onChange={this.formHandler.bind(this)} name='eventname' className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Date of event</label><br></br>
                                            {/* <input  type='text' className='form-control'></input> */}
                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} className='form-control' name='date' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label>About Event</label>
                                            <textarea onChange={this.formHandler.bind(this)} name='aboutevent' className="form-control" rows='3' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Type of Event</label>
                                            <select onChange={this.formHandler.bind(this)} name='eventtype' className="form-control">
                                                <option value="">Choose type of event</option>
                                                <option value="Music Event">Music Event</option>
                                                <option value="Work Shop">Work Shop</option>
                                                <option value="Exhibition">Exhibition</option>
                                                <option value="Comedy Shows">Comedy Shows</option>
                                                <option value="Sports">Sports</option>
                                                <option value="Film">Film</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Type of Stadium</label>
                                            <select onChange={this.formHandler.bind(this)} name='stadiumtype' className="form-control">
                                                <option value="">Choose type of stadium</option>
                                                <option value="Indoor Stadium">Indoor Stadium</option>
                                                <option value="Outdoor Stadium">Outdoor Stadium</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Number of seats</label>
                                            <input type="number" onChange={this.formHandler.bind(this)} name='numberofseats' className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Price</label>
                                            <input type="number" onChange={this.formHandler.bind(this)} name='price' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Discount</label>
                                            <input type="number" onChange={this.formHandler.bind(this)} name='discount' className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label>Location</label>
                                            <input type="text" onChange={this.formHandler.bind(this)} name='location' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                
                                <div className='form-group'>
                                    <label >Broucher image</label>
                                    <input type="file" accept='image/*' onChange={this.formHandler_img.bind(this)} name='bimage'  className="form-control" />
                                </div>
                                </form>
                            </div>
                            
                            <div className="modal-footer">
                                <button type="submit" value="Submit"  className="btn btn-primary" onClick={this.eventbook.bind(this)}>Register</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
    
}

export default FinalAddEventModal;