import { motion } from "framer-motion";
import styled from "styled-components";

import React,{ useEffect ,useState} from "react";


//components
import Menu from "../components/menu";
import Feature from "../components/feature";
import BackgroundImg from "../components/bgimg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { loadPopular, loadCurrMovie,loadCurrShow,loadCredits } from "../actions/homeAction";


import circlewhite from '../img/circlewhite.svg'
import arrowl from '../img/arrowl.svg'
import arrowr from '../img/arrowr.svg'



const Home = () => {
  
    //get that data back. Note: make sure to not add parenthesis if it is just onename 
    const popular= useSelector((state)=>state.home.popular) 



    //console.log(popular.length)
    //position variable 
    const [currentState,setCurrentState] = useState(0)


      

    
   


      //fetch games
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(loadPopular());
          
      }, [dispatch]);
  


  


    //change position
    const previous = () =>{
        if(currentState<=0){
            //position is set to 4 forillusion of cycling
            setCurrentState(4)
        }else{
            //decrement
            setCurrentState(currentState-1)
        }

        //console.log(position)
    }

    const next = () =>{
        if(currentState>=4){
            //position is set to  forillusion of cycling
            setCurrentState(0)
        }else{
            //increment
            setCurrentState(currentState+1)
        }

        //console.log(position)
    }





    
    //set it to display if popular has a length. this will indicate that 
if(popular.length!==0){
//console.log(popular[currentState].id)
//to load movie,show and credit states
dispatch(loadCredits(popular[currentState].id));
    if(popular[currentState].media_type==='movie'){dispatch(loadCurrMovie(popular[currentState].id)); }
    if(popular[currentState].media_type==='tv'){dispatch(loadCurrShow(popular[currentState].id)); }
    return(
        <StyledHome>
             <Selected>
   <img id="arrow" src={arrowl} alt="" onClick={()=>previous()}/>
   <img src={circlewhite} alt="" />
   <img id="arrow" src={arrowr} alt="" onClick={()=>next()}/>
    </Selected>
    <BackgroundImg
     img= {popular[currentState].backdrop_path}
    />
    
     <Menu/>
     <Feature 
     img= {popular[currentState].backdrop_path}
     herotxt = {popular[currentState].original_title || popular[currentState].name}
     description= {popular[currentState].overview}
     media={popular[currentState].media_type}
     />
     
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