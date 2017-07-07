// import {createStore, applyMiddleware} from 'redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}

export default configureStore;
