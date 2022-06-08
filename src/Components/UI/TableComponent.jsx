import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AuthenticationSliceActions } from "../../Redux/AuthenticationSlice";
import { styled } from "@mui/material/styles";
import { Stack, Typography} from '@mui/material';

const createData = (name, calories, fat, carbs) => {
  return { name, calories, fat, carbs};
};

const StyledDiv =  styled(Typography)(({ theme }) => ({
width:'100px',
height:'100px', 
backgroundColor:'red'
}));

const TableComponent = () => {
 const Dispatch = useDispatch()
  const [plan , setplan] = useState('REGULAR PLAN');
  const [SelectedBasic , setIsSelectedBasic] = useState(false);
  const [SelectedStandard , setIsSelectedStandard] = useState(false);
  const [SelectedPremium , setIsSelectedPremium] = useState(false);

  const SetBasicHandler = () => {
    setplan('Basic');
    setIsSelectedBasic(true)
    setIsSelectedStandard(false)
    setIsSelectedPremium(false)
    Dispatch(AuthenticationSliceActions.setUserPlan(plan))
  }

  const SetStandardHandler = () => {
    setplan('Standard');
    setIsSelectedStandard(true)
    setIsSelectedPremium(false)
    setIsSelectedBasic(false)
    Dispatch(AuthenticationSliceActions.setUserPlan(plan))
  }

  const SetPremiumHandler = () => {
    setplan('Premium');
    setIsSelectedPremium(true)
    setIsSelectedBasic(false)
    setIsSelectedStandard(false)
    Dispatch(AuthenticationSliceActions.setUserPlan(plan))
  }

  const rows = [
    createData("Monthly price", "EGP120", "EGP165", "EGP200"),
    createData("Video quality", "Good", "Better", 'Best'),
    createData("Resolution", "480p", "1080p", "4K+HDR"),
    createData("Watch on your TV, computer, mobile phone and tablet",  <CheckIcon sx={{ color:'red' }} />,<CheckIcon sx={{ color:'red' }} />,<CheckIcon sx={{ color:'red' }} />)
  
  ];
  
  return (
    <TableContainer component={Paper} sx={{backgroundColor:'transparent' , border:'none' , width:{ xs:'400px' , lg: '800px' , sm: '450px' , md:'700px' ,  xl:'100%'}}}>
      <Table sx={{ width:{xs:'400px' , lg: '800px' , sm: '450px' , md:'700px' ,  xl:'100%'} , textAlign:'left'}} aria-label="caption table">
      <Typography variant="caption" component='caption' sx={{}}>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</Typography>
      <Typography variant="caption" component='caption'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</Typography>
        <TableHead>
          <Stack>
          <StyledDiv >Basic</StyledDiv>
          </Stack>
          <TableRow>
            <TableCell colSpan={5}>

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell onClick={SetBasicHandler} align="center" sx={{fontWeight: 'bold'  , fontFamily:'sans-serif' , color : SelectedBasic? '#d32f2f' : '#737373'  }}>{row.calories}</TableCell>
              <TableCell onClick={SetStandardHandler} align="center" sx={{fontWeight: 'bold'  , fontFamily:'sans-serif' , color : SelectedStandard? '#d32f2f' : '#737373' }}>{row.fat}</TableCell>
              <TableCell onClick={SetPremiumHandler} align="center" sx={{fontWeight: 'bold'  , fontFamily:'sans-serif' , color: SelectedPremium? '#d32f2f' : '#737373' }}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
