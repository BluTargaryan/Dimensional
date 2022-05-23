import { motion } from "framer-motion";
import styled from "styled-components";

import witcher from '../img/witcher.png'

import Menu from "../components/menu";
import Feature from "../components/feature";

const Home = () => {
return(
    <StyledHome>
 <BackgroundImg/>
 <Menu/>
 <Feature/>
    </StyledHome>
)
}


const StyledHome = styled(motion.div)`
width:100% ;
height:100vh ;
background-color:blue ;
top:0 ;
left:0 ;
position:absolute ;
z-index:0;
`

const BackgroundImg = styled(motion.div)`
width:100% ;
height:100% ;
background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${witcher}) ;
background-size:cover ;
position:absolute ;
z-index:0;
`




export default Home;