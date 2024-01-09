import { createSlice } from "@reduxjs/toolkit"
import { stringify } from "querystring";


const initialState = {
    access_token: '',
    user_name: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {

            state.access_token = action.payload.access_token;
            state.user_name = action.payload.user_name;
            
            localStorage.setItem('user', JSON.stringify(state))
        },

        logout: (state, action) =>{

            state.access_token = '';
            state.user_name = '';
            
            localStorage.setItem('user', JSON.stringify(state))
        },
    
        getToken: (state, action) => {
          
          const user = JSON.parse(localStorage.getItem('user') ?? '');
          
          state.access_token = user.access_token;
          state.user_name = user.user_name;

        }
    }
});


export const {getToken, login, logout} = userSlice.actions;
export default userSlice;