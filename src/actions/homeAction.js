import axios from "axios";
import { popularURL, movieURL,showURL,currentSeasonURL,currentSeasonVidsURL,moviecreditsURL, showcreditsURL, upcomingURL } from "../api";

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
    console.log(y)
    dispatch({
        type:"FETCH_SHOW",
        payload:{
            currentShow:currShowData.data
        }
    });
}

export const loadCurrSeason = (y,z) => async (dispatch)=>{
    //fetch axios
    const currSeasonData = await axios.get(currentSeasonURL(y,z));
    console.log(y)
    dispatch({
        type:"FETCH_CURRENT_SEASON",
        payload:{
            currentSeason:currSeasonData.data
        }
    });
}

export const loadCurrSeasonVids = (y,z) => async (dispatch)=>{
    //fetch axios
    const currSeasonVidsData = await axios.get(currentSeasonVidsURL(y,z));
    console.log(y)
    dispatch({
        type:"FETCH_CURRENT_SEASON_VIDS",
        payload:{
            currentSeasonVids:currSeasonVidsData.data
        }
    });
}


export const loadMovieCredits = (z) => async (dispatch)=>{
    //fetch axios
    const moviecreditsData= await axios.get(moviecreditsURL(z));
    dispatch({
        type:"FETCH_MOVIE_CREDITS",
        payload:{
            moviecredits:moviecreditsData.data
        }
    });
}
export const loadShowCredits = (z) => async (dispatch)=>{
    //fetch axios
    const showcreditsData= await axios.get(showcreditsURL(z));
    
    dispatch({
        type:"FETCH_SHOW_CREDITS",
        payload:{
            showcredits:showcreditsData.data
        }
    });
}
export const loadUpcoming = () => async (dispatch)=>{
    //fetch axios
    const upcomingData= await axios.get(upcomingURL());
    
    dispatch({
        type:"FETCH_UPCOMING",
        payload:{
            upcoming:upcomingData.data
        }
    });
}
export const load = () => async (dispatch)=>{
    //fetch axios
    const upcomingData= await axios.get(upcomingURL());
    
    dispatch({
        type:"FETCH_UPCOMING",
        payload:{
            upcoming:upcomingData.data
        }
    });
}