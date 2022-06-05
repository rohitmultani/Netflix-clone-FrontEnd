import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react';
import Loader from './Components/Loader';
import NavBar from './Components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from "@mui/material";
import { Theme } from './styles/Theme';

const Home = lazy(() =>  import('./Pages/Home') )
const Login = lazy(() =>  import('./Pages/Login') )
const Register = lazy(() =>  import('./Pages/Register') )
const NotFound = lazy( () => import('./Pages/NotFound') )
const Setup = lazy( () => import('./Pages/Setup') )
const Plans = lazy( () => import('./Pages/Plans') )

const  App = () => {
  return (
     <>
     <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Suspense fallback={<Loader />}>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route  path='/' element={<Home />}  />
      <Route  path='/Home' element={<Home />}  />
      <Route  path='/Login' element={<Login />}  />
      <Route  path='/register' element={<Register />}  />
      <Route  path='/setup' element={<Setup />}  />
      <Route  path='/chooseplan' element={<Plans />}  />
      <Route  path='*' element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
    </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
