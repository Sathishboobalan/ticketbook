import React from 'react';
//import logo from './logo.svg';
// import Navbar from './components/navbar'
import LoginForm from './components/LoginForm'
import SignUp from './components/signUp';
// import HomeCarousel from './components/homeCarousel';

import { BrowserRouter as Router,Switch  , Route} from 'react-router-dom';
// import HomePage from './components/homepage'
// import HomePageUser from './components/homepageUser'
import './App.css';
// import HomeCarousel from './components/homeCarousel';
// import HomeCombo from './components/homeCombo';
// import SignUp from './components/signUp';
// import HomePageCarousel from './components/homePageCarousel'
// import OptionCard from './components/optionCard'
// import LessDetailCard from './components/lessDetailCard';
// import FinalHomePage from './components/finalHomePage';


class App extends React.Component{
  render(){
    return(
        
        <Router>
        
          
          
            <Switch>
                <Route exact path='/' render ={() =><LoginForm/> }/>
                <Route exact path='/signup' render ={() =><SignUp/> }  /> 
            </Switch>
          
        </Router>
      
    );
  }
}
export default App;
