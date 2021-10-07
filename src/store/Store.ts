import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
