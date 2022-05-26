import {key} from '../src/key'


//base url
const base_url = 'https://api.themoviedb.org/3/';

//custom requests

//Popular 
const trending = `trending/all/day?api_key=${key}`

export const popularURL = () =>`${base_url}${trending}`