import { combineReducers } from 'redux';
import launcherReducer from './launcherReducer';

const RootReducer = combineReducers({
    launches: launcherReducer,
});

export type RootReducerT = ReturnType<typeof RootReducer>;

export default RootReducer;
