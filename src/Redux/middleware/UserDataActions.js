import axios from 'axios';
import  AuthenticationSliceActions  from '../AuthenticationSlice';


const config = {
    headers:{
        Authorization: JSON.parse(localStorage.getItem('token')).token,
    }
  };


  console.log(config.headers)



export const UserRegisterHandler = (userData) => {
  
    console.log('middle whare dispatch');
    return async (Dispatch) => {
        await axios.post('http://localhost:3001/user/register',{email:userData.Email , password: userData.Password} )
        .then( (response) => localStorage.setItem('token' , JSON.stringify(response.data)) )
        .catch((err) => Dispatch(AuthenticationSliceActions.setError(err.response.data.message)) )
    }
}

export const choosePlan = (userData) => {
    return async (Dispatch) => {
        await axios.post('http://localhost:3001/user/Plan', {plan: userData} , config).then( () =>   Dispatch(AuthenticationSliceActions.setError('')) ).catch( (error) => Dispatch(AuthenticationSliceActions.setError(error.response.data.message)))
    }
}

export const UserLoginHandler = (userData) => {

    return async (Dispatch) => {
        await axios.post('http://localhost:3001/user/login/',{email: userData.userName , password: userData.Password} , config).then((response) => localStorage.setItem('token' , JSON.stringify(response.data))).catch(() =>  console.log('error'))
    }
}


export const creditCardHandler = (userData) => {
    console.log('carddata' , userData)
    return async (Dispatch) => {
        await axios.post('https://jsonplaceholder.typicode.com/posts' , null , config).then( console.log('success') ).catch(console.log('failed'))
    }
}