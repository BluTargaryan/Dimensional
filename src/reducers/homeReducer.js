const initState = {
popular:[],
currentMovie:[],
currentShow:[],
moviecredits:[],
showcredits:[]
};

export const homeReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_POPULAR':
            return{
                ...state,
                popular:action.payload.popular
            };
            case 'FETCH_MOVIE':
            return{
                ...state,
                currentMovie:action.payload.currentMovie
            };
            case 'FETCH_SHOW':
            return{
                ...state,
                currentShow:action.payload.currentShow
            };
            case 'FETCH_MOVIE_CREDITS':
            return{
                ...state,
                moviecredits:action.payload.moviecredits
            };
            case 'FETCH_SHOW_CREDITS':
            return{
                ...state,
                showcredits:action.payload.showcredits
            };
         default:
            return { ...state }
    }
}