import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{width:"80%", margin:"auto",padding:"5%"}}>   
      <h1 style={{textAlign:"center",fontSize:"30px",marginBottom:"1%",textDecorationLine:"initial"}}> Value Buys In Furniture </h1>
        <hr />
        
        <Slider {...settings}>          
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Coffee_Tables-taxon_1.png?1675918016" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/TV_Units-taxon-2.png?1675918237" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Shoe_Racks-taxon_3.png?1675918241" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Sofa_Beds_taxon_4.png?1675918246" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Sofa_Beds_taxon_4.png?1675918246" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Dining-taxon_6.jpg?1675918258" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Lounge_Chairs-taxon_7.png?1675918263" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Beds_taxon_8.png?1675918266" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Dining_Chairs-taxon_9.png?1675918269" alt="" />
            
          </div>
        </Slider>
      </div>
    );
  }
}