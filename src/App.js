import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react';
import Loader from './Components/Loader';

const Home = lazy(() =>  import('./Pages/Home') )
const Login = lazy(() =>  import('./Pages/Login') )
const Register = lazy(() =>  import('./Pages/Register') )
const NotFound = lazy( () => import('./Pages/NotFound') )

const  App = () => {
  return (
    <Suspense fallback={<Loader />}>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}  />
      <Route  path='/Home' element={<Home />}  />
      <Route  path='/Login' element={<Login />}  />
      <Route  path='/Register' element={<Register />}  />
      <Route  path='*' element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
    </Suspense>

  );
}

export default App;
