import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middleware } from './Navigator';

import reducers from './reducers/index';

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);
