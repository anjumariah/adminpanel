import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/user/action'

function Userinfo({userData,fetchUser}) {

useEffect( () => {
    fetchUser(id)
},[]);
   
const userArray=userData.userResponse
console.log(userArray);
const {id} = useParams();
  return (
    <div>
       {
        userData.userResponse &&
        userData.userResponse.map((val, key) => { 
              return (               
              <div key={key}>
                <h4>Booking Deails Patient Id : {val.id}</h4>
                <p>Patinet Name: {val.name}</p>
                <p>Consulting Doctor:{val.physician} </p>
                <p>Booked Date : {val.date}</p>
             <p>Consulting Time :{val.time} </p>
            {/* <p>idProof :<img src="http://localhost:3005/img.png" alt="error"/></p> */}
            <p>idProof :<img src={`http://localhost:3005/${val.idProof}`} alt="error"/></p>
              </div>                 
              );  
            })}                 
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log( state,"==========================state in USER----------------------");
  console.log(  state.userReducerItem.userData," USER from STATE now changes  id ----------------------");
  
  return {
   
    userData : state.userReducerItem.userData

  }
  
}

// const mapDispatchToProps = (dispatch) => { 
//     console.log("dispatch",dispatch);
//   return {
//     fetchUser : ()=> dispatch(fetchUser()),
  
//   }
// } 
const mapDispatchToProps={
    fetchUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Userinfo)

