import { createAsyncThunk, 
    createSlice, 
    PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
import {
    POST_CREATE_LORB,
    POST_UPDATE_LORB_DETAIL,
    PUT_APPROVE_CREATE,
    PUT_REJECT_CREATE,
    GET_GET_ONMAKING,
    GET_GET_ONBEING_SUGGESTED,
    GET_GET_LORB,
    GET_GET_LORB_KEEP_LORB,
    GET_GET_ALL_LORB,
    GET_GET_LORB_IHAVE,
    GET_LORB_COMPLETED,
    PUT_UPDATE_NEGOTIATE,
    PUT_DELETE_LORB_TABLE
} from '../app/commonURL';


//AsyncThuncのpayloadの型
export interface approveCreateAction<T> {
    userFrom:T,
    userTo:T,
    id:T
} 

export interface CreateLorBAction<T>{
title:T,
detailClass:T,
aboutDetail:T,
userTo:T,
userFrom:T,
userForApprove:T
}

//ThunkAPIの型
export interface ErrorResponse {
    success:boolean
    }

export interface onMaking {
    onMaking:unknown,
    count:number
}

export interface onBeingSuggested {
    onBeingSuggested:unknown,
    count:number
}

export interface keepLorB {
    LKeepOn:unknown,
    LCount:number,
    BKeepOn:unknown,
    BCount:number
}

export interface AllLorB {
    allLorB:unknown
}

export interface AllLorBIhave {
    allLorB:unknown
}

export interface Completed {
    completed:unknown
}




interface LorB {
    onMaking?:onMaking,
    onBeingSuggested?:onBeingSuggested,
    keepLorB?:keepLorB,
    AllLorB?:AllLorB,
    AllLorBIhave?:AllLorBIhave,
    Completed?:Completed
}


const initialState:LorB = {
}

//ログイン処理しユーザーデータを取得
export const createLorB = createAsyncThunk<boolean, CreateLorBAction<string>,
{ state:RootState,
rejectValue:ErrorResponse 
}>(
'createSlice/createLorB',
async ({title,
        detailClass,
        aboutDetail,
        userTo,
        userFrom,
        userForApprove},
        { getState ,rejectWithValue }) => {
  const res = await axios.post(POST_CREATE_LORB, {
    title,
    detailClass,
    aboutDetail,
    userTo,
    userFrom,
    userForApprove
   })
   return res.data.success
}
)

//貸し借りテーブルに貸し借りテーブルの追加
export const updateLorBDetail = createAsyncThunk<boolean, CreateLorBAction<string>,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/updateLorBDetail',
async ({
        title,
        detailClass,
        aboutDetail,
        userTo,
        userFrom,
        userForApprove
        },
        { getState ,rejectWithValue }) => {
  const res = await axios.post(POST_UPDATE_LORB_DETAIL, {
    title,
    detailClass,
    aboutDetail,
    userTo,
    userFrom,
    userForApprove
   })
   return res.data.success
}
)

//貸し借りテーブルの作成または追加の承認
export const approveCreate = createAsyncThunk<boolean, approveCreateAction<string>,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/approveCreate',
async (
        {
            userTo,
            userFrom,
            id        
        },
        { getState ,rejectWithValue }) => {
  const res = await axios.put(PUT_APPROVE_CREATE, {
    userTo,
    userFrom,
    id
   })
   return res.data.success
}
)

//貸し借りテーブルの作成または追加の拒否
export const rejectCreate = createAsyncThunk<boolean, approveCreateAction<string>,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/rejectCreate',
async ({
            userTo,
            userFrom,
            id        
        },
        { getState ,rejectWithValue }) => {
  const res = await axios.put(PUT_REJECT_CREATE, {
    userTo,
    userFrom,
    id
   })
   return res.data.success
}
)

//作成中の貸し借りテーブルの取得
export const getOnMaking = createAsyncThunk<onMaking, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getOnMaking',
async () => {
  try {
      const res = await axios.get(GET_GET_ONMAKING).catch(() => {console.log('通信エラー')})
      res && console.log(res.data.onMaking)
      return res && res.data.onMaking
  } catch(err) {
    console.log('失敗')
  }
  console.log(9)
}
)

//交渉中の貸し借りテーブルの削除
export const getOnBeingSuggested = createAsyncThunk<onBeingSuggested, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getOnBeingSuggested',
async () => {
    try {
        const res = await axios.get(GET_GET_ONBEING_SUGGESTED)
        .catch(() => {console.log('通信エラー')})
        res && console.log(res.data.onBeingSuggested)
        return res && res.data.onBeingSuggested
    } catch(err) {
      console.log('失敗')
    }
    console.log(9)
  }
)

//継続中の貸し借りテーブルの取得
export const getLorBKeepLorB = createAsyncThunk<keepLorB, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getLorBKeepLorB',
async () => {
    try {
        const res = await axios.get(GET_GET_LORB_KEEP_LORB)
        .catch(() => {console.log('通信エラー')})
        // res && console.log(res.data.keepLorB)
        return res &&  res.data.keepLorB
    } catch(err) {
      console.log('失敗')
    }
    console.log(9)
  }
)

//自分だけでなくすべての貸し借りの取得
export const getAllLorB = createAsyncThunk<AllLorB, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getAllLorB',
async () => {
  const res = await axios.get(GET_GET_ALL_LORB)
   return res.data
}
)

//自分の所持しているすべての状態の貸し借りテーブルを取得
export const getLorBIhave = createAsyncThunk<AllLorBIhave, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getLorBIhave',
async () => {
  const res = await axios.get(GET_GET_LORB_IHAVE)
   return res.data
}
)


//貸し借りが完了している貸し借りデータの取得
export const getLorBCompleted = createAsyncThunk<Completed, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/getLorBCompleted',
async () => {
  const res = await axios.get(GET_LORB_COMPLETED)
   return res.data
}
)

//指定した貸し借りの交渉データを作成または更新
export const updateNogotiate = createAsyncThunk<boolean, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/updateNogotiate',
async () => {
  const res = await axios.get(PUT_UPDATE_NEGOTIATE)
   return res.data.success
}
)

//任意の貸し借りデータを論理削除
export const deleteLorBtable = createAsyncThunk<boolean, void,
{ 
    state:RootState,
    rejectValue:ErrorResponse 
}>(
'createSlice/deleteLorBtable',
async () => {
  const res = await axios.get(PUT_DELETE_LORB_TABLE)
   return res.data.success
}
)


export const LorBSlice = createSlice({
name:'lorb',
initialState,
reducers:{
},
extraReducers: (builder) => {
    builder
    .addCase(getOnMaking.fulfilled, (state, action) =>{
        state.onMaking = action.payload
    })
    .addCase(getOnBeingSuggested.fulfilled, (state, action) =>{
        state.onBeingSuggested = action.payload
    })
    .addCase(getLorBKeepLorB.fulfilled, (state, action) =>{
        state.keepLorB = action.payload
    })
    .addCase(getAllLorB.fulfilled, (state, action) =>{
        state.AllLorB = action.payload
    })
    .addCase(getLorBIhave.fulfilled, (state, action) =>{
        state.AllLorBIhave = action.payload
    })
    .addCase(getLorBCompleted.fulfilled, (state, action) =>{
        state.Completed = action.payload
    })
}
})

export const SelectOnMaking = (state:RootState) => state.lorb.onMaking
export const SelectonBeingSuggested = (state:RootState) => state.lorb.onBeingSuggested
export const SelectkeepLorB = (state:RootState) => state.lorb.keepLorB
export const SelectAllLorB = (state:RootState) => state.lorb.AllLorB
export const SelectAllLorBIhave = (state:RootState) => state.lorb.AllLorBIhave
export const SelectCompleted = (state:RootState) => state.lorb.Completed

export default LorBSlice.reducer;