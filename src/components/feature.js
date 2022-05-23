import { motion } from "framer-motion";
import styled from "styled-components";

import witcher from '../img/witcher.png'
import trailer from '../img/witcher-trailer.png'
import close from '../img/close-blk.svg'

import { featureScroll } from "./animation";

import { useScroll } from "../scroll";

const Vid = () =>{
    document.getElementById('vid').style.display="initial"
    document.getElementById('button').style.display="initial"
    //to add iframe src
    document.getElementById('vid').src="https://www.youtube-nocookie.com/embed/ndl1W4ltcmg?"
}

const VidClose = () =>{
    document.getElementById('vid').style.display="none"
    document.getElementById('button').style.display="none"
    //to clear iframe src
    document.getElementById('vid').src=""

}


const Feature = () => {
    const[element,controls] = useScroll();
return(
<StyledFeature variants={featureScroll} animate={controls} initial="hidden" ref={element}>
<MovieDeets>
<h1>the witcher</h1>
<p>The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.</p>
<Trailer onClick={Vid}>
<div className="trailer-button">
    <p>watch trailer</p>
     <div className="background">
         </div>
         </div>
</Trailer>
</MovieDeets>
<CrewDeets>
<div className="crew-flex">
<div className="creator">
<h1>Creator</h1>
<p>Lauren Schmidt</p>
</div>
<div className="cast">
<h1>Stars</h1>
<ul className="stars">
<li>Henry Cavill</li>
<li>Anya Chalotra</li>
<li>Freya Allen</li>
</ul>
</div>
</div>

<ul className="genres">
    <li>Action</li>
    <li>Adventure</li>
    <li>Drama</li>
</ul>
</CrewDeets>

<TagDeets>
<p>1/5</p>
</TagDeets>

<iframe id="vid" width="560" height="315" src="https://www.youtube-nocookie.com/embed/ndl1W4ltcmg?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<img id="button" src={close} alt="" onClick={VidClose}/>
</StyledFeature>
)
}

const StyledFeature = styled(motion.div)`
width:1100px ;
height:500px ;
position:absolute ;
z-index:2;
background-color:red ;
background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${witcher}) ;
background-size:cover ;
top:12% ;
left: 50%;
transform: translateX(-50%);
display:flex ;

iframe{
    width:100% ;
    height:100% ;
    position:absolute ;
    z-index:4;
}

img{
    position:absolute ;
    left:101% ;
    top:0 ;
    width:40px ;
}

iframe,img{
    display:none ;
    cursor: pointer;
}
`
const MovieDeets = styled(motion.div)`
width:70% ;
height:100% ;
border:1px solid #d1d1d133 ;
margin-left:20px ;

h1{
    text-transform:uppercase ;
    font-family:'NetflixSansBold', sans-serif ;
    font-size:40px ;
    margin-top:150px ;
    line-height:55px ;
}
p{
    font-size:15px ;
    width:60% ;
    line-height:17px ;
    font-family:'NetflixSansMedium', sans-serif ;
}
`

const Trailer = styled(motion.div)`
width:200px ;
height:120px ;
background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${trailer}) ;
background-size:cover ;
margin-top:80px ;
cursor: pointer;


div{
    height:30px ;
    width:auto ;
    p{
        text-transform:uppercase ;
    font-size:18px ;
    text-align:center ;
    padding-top:5px ;
    height:30px ;
    width:150px ;
    margin-top:90px ;
    border-bottom:2px solid white ;
    position:absolute ;
    z-index:2;
    font-family: 'NetflixSansRegular', sans-serif;
    }

    .background{
        height:30px ;
    width:150px ;
    position:absolute ;
    z-index:1;
    background-color:black ;
    margin-top:90px ;
    left:-100% ;
    }
}


&:hover{
    .background{
     left:1.91% ;
     transition:.6s ease-out ;
     transition-delay:0 ;
    }
}
`

const CrewDeets = styled(motion.div)`
width: 25%;
height:100% ;
border:1px solid #d1d1d133 ;

.crew-flex{
    display:flex ;
    justify-content:space-between ;
  margin-top:100% ;
    h1{
        font-size:15px ;
        font-family:'NetflixSansBold',sans-serif ;
    }

    ul{
    list-style:none;
}


.cast{
    display:flex ;
    flex-direction:column ;
text-align:right ;
}

}

.genres{
    list-style:none ;
    display:flex ;
    justify-content:space-between ;
    width:70% ;
    margin-top:80px ;
    font-family:'NetflixSansMedium', sans-serif ;
    font-size:15px ;
}


`
const TagDeets = styled(motion.div)`
width: 5%;
height:100% ;
padding-top: 40%;

p{
    transform:rotate(-90deg) ;
    font-family:'NetflixSansMedium', sans-serif ;
    letter-spacing:5px ;
    font-size:15px ;
}
`

export default Feature;