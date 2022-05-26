import { motion } from "framer-motion";
import styled from "styled-components";

const BackgroundImg = ({img}) => {
    return(
        <StyledBackgroundImg>
           <div id="shade"></div>
    <img src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
    </StyledBackgroundImg>
    )
}

const StyledBackgroundImg = styled(motion.div)`
width:100% ;
height:100% ;
position:absolute ;
z-index:0;

img{
    width:100% ;
}

#shade{
    width:100% ;
height:100% ;
position:absolute ;
z-index:1;
top:0 ;
left:0 ;
background:#00000052 ;
}
`

export default BackgroundImg