const initState = {
popular:[],
currentMovie:[],
currentShow:[],
credits:[]
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
            case 'FETCH_CREDITS':
            return{
                ...state,
                credits:action.payload.credits
            };
         default:
            return { ...state }
    }
}