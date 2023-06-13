import React, {useEffect, useContext, useState} from 'react';

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';

export const getProfileData = createAsyncThunk(
  'ProfileData',
  async ({data, url,restHeader}: {data: any; url: string,restHeader:{}}) => {

    const response = await ApiServices({
      data,
      url,
      restHeader,
    });

    // console.log('$$$ dashboard data api response', response.data);
    return response.data;
  },
);

interface ProfileState {
  totalCompletedOrder: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  city: string;
  area: string;
}

const initialState: ProfileState = {
  totalCompletedOrder: '',
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
    reset: state => {
      state.totalCompletedOrder = '';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.address = '';
      state.city = '';
      state.area = '';
    },
  },
  extraReducers: builder => {

    builder.addCase(getProfileData.fulfilled, (state, action) => {
      console.log('$$$ response data ',JSON.stringify(action.payload.data,null,2));
      state.totalCompletedOrder = action.payload.data.total_completed_order;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.phone = action.payload.data.phone;
      state.address = action.payload.data.address;
      state.city = action.payload.data.city_name;
      state.area = action.payload.data.area_name;
    });
  },
});

export const {reset} = ProfileStateSlice.actions;

export default ProfileStateSlice.reducer;
