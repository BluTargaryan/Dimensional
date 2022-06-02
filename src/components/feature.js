import { motion } from "framer-motion";
import styled from "styled-components";

import close from '../img/close-blk.svg'

import { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

import { loadCurrSeason, loadCurrSeasonVids } from "../actions/homeAction";


import { featureScroll } from "./animation";

import { useScroll } from "../scroll";






const Feature = ({img,herotxt,description,media,position}) => {
    const currentMovie= useSelector((state)=>state.home.currentMovie) 
    const currentShow= useSelector((state)=>state.home.currentShow) 
    const movieCredits= useSelector((state)=>state.home.moviecredits) 
    const showCredits= useSelector((state)=>state.home.showcredits) 


    const dispatch = useDispatch();
    if(currentShow.length!==0){
        //to load show current season (vids too)
dispatch(loadCurrSeason((currentShow.id),(currentShow.seasons.length)))
dispatch(loadCurrSeasonVids((currentShow.id),(currentShow.seasons.length)))
    }

const[element,controls] = useScroll();

    let movietrailer_image,showtrailer_image,movietrailer_vid,showtrailer_vid=null
    
    //checks if both states are ready before assignment. assigns both trailer img and vid
    if(currentMovie.length!==0){
         movietrailer_image=currentMovie.images.backdrops[1].file_path
         let videos = currentMovie.videos.results
         videos.map(video=>{
             if(video.type==="Trailer"){
               movietrailer_vid=video.key
               return null
             }
             return null
         }

         )
    }
    if(currentShow.length!==0){
        showtrailer_image=currentShow.images.backdrops[1].file_path

        
        let videos = currentShow.videos.results
        videos.map(video=>{
            if(video.type==="Trailer"){
              showtrailer_vid=video.key
              return null
            }
            return null
        }

        )
    }

    //to open vid
const Vid = () =>{
    document.getElementById('vid').style.display="initial"
    document.getElementById('button').style.display="initial"
    //to add iframe src
    if(currentMovie.length!==0 && media==="movie"){
        document.getElementById('vid').src=`https://www.youtube-nocookie.com/embed/${movietrailer_vid}?`
    }
    if(currentShow.length!==0 && media==="tv"){
        document.getElementById('vid').src=`https://www.youtube-nocookie.com/embed/${showtrailer_vid}?`
    }
   
}

//to close vid
const VidClose = () =>{
    document.getElementById('vid').style.display="none"
    document.getElementById('button').style.display="none"
    //to clear iframe src
    document.getElementById('vid').src=""

}

//useEffect done to run movie or show check after render
    useEffect(() => {
        if(media==="movie"){
            document.getElementById('movietrail').style.display="initial"
            document.getElementById('showtrail').style.display="none"
        }
        if(media==="tv"){
            document.getElementById('movietrail').style.display="none"
            document.getElementById('showtrail').style.display="initial"
        }
        
    }, [media]);
  
    //to store cast to display in return statement
let cast =[]
if(movieCredits.length!==0 && media==="movie"){
    //make sure cast is empty
    cast=[]
    //if arraylength is up to 2
    if(movieCredits.cast.length>=3){
     for(let i=0;i<=2;i++){
        cast.push(movieCredits.cast[i].name)
     }
    }else if(movieCredits.cast.length>=2){
        for(let i=0;i<=(movieCredits.cast.length);i++){
            cast.push(movieCredits.cast[i].name)
         }
    }else{
        cast.push(movieCredits.cast[0].name)
    }

}
if(showCredits.length!==0 && media==="tv"){
     //make sure cast is empty
     cast=[]

         //if arraylength is up to 2
    if(showCredits.cast.length>=2){
        for(let i=0;i<=2;i++){
           cast.push(showCredits.cast[i].name)
        }
    }else if(showCredits.cast.length>=2){
        for(let i=0;i<=(showCredits.cast.length);i++){
            cast.push(showCredits.cast[i].name)
         }
    }else{
        cast.push(showCredits.cast[0].name)
    }

}


    
    


return(
<StyledFeature variants={featureScroll} animate={controls} initial="hidden" ref={element} style={{background: `url(https://image.tmdb.org/t/p/original${img})`}}>

<div id="shade"></div>

<MovieDeets>

<h1>{herotxt}</h1>
<p>{description}</p>
<Trailer id="movietrail" onClick={Vid} style={{background: `url(https://image.tmdb.org/t/p/original${movietrailer_image})`}}>
<div className="trailer-button">
    <p>watch trailer</p>
     <div className="background">
         </div>
         </div>
</Trailer>
<Trailer id="showtrail" onClick={Vid} style={{background: `url(https://image.tmdb.org/t/p/original${showtrailer_image})`}}>
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

 {(currentMovie.length!==0&& media==="movie")&&  (currentMovie.production_companies.map(company=>{
     return <p>{company.name}</p>
 }))
}




{(currentShow.length!==0&&media==="tv")&&currentShow.created_by.map(creator=>{
    return <p>{creator.name}</p>
})}

{(currentShow.length!==0&&media==="tv")&&currentShow.production_companies[0].name}

</div>
<div className="cast">
<h1>Stars</h1>
<ul className="stars">
{
  cast.map(actor=>{
     return <li>{actor}</li>
  })
}
</ul>
</div>
</div>

<ul className="genres">
{(currentMovie.length!==0&& media==="movie")&& currentMovie.genres.map(genre=>{
    return <li id="moviegenre">{genre.name}</li>
})}

{(currentShow.length!==0&&media==="tv")&&currentShow.genres.map(genre=>{
    return <li id="showgenre">{genre.name}</li>
})}
</ul>
</CrewDeets>

<TagDeets>
<p>{position}/5</p>
</TagDeets>



<iframe id="vid" className="movie_vid" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<img id="button" src={close} alt="" onClick={VidClose}/>
</StyledFeature>
)



}

const StyledFeature = styled(motion.div)`
width:1100px ;
height:500px ;
position:absolute ;
z-index:2;
background-size:cover !important ;
top:12% ;
left: 50%;
transform: translateX(-50%);
display:flex ;
cur

#shade{
    width:100% ;
height:100% ;
position:absolute ;
z-index:-1;
top:0 ;
left:0 ;
background:#00000018 ;
}

iframe{
    width:100% ;
    height:100% ;
    position:absolute ;
    z-index:4;
}

#button{
    position:absolute ;
    left:101% ;
    top:0 ;
    width:40px ;
}

iframe,#button{
    display:none ;
    cursor: pointer;
}
`


const MovieDeets = styled(motion.div)`
width:65% ;
height:100% ;
border:1px solid #d1d1d133 ;
margin-left:20px ;

h1{
    text-transform:uppercase ;
    font-family:'NetflixSansBold', sans-serif ;
    font-size:30px ;
    margin-top:150px ;
    margin-bottom:10px ;
}
p{
    font-size:15px ;
    width:60% ;
    line-height:17px ;
    font-family:'NetflixSansMedium', sans-serif ;
    overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
}
`

const Trailer = styled(motion.div)`
width:200px ;
height:120px ;
background-size:cover !important;
top:70% ;
cursor: pointer;
position:absolute ;
padding:0 ;


div{
    height:30px ;
    width:200px ;
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
    pointer-events:none
    }
}


&:hover{
    .background{
     left:0% ;
     transition:.6s ease-out ;
     transition-delay:0 ;
    }
}
`

const CrewDeets = styled(motion.div)`
width: 30%;
height:100% ;
border:1px solid #d1d1d133 ;

.crew-flex{
    display:flex ;
    justify-content:space-between ;
  margin-top:270px ;
    h1{
        font-size:15px ;
        font-family:'NetflixSansBold',sans-serif ;
    }

    ul{
    list-style:none;
}

.creator{
    width:50% ;
}
.cast{
    width:50% ;
    display:flex ;
    flex-direction:column ;
text-align:right ;
}

}

.genres{
    list-style:none ;
    display:flex ;
    flex-wrap:wrap ;
    justify-content:space-between ;
    width:100% ;
    height:40px ;
    margin-top:80px ;
    font-family:'NetflixSansMedium', sans-serif ;
    font-size:15px ;

    li{
        line-height:20px ;
    }
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