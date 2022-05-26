import { motion } from "framer-motion";
import styled from "styled-components";

import React,{ useEffect ,useState} from "react";


//components
import Menu from "../components/menu";
import Feature from "../components/feature";
import BackgroundImg from "../components/bgimg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { loadPopular } from "../actions/homeAction";


import circlewhite from '../img/circlewhite.svg'
import arrowl from '../img/arrowl.svg'
import arrowr from '../img/arrowr.svg'



const Home = () => {
    //fetch games
    const dispatch = useDispatch();

   

    useEffect(() => {
        dispatch(loadPopular());
    }, [dispatch]);

    //get that data back. Note: make sure to not add parenthesis if it is just onename 
    const popular= useSelector((state)=>state.home.popular) 
    //console.log(popular.length)
    //position variable 
    const [position,setPosition] = useState(0)


    //change position
    const previous = () =>{
        if(position<=0){
            //position is set to 5 forillusion of cycling
            setPosition(position+4)
        }else{
            setPosition(position -1)
        }

        console.log(position)
    }

    const next = () =>{
        if(position>=4){
            //position is set to 5 forillusion of cycling
            setPosition(position-4)
        }else{
            setPosition(position +1)
        }

        console.log(position)
    }


    
    //set it to display if popular has a length. this will indicate that 
if(popular.length!==0){
    return(
        <StyledHome>
             <Selected>
   <img id="arrow" src={arrowl} alt="" onClick={()=>previous()}/>
   <img src={circlewhite} alt="" />
   <img id="arrow" src={arrowr} alt="" onClick={()=>next()}/>
    </Selected>
    <BackgroundImg
     img= {popular[position].backdrop_path}/>
    
     <Menu/>
     <Feature/>
        </StyledHome>
     
    )
}
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

const Selected = styled(motion.div)`
width:200px ;
height:auto ;
position:absolute ;
z-index:5;
left: 50%;
top:80% ;
transform: translateX(-50%);
display:flex ;
justify-content:space-between ;

img{
    width:15px ;
    cursor: pointer;
}

#arrow{
    width:40px ;
}
`






export default Home;