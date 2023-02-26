import React, { Component } from "react";
import Slider from "react-slick";

export default class Items2 extends Component {
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
      <h1 style={{textAlign:"center",fontSize:"30px",marginBottom:"1%",textDecorationLine:"initial"}}> Value Buys In Decor </h1>
        <hr />
        
        <Slider {...settings}>          
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Lamps___Lighting-taxon_1.png?1675922995" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Bedsheets-taxon_2.png?1675922999" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Carpets-taxon_3.png?1675923006" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Curtains-taxon_4.png?1675923010" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Cushion_Covers-taxon_5.png?1675923015" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Bathroom_Accessories-taxon_6.png?1675923018" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Mirrors--taxon_7.png?1675923023" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Showpieces-taxon_8.png?1675923026" alt="" />
            
          </div>
          <div>
            <img src="https://www.ulcdn.net/media/Collection/listings/Wall_Decor-taxon_9.png?1675923029" alt="" />
            
          </div>
        </Slider>
      </div>
    );
  }
}