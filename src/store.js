import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}