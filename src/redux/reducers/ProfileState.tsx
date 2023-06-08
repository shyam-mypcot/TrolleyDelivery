import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';

export const getProfileData = createAsyncThunk(
  'ProfileData',
  async ({ data, url }: { data: any, url: string }) => {
    const response = await ApiServices({
      data,
      url,
      restHeader:{},
      
    });

    // console.log('$$$ dashboard data api response', response.data);
    return response.data;
  },
);

interface ProfileState {
  token: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  city: string;
  area: string;
}

const initialState: ProfileState = {
  token: '',
  name: '',
  email: '',
  address: '',
  phone: '',
  city: '',
  area: '',
};

const ProfileStateSlice = createSlice({
  name: 'ProfileState',
  initialState,
  reducers: {
    reset: (state) => {
      state.token = '';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.address = '';
      state.city = '';
      state.area = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileData.fulfilled, (state, action) => {
      console.log('$$$ response data ', action.payload.data[0].name);
      state.token = action.payload.data[0].token;
      state.name = action.payload.data[0].name;
      state.email = action.payload.data[0].email;
      state.phone = action.payload.data[0].phone;
      state.address = action.payload.data[0].address;
      state.city = action.payload.data[0].cities[0].city_name_en;
      state.area = action.payload.data[0].cities[0].city_name_en;
    });
  },
});

export const { reset } = ProfileStateSlice.actions;

export default ProfileStateSlice.reducer;