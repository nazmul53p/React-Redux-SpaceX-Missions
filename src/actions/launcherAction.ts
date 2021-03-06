import axios from 'axios';
import { Dispatch } from 'redux';
import {
    DispatchT,
    FAIL,
    LAST_YEAR,
    LAUNCH_STATUS,
    LOADING,
    SEARCH,
    SUCCESS,
    UPCOMING,
} from './launcherActionType';

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

export function isItUpcoming() {
    return (dispatch: Dispatch<DispatchT>) => {
        dispatch({
            type: UPCOMING,
        });
    };
}

export function launchStatus(status: string) {
    return (dispatch: Dispatch<DispatchT>) => {
        dispatch({
            type: LAUNCH_STATUS,
            payload: status,
        });
    };
}
export function lastYear(year: number) {
    return async (dispatch: Dispatch<DispatchT>) => {
        try {
            dispatch({ type: LOADING });
            const res = await axios.get(
                `https://api.spacexdata.com/v3/launches?launch_year=${year}`
            );
            dispatch({
                type: LAST_YEAR,
                payload: res.data,
            });
        } catch (e) {
            dispatch({ type: FAIL });
        }
    };
}
export default getLaunches;
