import React from 'react';
import BookingCard from './BookingCard';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { CLIENT_RENEG_LIMIT } from 'tls';

class MyBookingModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail : [],
        }
    }
    
    componentDidMount(){
    //    console.log(this.props.user)
        var link = "http://localhost:8080/myBookings/"+this.props.user.Userid
    console.log(this.props.user.Userid)
        axios.post(link).then(res =>{
            var decoded  = jwt_decode(res.data); 
            console.log(jwt_decode(res.data))
            console.log(decoded['name'])
            console.log(this.props.user.FirstName)
            this.setState({
                detail : decoded['name']
            })
        })
    }
    render(){
        if(this.state.detail !== null){
            return(
                <div>
                    <div className="modal fade text-left" id="mybookingModal" >
                        <div className="modal-dialog modal-xl" >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title ">Booked List</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
    
                                <div className="modal-body" style={{height:'500px',overflowY:'scroll'}}>
                                    {
                                        this.state.detail.length === 0 
                                        ?
                                        <div className='text-center'>
                                            No Booking Yet
                                        </div>
                                        :
                                        this.state.detail.map((element,index) => {
                                            return(
                                                <div key={index}>
                                                    <BookingCard item={element}   />
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </div> 
                                <div className="modal-footer"> 
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}
export default MyBookingModal;