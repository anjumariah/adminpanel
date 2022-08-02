import axios from "axios"
import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE } from '../user/types'

 

// export const fetchUserDataRequest = () => {
//     return {
//         type : FETCH_USER_REQUEST
//     }
// } 

    const fetchUserDataSuccess =( userData)=> {
    return {
        type :FETCH_USER_SUCCESS,
        payload : userData
    }
}

//  const fetchUserDataFailure = (error) => {
//     return {
//         type : FETCH_USER_FAILURE,
//         payload : error
// }
// }



export const fetchUser = (current_id) => {
   console.log(current_id,"fetchUser ID");
    
        return (dispatch) => {
           
            axios(
                {
                    method:'get',
                    url:`http://localhost:3005/use/user?id=${current_id}`,
                  
                }
                )
            .then((response) => {
              console.log(response,"--------USER PARAMS ----------");
              const userData =response.data;
            //   dispatch(setAdmin);
              console.log(userData,"----USER PARAMS--data----");
               
              dispatch(fetchUserDataSuccess(userData))
              
            }) 
            .catch (error => {
                const errorMsg = error.message
                console.log(errorMsg);
               
            })
        }
    
    
}

