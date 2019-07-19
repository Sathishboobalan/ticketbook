import React from 'react';
//import logo from './logo.svg';
import Navbar from '../components/navbar'
// import HomeCarousel from './components/homeCarousel';
// import HomeCarousel from './components/homeCarousel';
// import HomeCombo from './components/homeCombo';
// import SignUp from './components/signUp';
// import LoginForm from './components/LoginForm'
// import SignUp from './components/signUp';
import '../App.css';
import HomePageCarousel from '../components/homePageCarousel'
import OptionCard from '../components/optionCard'
import LessDetailCard from '../components/lessDetailCard';
import axios from 'axios';
import jwt_decode from 'jwt-decode'


class FinalHomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userData : this.props.value[0],
      error : null,
      details : []
    }
  }
  componentDidMount(){
    var link = "http://localhost:8080/showdetails"
      axios.post(link).then(res =>{
      var decoded  = jwt_decode(res.data); 
      this.setState({
          details : decoded['name']
      })
    })
    console.log(this.props.value[0])
  }
  render(){
    return(
        <div>
          {this.state.details.length>0 
          ?
          <div>
            <div>
                <Navbar user={this.state.userData.FirstName}/>
                <div className='container'>
                  <div className='d-flex content-alight-center'>
                    <h3 className='welcome-panel'>Welcome to Event Booking Portal</h3>
                  </div>
                </div>
                <HomePageCarousel />
            </div>
            <div className='container-fluid jumbotron mt-2  '>
              <div className='row'>
                <div className='col-3'>
                    <OptionCard loginType={this.state.userData.Typeoflogin}  greeting={this.state.userData} />
                </div>
                <div className="col-9">
                  <LessDetailCard greets={this.state.details}  user={this.state.userData} />
                  
                </div>
              </div>
            </div>
          </div>
          : 
          <div>No data</div>
          }
        </div>
        
      
    );
  }
}
export default FinalHomePage;
