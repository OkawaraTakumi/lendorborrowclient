import { createAsyncThunk, 
         createSlice, 
         } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
import { POST_LOGIN_URL , GET_CURRENT_USER_URL } from "../app/commonURL";

export interface User {
    name:string
    id:string
} 

export interface Login {
    user:User
} 

export interface ErrorResponse {
    success:boolean
}

export interface loginAction {
    email:string
    password:string
}


const initialState:Login = {
    user:{
        name:'',
        id:''
    }
}

//ログイン処理しユーザーデータを取得
export const loginAndFetchUser = createAsyncThunk<User, loginAction,
    { state:RootState,
    rejectValue:ErrorResponse 
    }>(
    'loginSlice/loginAndFetchUser',
    async ({email, password},{ getState ,rejectWithValue }) => {
       const { data } = await axios.post(POST_LOGIN_URL, {
            email,
            password
        })
        if(!data.success) {
            return data.success
        }
        try{
            axios.defaults.withCredentials = true;
            const  res  = await axios.get(GET_CURRENT_USER_URL)
            console.log(res)
            return res.data.user
        } catch (error) {
            console.log(9)
        }
    }
)

//Homeロード時にユーザーデータを取得
export const fetchUser = createAsyncThunk<User, void,
    { state:RootState,
    rejectValue:User 
    }>(
    'loginSlice/fetchUser',
    async (_,{ rejectWithValue }) => {
        try{
            axios.defaults.withCredentials = true;
            const  res  = await axios.get(GET_CURRENT_USER_URL)
            if(res.data.success === false) {
                return {name:'',id:''}
            }
            console.log(res)
            return res.data.user
        } catch (error) {
            return rejectWithValue({name:'',id:''})
        }
    }
)


export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        logout:(state) => {
            state.user = {name:'',id:''}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAndFetchUser.fulfilled,(state, action) => {
            state.user = action.payload
        })

        builder
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            if(action.payload !== undefined){
                state.user = action.payload    
            }
        })
    }
})

export const { logout } = loginSlice.actions;
export const SelectUser = (state:RootState) => state.login.user 

export default loginSlice.reducer;