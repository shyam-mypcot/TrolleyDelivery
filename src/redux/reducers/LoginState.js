import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';

export const getLoginData = createAsyncThunk(
  'LoginData',
  async ({data, url}) => {
    const response = await ApiServices({
      data,
      url,
    });

    // console.log('$$$ dashboard data api response', response.data);
    return response.data;
  },
);

const LoginState = createSlice({
  name: 'LoginState',
  initialState: {
    token: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    area: '',
  },
  reducers: {
    reset: (state, action) => {
      state.token = '';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.address = '';
      state.city = '';
      state.area = '';
    },
  },
  extraReducers: {
    [getLoginData.fulfilled]: (state, action) => {
      console.log('$$$ response data ', action.payload.data[0].name);
      state.token = action.payload.data[0].token;
      state.name = action.payload.data[0].name;
      state.email = action.payload.data[0].email;
      state.phone = action.payload.data[0].phone;
      state.address = action.payload.data[0].address;
      state.city = action.payload.data[0].cities[0].city_name_en;
      state.area = action.payload.data[0].cities[0].city_name_en;
    },
  },
});

export const {reset, setInitLoaderTrue} = LoginState.actions;

export default LoginState.reducer;
