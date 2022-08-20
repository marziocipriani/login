import createRootReducer from 'redux-root-reducer';

import xauthReducers from  './reducers/authReducers.js';
import xerrorReducers from './reducers/errorReducers.js';

const rootReducer = createRootReducer(
  xauthReducers,
  xerrorReducers

);

export default rootReducer