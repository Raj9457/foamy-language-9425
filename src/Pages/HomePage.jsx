import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Item2 from "./Slider2";
import MultipleItems from './Slider';


const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

function HomePage(){
    // Settings for the slider

  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://www.ulcdn.net/media/Slideshow/Spring-into-sale-Slideshow.jpg?1676664267",
    "https://www.ulcdn.net/media/Slideshow/Beds-2.jpg?1676877037",
    "https://www.ulcdn.net/media/Slideshow/Dining-3.jpg?1676877042",
    "https://www.ulcdn.net/media/Slideshow/Shoeracks4.jpg?1676894369",
    "https://www.ulcdn.net/media/Slideshow/UI-Feb-slideshow.jpg?1676622712",
      ];
  
    return <div>
        <Box
        position={'relative'}
        height="65vh"
        width="100vw"
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
            aria-label="left-arrow"
            
            height="60px"
            borderRadius="0px"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
            aria-label="right-arrow"
            
           
            position="absolute"
            right={side}
            height="60px"
            borderRadius="0px"
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)} style={{padding:"5px"}}>
            {cards.map((url, index) => (
            <Box
                key={index}
                height="80vh"
                width="50vw"
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${url})`}
            />
            ))}
        </Slider>
        </Box>
        <MultipleItems/>
        <Item2/>
    </div>
}
export default HomePage;