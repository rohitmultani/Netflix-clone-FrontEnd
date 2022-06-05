import { Container , Box , Stack, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const ChoosePlan = () => {
    return (
        <Container maxWidth="lg" >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' , padding:'2rem'}} >
            <Stack justifyContent='space-around' alignItems='flex-start' gap={1}>
            <Typography Variant="p" component='div' sx={{ fontSize: "0.8rem" }}>STEP <strong>2</strong> OF <strong>3</strong></Typography>
            <Typography variant="h3" component='div' sx={{ fontSize:'2rem' , fontWeight:'bold' }}>Choose the plan that’s right for you</Typography>

            <Stack justifyContent='space-around' sx={{ width:'400px'}} alignItems='flex-start' gap={1} >
                <Stack direction='row' justifyContent='space-evenly' gap={1} >
                <CheckIcon sx={{ color:'red' }}/>
                <Typography variant='p' sx={{width:'220px' , fontWeight:'bold'}}>No commitments, cancel,<br/>anytime.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' , }} />
                <Typography sx={{fontWeight:'bold'}}>Everything on Netflix for one<br/>low price.</Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-around' gap={1} >
                <CheckIcon sx={{ color:'red' }} />
                <Typography  sx={{fontWeight:'bold'}}>Unlimited viewing on all your<br/>devices.</Typography>
                    </Stack>
            </Stack>

            </Stack>
        </Box>
      </Container>
    );
};

export default ChoosePlan;