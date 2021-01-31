import React,{useEffect,useState} from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue, blueGrey } from '@material-ui/core/colors';

const axios = require("axios")


  

  const MyTable = () => {

const url = "https://forbit.tech/movizo/movies"
    
 const [movies, setmovies] = useState([])

useEffect(() => {
    axios.get(url)
    .then((response)=>{
        
       setmovies(response.data)
       
    })

})

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
       
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.black,
          },
        },
      }))(TableRow);
      

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        head: {
            backgroundColor: blueGrey,
            
          },
      });
      
     
      
      
      

    const classes = useStyles();
      return ( 

        <TableContainer component={Paper} style={{margin:10}}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow >
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Release_Date</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              
             
            </TableRow>
          </TableHead>

          <TableBody>
            {movies.map((movies) => (
              <TableRow key={movies.title}>
                <TableCell component="th" scope="row">
                  {movies.title}
                </TableCell>
                
                <TableCell align="right">{movies.release_date}</TableCell>
                <TableCell align="right">{movies.imdb_rating}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

       );
  }
   
  export default MyTable;

