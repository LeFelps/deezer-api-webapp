import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

//importing root reducer (combined reducers)
import rootReducer from '../reducers/rootReducer'

// importing saga middleware
import rootSaga from './sagas'

//creating saga middleware to intercept action dispatches for async methods
const sagaMiddleware = createSagaMiddleware();

//creating a store and assigning a reducer (rootReducer) and a middleware(sagaMiddleware)
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

//running the middleware
sagaMiddleware.run(rootSaga);

export default store

