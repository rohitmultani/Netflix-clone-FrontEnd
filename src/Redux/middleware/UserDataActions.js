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
            Dispatch(AuthenticationSliceActions.SignUp({token:response.data.token ,Email:userData.Email , Password: userData.Password }))
            Dispatch(AuthenticationSliceActions.logIn({token:response.data.token}))
            localStorage.setItem('token' , JSON.stringify(response.data.token))
            config.headers.Authorization = JSON.parse(localStorage.getItem('token'))
            userData.Navigate('/plandetails')
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
        .then( () =>  { 
        Dispatch(AuthenticationSliceActions.setError(''))
        Dispatch(AuthenticationSliceActions.setIsLoading(false))
        Dispatch(AuthenticationSliceActions.setUserPlan(userData.plan))
        userData.Navigate('/payment');
    })
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
            Dispatch(AuthenticationSliceActions.SetUserData({FirstName: userData.FirstName , LastName: userData.LastName , CardNumber: userData.CardNumber , phoneNumber: userData.phoneNumber  }))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
            userData.Navigate('/choosedevice')} )
        .catch((error) => {   
            Dispatch(AuthenticationSliceActions.setError('something went wrong'))
            Dispatch(AuthenticationSliceActions.setIsLoading(false))
        })
    }
}

export const setUserDevice = (userDevice) => {
    console.log(userDevice)
    const Navigate = userDevice.Navigate
    const data =  userDevice.device 
    return async (Dispatch) => {
        Dispatch(AuthenticationSliceActions.setIsLoading(true))
        Dispatch(AuthenticationSliceActions.setError(''))
        await axios.post('http://localhost:3001/user/login' , data , config).then((res) => {
        Dispatch(AuthenticationSliceActions.setUserDevice(data))
        Dispatch(AuthenticationSliceActions.setIsLoading(false))
        Navigate('/Home')
        }).catch(() => {
         Dispatch(AuthenticationSliceActions.setIsLoading(false));
         Dispatch(AuthenticationSliceActions.setError('Some Thing Went Wrong'));
        })
    }
}