import React, {useEffect, useContext, useState} from 'react';

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';

export const getDashboardData = createAsyncThunk(
  'DashboardData',
  async ({data, url, restHeader}: {data: any; url: string; restHeader: {}}) => {
    const response = await ApiServices({
      data,
      url,
      restHeader,
    });

    // console.log('$$$ dashboard data api response', response.data);
    return response.data;
  },
);

interface DashboardState {
  pendingOrders: number;
  deliveredOrders: number;
  totalPendingOrder:number;
  todayAllRevenue: number;
  allRevenue: number;
}

const initialState: DashboardState = {
  pendingOrders: 0,
  deliveredOrders: 0,
  totalPendingOrder:0,
  todayAllRevenue: 0,
  allRevenue: 0,
};

const DashboardStateSlice = createSlice({
  name: 'DashboardState',
  initialState,
  reducers: {
    reset: state => {
      state.pendingOrders = 0;
      state.deliveredOrders = 0;
      state.totalPendingOrder = 0;
      state.todayAllRevenue = 0;
      state.allRevenue = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      console.log(
        '$$$ response data ',
        JSON.stringify(action.payload.data, null, 2),
      );
      state.pendingOrders = action.payload.data.pending_orders;
      state.deliveredOrders = action.payload.data.delivered_orders;
      state.totalPendingOrder = action.payload.data.all_pending;

      state.todayAllRevenue = action.payload.data.today_all_revenue;
      state.allRevenue = action.payload.data.all_revenue;
    });
  },
});

export const {reset} = DashboardStateSlice.actions;

export default DashboardStateSlice.reducer;
