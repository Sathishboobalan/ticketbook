import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import one from '../assets/homepagecarousel/baseball.jpg';
import two from '../assets/homepagecarousel/football1.jpg';
import three from '../assets/homepagecarousel/cricketStad1.jpg';
import four from '../assets/homepagecarousel/indoor1.jpg';
import five from '../assets/homepagecarousel/football2.jpg';
import six from '../assets/homepagecarousel/seats.jpg';
import seven from '../assets/homepagecarousel/theatre1.jpg';
import eight from '../assets/homepagecarousel/rugby1.jpg';
import nine from '../assets/homepagecarousel/theatre2.jpg';
import ten from '../assets/homepagecarousel/football3.jpg';



class HomeCarousel extends React.Component{
  
  render(){
    return(
      <div>
        <div id="demo" className="carousel slide app-content"  data-ride="carousel">
            
        <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
            <li data-target="#demo" data-slide-to="6"></li>
            <li data-target="#demo" data-slide-to="7"></li>
            <li data-target="#demo" data-slide-to="8"></li>
            <li data-target="#demo" data-slide-to="9"></li>
        </ul>
          <div className="carousel-inner">
          
            <div className="carousel-item carousel-items active">
              <img src={one} alt="Chess"  height='1000' width='100%' />
            </div>
            <div className="carousel-item">
              <img src={two} alt="Cricket" height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={three} alt="cricket" height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={four} alt="Cricket" height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={five} alt="theatre"  height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={six} alt="indoor"  height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={seven} alt="indoor"  height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={eight} alt="indoor"  height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={nine} alt="indoor"  height='1000' width='100%'/>
            </div>
            <div className="carousel-item">
              <img src={ten} alt="indoor"  height='1000' width='100%'/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default HomeCarousel;
