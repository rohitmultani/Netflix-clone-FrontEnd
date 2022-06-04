import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box variant='section' sx={{backgroundImage:`url(${'https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/57dd2c66-7f89-4c76-8045-c31f349a7aa8/EG-en-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg'})` ,
        height:'35rem'
        }}>
          home page  
        </Box>
    );
};

export default Home;