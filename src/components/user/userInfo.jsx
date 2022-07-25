import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/user/action'

function Userinfo({userData,fetchUser}) {

useEffect( () => {
    fetchUser(id)
},[]);
   
const userArray=userData.admin
const {id} = useParams();
// const userId =useParams(id)
// console.log("userId",userId);
// fetchUser(userId)
// const arr = userArray.filter(function(item){
//   return (item.id) === (userId.id*1)
 
// })
// console.log(arr,"arr");
  return (
    <div>
       {/* {
        arr.map((val, key) => { 
              return (               
              <div key={key}>
                <h4>Booking Deails Patient Id : {val.id}</h4>
                <p>Patinet Name: {val.name}</p>
                <p>Consulting Doctor:{val.physician} </p>
                <p>Booked Date : {val.date}</p>
             <p>Consulting Time :{val.time} </p>
            <p>idProof :<img src={val.idProof} alt="error"/></p>
              </div>
                 
              );  
            })}       */}

            <h2>Hello</h2>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log( state,"==========================state in USER----------------------");
  console.log(  state.userReducerItem.userData," USER from STATE----------------------");
  
  return {
   
    userData : state.userReducerItem

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

