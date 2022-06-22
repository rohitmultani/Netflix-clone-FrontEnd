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
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
        await axios.post('http://localhost:3001/user/register',{email:userData.Email , password: userData.Password} ).then( (response) => {
            localStorage.setItem("Authentication", JSON.stringify({email:userData.Email , password: userData.Password}))
            Dispatch(AuthenticationSliceActions.setError(''))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.logIn(response.data.token))
            localStorage.setItem('token' , JSON.stringify(response.data.token))
            config.headers.Authorization = JSON.parse(localStorage.getItem('token'))
            console.log(config.headers)
        }).catch((err) => {
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            Dispatch(AuthenticationSliceActions.setError(  'Something went wrong' )) })
    }
}

export const choosePlan = (userData) => {

    console.log(config)

    

    return async (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
       let plan =  userData
        await axios.put('http://localhost:3001/user/Plan', plan , config)
        .then( () =>  { Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true)) } )
        .catch( (error) => {
        Dispatch(AuthenticationSliceActions.setPlanError(true))   
        Dispatch(AuthenticationSliceActions.setIsLoading(false)) 
        Dispatch(AuthenticationSliceActions.setError('something went wrong'))})
    }
}

export const UserLoginHandler = (userData) => {

    return async (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
        await axios.post('http://localhost:3001/user/login/',{email: userData.userName , password: userData.Password} , config)
        .then((response) =>{
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            localStorage.setItem('token' , JSON.stringify(response.data))})
        .catch((error) => {
            Dispatch(AuthenticationSliceActions.setPlanError(true))    
            Dispatch(AuthenticationSliceActions.setError('something went wrong'))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))})
        
    }
}


export const creditCardHandler = (userData) => {
    

    console.log('carddata' , userData)
    return async (Dispatch) => {

        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(true))

        const data = {FirstName:userData.FirstName ,
        LastName: userData.LastName ,
        cardNumber: userData.CardNumber ,
        securityCode:userData.cvv ,
        PhoneNumber: userData.phoneNumber}

        await axios.put('http://localhost:3001/user/payment' ,data , config)
        .then( () => { 
            localStorage.setItem("userdata", JSON.stringify(data))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))} )
        .catch((error) => {   
            Dispatch(AuthenticationSliceActions.setError('something went wrong'))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
        })
    }
}