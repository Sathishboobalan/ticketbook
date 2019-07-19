import React from 'react';
import companyLogo from '../assets/images/eventMania.png';
import '../App.css';
import {Link} from 'react-router-dom';
import HomeCarousel from './homeCarousel';
import DatePicker from "react-datepicker";
import axios from 'axios';
import moment from 'moment';
 
import "react-datepicker/dist/react-datepicker.css";


class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            lname : '',
            DOB : moment(),
            gender : '',
            mobile : '',
            typeoflogin : '',
            email : '',
            password :'',
            confpassword : '',
            
            error :{
                fname : false,
                lname : false,
                mobile : false,
                typeoflogin : false,
                gender : false,
                email : false,
                password : false,
                confpassword : false,
                startDate : false
            }
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          DOB : moment(date).format('DD:MM:YYYY')
        });
      }
      formHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onChange = date => this.setState({ date })

    signup = () =>{
        var firstName = this.state.fname;
        var lastName = this.state.lname;
        var dateOfBirth = this.state.DOB;
        var mobileNumber = this.state.mobile;
        var gender = this.state.gender;
        var typeoflogin = this.state.typeoflogin;
        var mailId = this.state.email;
        var userPassword = this.state.password;
        var confirmUserPassword = this.state.confpassword;
        var encryptedPassword = '';
        var error = this.state.error;
        var userId = firstName.substring(0,2) + lastName.substring(0,2) + dateOfBirth.substring(0,1) + typeoflogin.substring(0,2) + mobileNumber.substring(3,5);
        // Password Field Checking
        if(userPassword < 8 || (userPassword !== confirmUserPassword)){
            error.password = true
            this.setState({
                error
            })
            // console.log(this.state)
        }else{
            const Cryptr = require('cryptr');
            const cryptr = new Cryptr('myTotalySecretKey');
            const encryptedString = cryptr.encrypt(userPassword);
            encryptedPassword = encryptedString;
            console.log(encryptedString);
            error.password = false
            this.setState({

                error
            })
        }
        var mailRegEx=  /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
        if(!mailRegEx.test(mailId)){
            error.email = true
            this.setState({
                error
            })
            console.log(this.state)
        }
        else{
            error.email = false
            this.setState({
                error
            })
        }

        if(firstName !== '' && lastName !== ''  && dateOfBirth !== '' && mobileNumber !== '' && gender !== '' &&  typeoflogin !== '' && error.email === false && error.password === false ){
            console.log(this.state)
            var link = "http://localhost:8080/user/"+userId+"/"+firstName+"/"+lastName+"/"+dateOfBirth+"/"+mobileNumber+"/"+gender+"/"+typeoflogin+"/"+mailId +"/"+encryptedPassword
            axios.post(link).then(res => {
                alert("Your Account Has been Created Successfully")
                console.log(res)
            })
            this.setState({
                fname : '',
                lname : '',
                mobile : '',
                email : '',
                gender : '',
                typeoflogin : '',
                password :'',
                confpassword : '',
                DOB : '',
                startDate: new Date(),
                error :{
                    fname : false,
                    lname : false,
                    mobile : false,
                    email : false,
                    gender : false,
                    typeoflogin : false,
                    password : false,
                    confpassword : false,
                    DOB :false
                }
            });
            
        }
        
    }
    // componentDidMount(){
    //     this.setState({
    //             fname : '',
    //             lname : '',
    //             mobile : '',
    //             email : '',
    //             gender : '',
    //             typeoflogin : '',
    //             password :'',
    //             confpassword : '',
    //             DOB : '',
    //             startDate: new Date(),
    //             error :{
    //                 fname : false,
    //                 lname : false,
    //                 mobile : false,
    //                 email : false,
    //                 gender : false,
    //                 typeoflogin : false,
    //                 password : false,
    //                 confpassword : false,
    //                 DOB :false
    //             }
    //         });
    // }
    
    componentDidUpdate(){
        console.log(this.state)
    }
  render(){
    return(
        <div>
            <HomeCarousel />
            <div className="card card-des1 shadow-lg p-5  bg-white rounded mt-4"  style={{zIndex:"22"}}>
                <div className='card-title text-center'>
                    <div className='company-logo d-flex justify-content-center'>
                    <img src={companyLogo} alt='company-logo' className='company_logo1'/>
                    </div>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-6'>
                        <div className="form-group">
                                <label >First Name</label>
                                <input type="text" className="form-control" onChange={this.formHandler.bind(this)} name='fname'/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label >Last Name</label>
                                <input type="text" className="form-control" onChange={this.formHandler.bind(this)} name='lname' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <label >Date of Birth</label>
                                <DatePicker selected={this.state.startDate} onChange={this.handleChange} className='form-control' name='date' />
                                {/* <input type="date" className="form-control" /> */}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label >Mobile</label>
                                <input type="number" className="form-control" onChange={this.formHandler.bind(this)} name='mobile' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <label>Gender</label>
                                <select onChange={this.formHandler.bind(this)} name='gender' className="form-control">
                                    <option value="">Choose</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                            <label>Admin/User</label>
                                <select onChange={this.formHandler.bind(this)} name='typeoflogin' className="form-control">
                                    <option value="">Choose</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                        <div className="form-group">
                                <label >Email</label>
                                <input type="email" className="form-control" onChange={this.formHandler.bind(this)} name='email' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                        <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" onChange={this.formHandler.bind(this)} name='password' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label >Confirm Password</label>
                                <input type="password" className="form-control" onChange={this.formHandler.bind(this)} name='confpassword'/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <button className='btn btn-outline-success btn-block mt-4' onClick={this.signup.bind(this)} >Sign Up</button>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col text-right'>
                            <Link  to="/" style={{textDecoration:"none"}}>
                                <p> Already have an Account</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
  }
}
export default SignUp;
