import { motion } from "framer-motion";
import styled from "styled-components";

import navalny from '../img/navalny.png'
import nightmare from '../img/nightmare-alley.png'
import archive from '../img/archive01.png'

import { showScroll } from "./animation";

import { useScroll } from "../scroll";



const Menu = () => {
    const[element,controls] = useScroll();
return(
<StyledMenu>
<div className="upcoming">
    <div className="header">
    <h1>upcoming</h1>
    <span>12</span>
    </div>
    <motion.div className="img" variants={showScroll} animate={controls} initial="hidden" ref={element}/>
    <motion.div className="img-mini" variants={showScroll} animate={controls} initial="hidden" ref={element}/> 
    <button>see all</button>
</div>
<div className="popular">
<div className="header">
    <h1>popular</h1>
    <span>12</span>
    </div>
    <motion.div className="img" variants={showScroll} animate={controls} initial="hidden" ref={element}/>
    <motion.div className="img-mini" variants={showScroll} animate={controls} initial="hidden" ref={element}/> 
    <button>see all</button>
</div>
<div className="latest">
<div className="header">
    <h1>latest</h1>
    <span>12</span>
    </div>
    <motion.div className="img" variants={showScroll} animate={controls} initial="hidden" ref={element}/>
    <motion.div className="img-mini" variants={showScroll} animate={controls} initial="hidden" ref={element}/> 
    <button>see all</button>
</div>
</StyledMenu>
)
}

const StyledMenu = styled(motion.div)`
width:100vw ;
height:700px ;
position:absolute ;
z-index:1;
top: 80%;
background-color:black ;
display:flex ;
overflow:hidden ;

h1,span{
    text-transform:uppercase ;
    font-size:20px ;
    font-weight:normal ;
}

div{
    flex:1 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
}

.header{
    width:320px ;
    margin:0 auto ;
    margin-top:85px ;
    position:absolute ;
    z-index:3 ;
    display:flex ;
    flex-direction:row ;
    justify-content:space-between ;
    border-bottom:1.5px solid white ;
    padding-top:0 ;
    padding-bottom:10px ;
}

button{
width:320px ;
height:40px ;
position:absolute ;
margin-top: 645px;
border:1px solid white ;
background:none ;
color:white ;
font-size:16px ;
text-transform:uppercase ;
cursor: pointer;

&:hover{
    background:white ;
    color:black ;
    transition:.2s ease-in ;
}
}


.img{
    width:100% ;
    height:100% ;
}
.img-mini{
    width:320px ;
    height:70% ;
    background-color:white ;
    position:absolute ;
    margin-top:150px ;
}


.upcoming .img{
    background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${archive}) ;
    background-position:center ;
    background-size:cover ;
}

.upcoming .img-mini{
    background:url(${archive}) ;
    background-position:center ;
    background-size:cover ;
}

.popular .img{
    background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${nightmare}) ;
    background-position:center ;
    background-size:cover ;

}

.popular .img-mini{
    background:url(${nightmare}) ;
    background-position:center ;
    background-size:cover ;
}
.latest .img{
    background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${navalny}) ;
    background-position:center ;
    background-size:cover ;

}

.latest .img-mini{
    background:url(${navalny}) ;
    background-position:center ;
    background-size:cover ;
}

`



export default Menu;