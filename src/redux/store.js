import {configureStore} from '@reduxjs/toolkit';
import LoginState from './reducers/LoginState';
export default configureStore({
  reducer: {
    loginState:LoginState
  },
});
