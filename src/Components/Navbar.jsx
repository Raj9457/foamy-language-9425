import { Center,Flex, Spacer,Box} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import "./Navbar.css";
import Simple from './Nav2';
import WithSubnavigation from './Nav';
import {Link} from "react-router-dom"




function Navbar(){
    return (<div>
        <Center bg="#ffd166" height="8%" padding="0.8%" fontSize="13px">
            Spring into Sale | Up to 60% off | Now Live | <span style={{color:"red"}}>  Click to shop!</span> 
        </Center>
        <Flex fontSize="13px" padding="0px 15%" marginTop={"10px"}>
            <Box gap="20px" style={{display:"flex" }}>
                <Center gap="5px" className="navbar">
                    <QuestionOutlineIcon/>
                    <p>Help</p>

                </Center>
                <Center className="navbar">
                    <img src="https://static.thenounproject.com/png/3025366-200.png" width="25px" alt="" />
                    <p>Track Order</p>
                </Center>
            </Box>
            <Spacer />
            <Box gap="20px" style={{display:"flex"}} >
                <Link to="sofa"><p className="navbar">Stores</p></Link>
                <Link to="dealzone"><p className="navbar">Bulk Orders</p></Link>
                <Link to="trending"><p className="navbar">Gift Cards</p></Link>
                <Link to="interior"><p className="navbar">UL Services</p></Link>             
                
                
            </Box>
        </Flex>
        <WithSubnavigation/>
        <Simple/>
        
        
        
        
        
    </div>
    )
}
export default Navbar;
