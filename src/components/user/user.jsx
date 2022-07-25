import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchAdmin } from '../../redux/action'
import { connect } from 'react-redux'

function User({adminData,fetchAdmin}) {

useEffect( () => {
  fetchAdmin()
}, [])
   
const userArray=adminData.admin
const {id} = useParams();
const userId =useParams(id)
const arr = userArray.filter(function(item){
  return (item.id) === (userId.id*1)
 
})
// console.log(arr,"arr");
  return (
    <div>
       {
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
            })}      
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log( state,"==========================state in USER----------------------");
  console.log(  state.adminReducerItem.adminData," USER from STATE----------------------");
  
  return {
   
    adminData : state.adminReducerItem.adminData

  }
  
}

const mapDispatchToProps = (dispatch) => { 
  return {
    fetchAdmin : () => dispatch(fetchAdmin()),
  
  }
}  
export default connect(mapStateToProps,mapDispatchToProps)(User)

