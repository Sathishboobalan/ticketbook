import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import one from '../assets/images/chess.jpg';
import two from '../assets/images/cricket1.jpg';
import three from '../assets/images/cricket2.jpg';
import four from '../assets/images/cricket3.jpg';
import five from '../assets/images/drama-theater.jpg';
import six from '../assets/images/indoor.jpg';



class HomePageCarousel extends React.Component {


    render() {
        return (
            <div>
                <div className='container-fluid' style={{ marginTop : '65px' }}>
                    <div id="demo" className="carousel slide mt-4" data-ride="carousel" data-interval='2500'  style={{borderRadius:'10px'}} >
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                        <li data-target="#demo" data-slide-to="5"></li>
                    </ul>
                        <div className="carousel-inner carousel-inner1">
                            <div className="carousel-item active">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={one} alt="Chess" height='300' width='100%' />
                                    <div className='carousel-caption mb-5'>
                                        <button className='btn btn-danger' >Chess Tournaments</button>
                                     </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={two} alt="Cricket" height='300' width='100%' />
                                </div>
                                <div className='carousel-caption mb-5'>
                                    <button className='btn btn-danger' >Cricket Tournaments</button>
                                </div>
                                </div>
                            <div className="carousel-item">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={three} alt="Cricket" height='300' width='100%' />
                                </div>
                                <div className='carousel-caption mb-5'>
                                    <button className='btn btn-danger' >T20 Matches</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={four} alt="Chess" height='300' width='100%' />
                                </div>
                                <div className='carousel-caption mb-5'>
                                    <button className='btn btn-danger' >One Day Matches</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={five} alt="drama-theatre" height='300' width='100%' />
                                </div>
                                <div className='carousel-caption mb-5'>
                                    <button className='btn btn-danger' >Drama Functions</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="shadow p-0 mb-5 bg-white">
                                    <img src={six} alt="Chess" height='300' width='100%' />
                                </div>
                                <div className='carousel-caption mb-5'>
                                    <button className='btn btn-danger'>Indoor Tournaments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePageCarousel;
