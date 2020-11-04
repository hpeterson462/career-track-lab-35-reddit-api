import { createStore, applyMiddleware, composeEnhancers } from 'react-redux;'
import thunk from 'redux-thunk';

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
