//// src/components/Banner.jsx
//import React from 'react';
//import './Banner.css'; // If you want to style the banner
//import 'bootstrap/dist/css/bootstrap.min.css';


//const Banner = ({ title }) => {
//  return (
//    <div className="banner">
//          <h1>{title}</h1>

//    </div>
//  );
//};

//export default Banner;


import React from 'react';
import './Banner.css'; // If you want to style the banner
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from './../assets/Images/Banner/blog-1.jpg';
import Banner2 from './../assets/Images/Banner/blog-1.jpg';
import Banner3 from './../assets/Images/Banner/blog-1.jpg';

export  function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
                        className="d-block w-100 setCarousal" alt="First Slide" />
                </div>
                <div className="carousel-item">
                    <img src={ Banner1 } className="d-block w-100" alt="Second Slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/1200x500" className="d-block w-100" alt="Third Slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
