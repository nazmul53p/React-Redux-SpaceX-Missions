import axios from 'axios';
import { Dispatch } from 'redux';
import { DispatchT, FAIL, LOADING, SUCCESS, SEARCH } from './launcherActionType';

const getLaunches = () => async (dispatch: Dispatch<DispatchT>) => {
    try {
        dispatch({ type: LOADING });
        const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
        dispatch({
            type: SUCCESS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({ type: FAIL });
    }
};

export function getSearchedLaunches(searchFilter: string) {
    return (dispatch: Dispatch<DispatchT>) => {
        dispatch({
            type: SEARCH,
            payload: searchFilter,
        });
    };
}
export default getLaunches;
