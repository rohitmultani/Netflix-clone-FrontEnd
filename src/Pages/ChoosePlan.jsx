import { Container , Box , Stack, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import TableComponent from '../Components/UI/TableComponent';
import LargeButton from '../Components/UI/LargeButton';
import { useSelector } from 'react-redux';

const ChoosePlan = () => {

    const planChosen = useSelector((state) => state.planChosen )
    return (
        <Container maxWidth="lg" >
        <Box sx={{  height: '120vh' , padding:'2rem'}} >
            <Stack justifyContent='space-around' alignItems='flex-start' gap={1}>
            <Typography Variant="p" component='div' sx={{ fontSize: "0.8rem" }}>STEP <strong>2</strong> OF <strong>3</strong></Typography>
            <Typography variant="h3" component='div' sx={{ fontSize:'2rem' , fontWeight:'bold' }}>Choose the plan that’s right for you</Typography>

            <Stack justifyContent='space-around' sx={{ width:'400px' }} alignItems='flex-start' gap={1} >
                <Stack direction='row' justifyContent='space-evenly' gap={1} >
                <CheckIcon sx={{ color:'red' }}/>
                <Typography variant='p' sx={{width:'220px' , fontWeight:'bold'}}>Watch all you want. Ad-free.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' , }} />
                <Typography sx={{fontWeight:'bold'}}>Recommendations just for you.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' }} />
                <Typography  sx={{fontWeight:'bold'}}>Change or cancel your plan anytime.</Typography>
                    </Stack>
            </Stack>


            <Stack justifyContent='space-around' alignItems='flex-start' sx={{width:'100%' , marginTop:'3rem'}}>
                {/* <Stack direction='row' >
                    <Box sx={{width:'100px' , height:'100px' , backgroundColor:'red' , position:'relative' }}>
                    <Box sx={{height:'0px' , width:'0px' , borderLeft:'10px solid transparent' , borderRight:'10px solid transparent' , borderTop:'15px solid black' , position:'absolute' , top:'100%' , right:'50%'}}></Box>
                    </Box>
                </Stack> */}

            <TableComponent />
                
            </Stack >

                <Stack sx={{width:'100%' , margin: '1rem'}} justifyContent='center' alignItems='center'> {  planChosen && <LargeButton link='/payment'  text='Next' size='large' /> }</Stack>
              
            </Stack>
        </Box>
      </Container>
    );
};

export default ChoosePlan;