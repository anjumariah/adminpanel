import axios from "axios"
import { FETCH_ADMIN_REQUEST,FETCH_ADMIN_SUCCESS,FETCH_ADMIN_FAILURE } from "./type"

 

export const fetchAdminDataRequest = () => {
    return {
        type : FETCH_ADMIN_REQUEST
    }
}

    const fetchAdminDataSuccess =( adminData)=> {
    return {
        type :FETCH_ADMIN_SUCCESS,
        payload : adminData
    }
}

 const fetchAdminDataFailure = (error) => {
    return {
        type : FETCH_ADMIN_FAILURE,
        payload : error
}
}


export const fetchAdmin = () => {
   
    
        return (dispatch) => {
            dispatch(fetchAdminDataRequest)
            axios(
                {
                    method:'get',
                    url:'http://localhost:3005/admin/adminpanel',
                    
                }
                )
            .then((response) => {
              console.log(response,"--------ADMIN response in header----------");
              const adminData =response.data;
            //   dispatch(setAdmin);
              console.log(adminData,"----ADMIN--data----");
              
              dispatch(fetchAdminDataSuccess(adminData))
              
            })
            .catch (error => {
                const errorMsg = error.message
                dispatch(fetchAdminDataFailure(errorMsg))
            })
        }
    
    
}

