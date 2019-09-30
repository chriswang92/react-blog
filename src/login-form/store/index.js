import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (history, preloadedState) => {
  // const sagaMiddleware = createSagaMiddleware();
  let store = null;
  // if(process.env.NODE_ENV === 'production') {
  //   store = createStore(rootReducer, preloadedState,
  //     applyMiddleware(sagaMiddleware)
  //   ); 
  // } else {
  //   store = createStore(rootReducer, preloadedState,
  //     composeWithDevTools({name: 'SHELL-chris-login-demo'})(applyMiddleware(sagaMiddleware)),
  //   );  
  // }
  // sagaMiddleware.run(rootSaga);
  createStore(rootReducer, preloadedState);
  return store;
};

export default configureStore;