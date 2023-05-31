import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    booster:null,
    email:null,
    id: null,
    income:null,
    name:null,
    password:null,
    referralId:null,
    status:null,
    token : null,
    data:[{
      _id: '62fe244f58f7aa8230817f89',
      title: 'Garments',
      imageUrl:['https://picsum.photos/id/10/200/200','https://picsum.photos/id/11/200/200','https://picsum.photos/id/12/200/200',]   
        },
    {
      _id: '62fe243858f7aa8230817f86',
      title: 'Electornics',
      imageUrl:['https://picsum.photos/id/20/200/200','https://picsum.photos/id/21/200/200','https://picsum.photos/id/22/200/200',]   
     },
    {
      _id: '62fe241958f7aa8230817f83',
      title: 'Cosmentics',
      imageUrl:['https://picsum.photos/id/30/200/200','https://picsum.photos/id/31/200/200','https://picsum.photos/id/32/200/200',]   
       },
    {
      _id: '62fe246858f7aa8230817f8c',
      title: 'Groceries',
      imageUrl:['https://picsum.photos/id/40/200/200','https://picsum.photos/id/41/200/200','https://picsum.photos/id/42/200/200',]   
    },]
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      // let number = action.payload?.income;
      // const flooredNumber = parseFloat(number.toFixed(4));

      console.log('income recived to reducer ....>>', action.payload); 
      // state.booster=action.payload?.booster,
      // state.email=action.payload?.email,
      // state.id=action.payload?.id,
      // state.income=flooredNumber,
      // state.name=action.payload?.name,
      // state.password=action.payload?.password,
      // state.referralId=action.payload?.referralId,
      // state.status=action.payload?.status
      state.token=action.payload?.token

      
    },

    logout(state) {
        console.log(state);
        state.booster=null,
      state.email=null,
      state.id=null,
      state.income=null,
      state.name=null,
      state. password=null,
      state.referralId=null,
      state. status=null
    },

    token(state, action) {
      console.log('action', action);
      state.token = action.payload.token;
    },
  },
});

export const {login, logout, token} = loginReducer.actions;
export default loginReducer.reducer;