import { createAsyncThunk, 
    createSlice, 
    } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../app/store";
import axios from "axios";
import { 
    EDIT_USER , 
    GET_FOLLOW,
    POST_FOLLOW_USER,
    GET_GET_FOLOWER 
} from "../app/commonURL";

export interface User {
name:string
_id:string
} 

export interface ErrorResponse {
    name:string
    _id:string
}

interface UserState {
    followUser:User[],
    followERUser:User[],
    errorStateFollow:string,
    errorStateFollowER:string
}

const initialState :UserState= {
    followUser:[],
    followERUser:[],
    errorStateFollow:'',
    errorStateFollowER:''
} 
    
//ユーザーをフォロー
export const FollowUser = createAsyncThunk<boolean, {[email:string]:string},
{ 
    state:RootState,
    rejectValue:string,
    dispatch:AppDispatch 
}>(
'UserSlice/FollowUser',
async (email,{ getState ,rejectWithValue }) => {
  
   try{
       axios.defaults.withCredentials = true;
       console.log(email)
       const  res  = await axios.post(POST_FOLLOW_USER, email
       )
       if(res.data.success === false){
        return rejectWithValue('取得に失敗しました')
       }
       return res.data.success
   } catch (error) {
       return rejectWithValue('取得に失敗しました')
   }
}
)

//フォローしているユーザーの情報を取得
export const getFollow = createAsyncThunk<User[], void,
{ state:RootState,
rejectValue:string 
}>(
'UserSlice/getFollow',
async (_,{ rejectWithValue }) => {
   try{
       axios.defaults.withCredentials = true;
       const  res  = await axios.get(GET_FOLLOW)
       console.log(res,'フォローデータ')
       if(res.data.success === false) {
        return rejectWithValue('取得に失敗しました')
       }
       return res.data.followData
   } catch (error) {
       return rejectWithValue('取得に失敗しました')
   }
}
)

//自分をフォローしているユーザー(フォロワー)の情報を取得
export const getFollower = createAsyncThunk<User[], void,
{ state:RootState,
rejectValue:string 
}>(
'UserSlice/getFollower',
async (_,{ getState ,rejectWithValue }) => {
  
   try{
       axios.defaults.withCredentials = true;
       const  res  = await axios.get(GET_GET_FOLOWER)
       console.log(res,'フォロワーデータ')
       return res.data.followerData
   } catch (error) {
       return rejectWithValue('取得に失敗しました')
   }
}
)




export const userSlice = createSlice({
name:'user',
initialState,
reducers:{
},
extraReducers: (builder) => {
   builder
   .addCase(getFollow.fulfilled,(state, action) => {
       console.log(action)
       state.followUser = action.payload
   })
   .addCase(getFollow.rejected, (state, action) => {
       if(action.payload !== undefined){
           state.errorStateFollow = action.payload    
       }
   })
   .addCase(getFollower.fulfilled,(state, action) => {
    state.followERUser = action.payload
   })
   .addCase(getFollower.rejected, (state, action) => {
    if(action.payload !== undefined){
        state.errorStateFollowER = action.payload    
    }
})
}
})


export const SelectFollowUser = (state:RootState) => state.user.followUser
export const SelectFollowERUser = (state:RootState) => state.user.followERUser 

export default userSlice.reducer;