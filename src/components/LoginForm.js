import React from 'react';
//import logo from './logo.svg';
import companyLogo from '../assets/images/eventMania.png';
import '../App.css';
import {Link,Redirect} from 'react-router-dom';
import HomeCarousel from './homeCarousel';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import FinalHomePage from '../components/finalHomePage';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import GoogleLogin from 'react-google-login';

class LoginFrom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      detailsShow : false,
      email :'',
      password : '',
      userdata: []

    }
    this.formHandler = this.formHandler.bind(this);
  }

  signIn = () =>{    
    var Email = this.state.email;
    var Password = this.state.password;
    let detailsShow = this.state.detailsShow;
    
    var link = "http://localhost:8080/login/" + Email 
    axios.post(link).then(res =>{
      var decoded = jwt_decode(res.data);  
      console.log(decoded)    
      const Cryptr = require('cryptr');
      const cryptr = new Cryptr('myTotalySecretKey');
      const decryptedString = cryptr.decrypt(decoded['name'][0].Password);
      console.log(decryptedString)
      // if(this.state.userdata.length === 1  && decryptedString ===Password ){
      //   detailsShow = true;
      // }
      // else{
      //   detailsShow = false;
      // }
      this.setState({
        userdata : decoded['name'],
        detailsShow
      })
      if((this.state.userdata.length===1 && decryptedString ===Password)){
        this.setState({detailsShow:true})
      }
      
    })

    //DB Data access
    
 
  }
  responseGoogle = (response) => {
    // if(response.)
    this.setState({
      detailsShow : true,
      
    })
    console.log(response);
    let obj = [
      {
          FirstName  : response.profileObj.givenName,
          LastName   : response.profileObj.familyName,
          Email :response.profileObj.email,
          Userid : response.profileObj.googleId

      }
          
    ]
    this.setState({
      userdata : obj
    })
  }
  formHandler = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }
  componentDidUpdate(){
  
    console.log(this.state)
}
    render(){
      if(this.state.detailsShow){
        return(
          <Router>
            {
              this.state.userdata.length === 1 
              ?
              <div>
                {console.log(this.state.userdata.length)}
                <Route exact path='/homepage' render={() => <FinalHomePage value={this.state.userdata} />} />  
                <Redirect to='/homepage'/>
              </div>
              :
              <Redirect to='/' />
            }
            
          </Router>
          
        )
        
      }
      else{
        return(
          <div>
            <HomeCarousel  />
            <div className="card card-des shadow-lg p-5 bg-white rounded mt-4" style={{zIndex:"22"}}>
                <div className='card-title text-center'>
                    <div className='company-logo d-flex justify-content-center'>
                    <img src={companyLogo} alt='company-logo' className='company_logo'/>
                    </div>
                </div>
                <div className="card-body">               
                      <div className="form-group">
                        <label >Your Email</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">@</div>
                            </div>
                            <input type="email" className="form-control" onChange={this.formHandler.bind(this)} name='email'/>
                          </div>
                      </div>
                      <div className="form-group">
                        <label >Your Password</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text">@</div>
                            </div>
                            <input type="password" className="form-control" onChange={this.formHandler.bind(this)} name='password'/>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col text-center'>
                             <button className='btn btn-outline-success btn-block mt-4' onClick={this.signIn.bind(this)} >Login</button>
                          </div>
                      </div>
                      <div className='row mt-4'>
                          <div className='col-6 text-left'>
                          <GoogleLogin
                            clientId="672780292442-qhd68068hfqlti3n92ougidmimirntlj.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                          />
                          </div>
                          
                          <div className='col-6 text-right'>
                            <Link to='/signup' style={{textDecoration:"none"}}>
                                <p> Create a new Account</p>
                            </Link>
                          </div>
                      </div>                
                </div>
            </div>
          </div>
           
        );

      }
    
  }
}
export default LoginFrom 
