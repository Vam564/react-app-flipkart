
const reducerMyShow = (state, action) => {
    const {type,  context} =action
    const {movieList,input,movieName} = state;
    switch (type) {
        case 'API_SUCCESS':{
            return {
                ...state,
                ...context
            }
        }
        case 'HANDLE_INPUT':{
            const {target:{value}} = context
            
            return {
                ...state,
                input:value
            }
        }
        case 'SEARCH':{
           
            return {
                ...state,
                movieName:input
            }
        }
       
        default: {
            return state    
    }
        }
}
 
export default reducerMyShow