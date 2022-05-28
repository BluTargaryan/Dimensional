import axios from "axios";
import { popularURL, movieURL,showURL,creditsURL } from "../api";

//action creator
export const loadPopular = () => async (dispatch)=>{
    //fetch axios
    const popularData = await axios.get(popularURL());
    dispatch({
        type:"FETCH_POPULAR",
        payload:{
            popular:popularData.data.results
        }
    });
}

export const loadCurrMovie = (x) => async (dispatch)=>{
    //fetch axios
    const currMovieData = await axios.get(movieURL(x));
    dispatch({
        type:"FETCH_MOVIE",
        payload:{
            currentMovie:currMovieData.data
        }
    });
}

export const loadCurrShow = (y) => async (dispatch)=>{
    //fetch axios
    const currShowData = await axios.get(showURL(y));
    dispatch({
        type:"FETCH_SHOW",
        payload:{
            currentShow:currShowData.data
        }
    });
}
export const loadCredits = (z) => async (dispatch)=>{
    //fetch axios
    const creditsData= await axios.get(creditsURL(z));
    console.log(z)
    dispatch({
        type:"FETCH_CREDITS",
        payload:{
            credits:creditsData.data
        }
    });
}