import {key} from '../src/key'


//base url
const base_url = 'https://api.themoviedb.org/3/';

//custom requests

//Popular 
const trending = `trending/all/day?api_key=${key}`
//Movies


export const popularURL = () =>`${base_url}${trending}`

export const movieURL = (i) => `${base_url}movie/${i}?api_key=${key}&language=en-US&append_to_response=videos,images&include_image_language=en,null`


export const showURL = (i) => `${base_url}tv/${i}?api_key=${key}&language=en-US&append_to_response=videos,images&include_image_language=en,null`

export const moviecreditsURL = (i) =>`${base_url}movie/${i}/credits?api_key=${key}&language=en-US`

export const showcreditsURL = (i) =>`${base_url}tv/${i}/credits?api_key=${key}&language=en-US`