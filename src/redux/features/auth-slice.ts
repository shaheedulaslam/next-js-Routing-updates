import { createSlice,PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
value:AuthState;
}

type AuthState={
    isAuth:Boolean,
    username:String,
    uid:String,
    isModeration:Boolean
}

const initialState = {
    value: {
    isAuth:false,
    username:"",
    uid:'',
    isModeration:false
    } as AuthState,
} as InitialState

export const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:()=>{
            return initialState
        },

        login: (state,action:PayloadAction<string>)=>{
           return {
            value:{
                isAuth:true,
                username:action.payload,
                uid:'1234567890aaa',
                isModeration:false
            },
           }
        }
    }

})


export const {login,logout} = auth.actions
export default auth.reducer