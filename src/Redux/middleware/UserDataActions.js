import axios from 'axios';
import  AuthenticationSliceActions  from '../AuthenticationSlice';

let {token} = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''

let config = {
    headers:{
         Authorization: token ? token : ''  
    }
  };


  console.log(config.headers);



export const UserRegisterHandler = (userData) => {
  

    return async (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
        await axios.post('http://localhost:3001/user/register',{email:userData.Email , password: userData.Password} ).then( (response) => {
            Dispatch(AuthenticationSliceActions.setError(''))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.logIn(response.data.token))
            localStorage.setItem('token' , JSON.stringify(response.data.token))
            config.headers.Authorization = JSON.parse(localStorage.getItem('token'))
            console.log(config.headers)
        }).catch((err) => {
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.setError(err.response.data.message)) })
    }
}

export const choosePlan = (userData) => {

    console.log(config)
//    let {token} = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''

//     config = {
//         headers:{
//              Authorization: token ? token : ''  
//         }
//       };
    

    return async (Dispatch) => {
       let plan =  userData
        await axios.put('http://localhost:3001/user/Plan', plan , config).then( () =>   Dispatch(AuthenticationSliceActions.setError('')) )
        .catch( (error) => {
        Dispatch(AuthenticationSliceActions.setPlanError(true))    
        Dispatch(AuthenticationSliceActions.setError(error?.response.data.message))})
    }
}

export const UserLoginHandler = (userData) => {

    return async (Dispatch) => {
        await axios.post('http://localhost:3001/user/login/',{email: userData.userName , password: userData.Password} , config).then((response) => localStorage.setItem('token' , JSON.stringify(response.data))).catch(() =>  console.log('error'))
    }
}


export const creditCardHandler = (userData) => {
    
    // const {token} = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
    // config = {
    //     headers:{
    //         Authorization: token ? token : ''  ,
    //     }
    // };
    console.log('carddata' , userData)
    return async (Dispatch) => {
        await axios.put('http://localhost:3001/user/payment' , {FirstName:userData.FirstName , LastName: userData.LastName , cardNumber: userData.CardNumber , securityCode:userData.cvv , PhoneNumber: userData.phoneNumber} , config).then( () => console.log('success') ).catch( (err) => Dispatch(AuthenticationSliceActions.setError('something went wrong')))
    }
}