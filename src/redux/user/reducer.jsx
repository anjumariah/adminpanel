import { FETCH_USER_REQUEST, FETCH_USER_FAILURE,FETCH_USER_SUCCESS} from "../user/types" 



const initialState = {
    loading :false,
    userData : [],
    error: ''
}

const userReducer = ( state = initialState, action) => {
    switch(action.type) {
        // case FETCH_USER_REQUEST :
        //     return {
        //         ...state,
        //         loading:true
        //     }
        case FETCH_USER_SUCCESS :
             
            return{
                loading :false,
                userData :action.payload,
                error: ''
            }
            
        // case FETCH_USER_FAILURE:
        //     return {
        //         loading: false,
        //         userData : [],
        //         error: action.payload

        //     } 
        default : return state
        
}
}
export default userReducer   