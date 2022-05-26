import axios from "axios";
import { popularURL } from "../api";

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