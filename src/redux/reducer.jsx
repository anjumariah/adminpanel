import { FETCH_ADMIN_REQUEST, FETCH_ADMIN_FAILURE,FETCH_ADMIN_SUCCESS} from "./type" 



const initialState = {
    loading :false,
    adminData : [],
    error: ''
}

const adminReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADMIN_REQUEST :
            return {
                ...state,
                loading:true
            }
        case FETCH_ADMIN_SUCCESS :
             
            return{
                loading :false,
                adminData :action.payload,
                error: ''
            }
            
        case FETCH_ADMIN_FAILURE:
            return {
                loading: false,
                adminData : [],
                error: action.payload

            } 
        default : return state
        
}
}
export default adminReducer   