import {configureStore} from '@reduxjs/toolkit';
import ProfileState from './reducers/ProfileState';
export default configureStore({
  reducer: {
    profileState:ProfileState
  },
});
