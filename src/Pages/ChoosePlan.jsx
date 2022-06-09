import { Container , Box , Stack, Typography} from '@mui/material';
import TableComponent from '../Components/UI/TableComponent';
import LargeButton from '../Components/UI/LargeButton';
import { useSelector } from 'react-redux';


const ChoosePlan = () => {

    const planChosen = useSelector((state) => state.planChosen )
    return (
        <Container maxWidth="lg" sx={{color:'#FFFFFF' , backgroundImage:'linear-gradient(to bottom, rgba(7, 9, 17, 0.8) 5.88%, rgba(7, 9, 17, 0) 34.09%, rgba(7, 9, 17, 0) 99.57%)'}} >
        <Box sx={{  height: '100vh' , padding:'2rem'}} >
            <Stack justifyContent='space-around' alignItems='flex-start' gap={1}>
            <Typography variant="h3" component='div' sx={{ fontSize:'2rem' , fontWeight:'bold' }}>Choose the plan that’s right for you</Typography>
            <Typography Variant="p" component='div' sx={{ fontSize: "0.8rem" , color:'rgba(255, 255, 255, 0.8)' }}>just a few more steps and you're done!We hate paperwork, too.</Typography>


            <Stack justifyContent='space-around' alignItems='flex-start' sx={{width:'100%' , marginTop:'3rem'}}>


            <TableComponent />
                
            </Stack >

                <Stack sx={{width:'100%' , margin: '1rem'}} justifyContent='center' alignItems='center'> {  planChosen && <LargeButton link='/payment'  text='Next' size='large' /> }</Stack>
              
            </Stack>
        </Box>
      </Container>
    );
};

export default ChoosePlan;