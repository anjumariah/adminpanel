import React from 'react'
import { fetchAdmin } from '../../redux/action'
import { useEffect } from 'react'
import { connect } from 'react-redux'
 import './adminpanel.css'
 import { useHistory } from 'react-router-dom';
 
 import { makeStyles } from '@material-ui/core/styles';  
 import Paper from '@material-ui/core/Paper';  
 import Table from '@material-ui/core/Table';  
 import TableBody from '@material-ui/core/TableBody';  
 import TableCell from '@material-ui/core/TableCell';  
 import TableContainer from '@material-ui/core/TableContainer';  
 import TableHead from '@material-ui/core/TableHead';  
 import TablePagination from '@material-ui/core/TablePagination';  
 import TableRow from '@material-ui/core/TableRow';  
import { Link } from 'react-router-dom'
   
 

 const useStyles = makeStyles({  
    root: {  
      width: '100%',  
    },  
    container: {  
      maxHeight: 440,  
    },  
  }); 


function Adminpanel({adminData,fetchAdmin}) {
    const history = useHistory(); 
    const classes = useStyles();
    useEffect( () => {
        fetchAdmin()
      }, [])
  console.log(adminData.admin,"STATE ADMIN");


  return (

<Paper className={classes.root}>  
      <TableContainer className={classes.container}>  
        <Table stickyHeader aria-label="sticky table">  
        <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              <TableCell >Name</TableCell>  
              <TableCell >Date</TableCell>  
              <TableCell >Time</TableCell>  
              <TableCell >Doctor</TableCell>  
              <TableCell >IdProof</TableCell>  
              <TableCell >edit</TableCell> 
            </TableRow>  
          </TableHead>  
          <TableBody>  
          {adminData.admin &&
        adminData.admin.map((val, key) => { 
              return (  
           <TableRow key={key} >  
                <TableCell component="th" scope="row">  
                  {val.id}  
                </TableCell>  
                <TableCell >{val.name}</TableCell>  
                <TableCell >{val.date}</TableCell>  
                <TableCell >{val.time}</TableCell>  
                <TableCell >{val.physician}</TableCell>  
                <TableCell >{val.idProof}</TableCell> 
                <TableCell ><Link to={`/user/${val.id}`}>View Patient</Link></TableCell>  
              </TableRow>  
                 
              );  
            })}  
          </TableBody>  
        </Table>  
      </TableContainer>
</Paper>

  ) }

const mapStateToProps = (state) => {
    console.log( state,"==========================state in ADMIN----------------------");
    console.log(  state.adminReducerItem.adminData," ADMIN from STATE----------------------");
    
    return {
     
      adminData : state.adminReducerItem.adminData
  
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => { 
    return {
      fetchAdmin : () => dispatch(fetchAdmin()),
    
    }
  }  
  export default connect(mapStateToProps,mapDispatchToProps)(Adminpanel)

