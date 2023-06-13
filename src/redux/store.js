import { configureStore } from '@reduxjs/toolkit';
import ProfileState from './reducers/ProfileState';
import DashboardState from './reducers/DashboardState';

export default configureStore({
  reducer: {
    profileState: ProfileState,
    dashboardState: DashboardState,

  },
});
