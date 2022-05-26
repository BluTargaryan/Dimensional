const initState = {
popular:[]
};

export const homeReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_POPULAR':
            return{
                ...state,
                popular:action.payload.popular
            };
         default:
            return { ...state }
    }
}