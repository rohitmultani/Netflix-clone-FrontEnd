import { createSlice } from "@reduxjs/toolkit";

const initialState = { IsloggedIn: false, Email: "", Password: "", token: "" , FirstName:"" , LastName:"" , CardNumber:"" , phoneNumber:'' , userPlan: '' , planChosen: false , error : '' };

 export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    SignUp: (state,  {payload} ) => {
      if (payload) {
        state.Email = payload.Email;
        state.Password = payload.Password;
      }
    },
    logIn: (state, { payload }) => {
      if (payload) {
        state.IsloggedIn = true;
        state.token = payload.token;
      }
    },
    SetUserData : ( state , { payload } ) => {
      if(payload){
        state.FirstName = payload.FirstName
        state.LastName = payload.LastName
        state.CardNumber = payload.CardNumber
        state.phoneNumber = payload.phoneNumber
      }
    }
    ,
    logOut: (state) => {
      state.IsloggedIn = false;
      state.token = "";
      localStorage.removeItem('token');
    },
    setUserPlan: (state , {payload}) => {
      if(payload) {
        state.userPlan = payload
        state.planChosen = true
       
      }},
      setError : (state , {payload}) => {
        state.error = payload;
      }

    }
  },
);


const  AuthenticationSliceActions = AuthenticationSlice.actions;
export default   AuthenticationSliceActions 

