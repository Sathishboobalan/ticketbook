import React from 'react';
import Card from './card';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

class EventListModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail : []
        }
    }
    
    componentDidMount(){
        var link = "http://localhost:8080/showdetails"
        axios.post(link).then(res =>{
            var decoded  = jwt_decode(res.data); 
            // console.log(decoded['name']
            console.log(this.state.detail)
            this.setState({
                detail : decoded['name']
            })
        })
    }
    render(){
        if(this.state.detail !== null){
            return(
                <div>
                    <div className="modal fade" id="listEventModal" >
                        <div className="modal-dialog modal-xl" >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title ">Event List</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
    
                                <div className="modal-body" style={{height:'500px',overflowY:'scroll'}}>
                                    {this.state.detail.map((element,index) => {
                                        return(
                                            <div key={index}>
                                                <Card item={element}   />
                                            </div>
                                            
                                        )
                                    })}
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
export default EventListModal;