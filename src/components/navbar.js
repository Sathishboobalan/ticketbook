import React from 'react';
import '../App.css';
import companyLogo from '../assets/images/eventMania.png';
 

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : ''
        }
    }
    componentDidMount(){
        this.setState({
            userName : this.props.user
        })
        console.log(this.props.user)
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={companyLogo} alt='company-logo'  style={{height:"40px",width:"100px"}} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <h5 className="nav-link">Welcome {this.state.userName}</h5>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar