/* eslint-disable no-param-reassign */
import {
    DispatchT,
    FAIL,
    LaunchT,
    LAUNCH_STATUS,
    LOADING,
    SEARCH,
    SUCCESS,
    UPCOMING,
} from '../actions/launcherActionType';

export interface DefaultStatesI {
    loading: boolean;
    launches?: LaunchT[];
    backupLaunches?: LaunchT[];
}
const defaultState: DefaultStatesI = {
    loading: false,
    launches: [],
    backupLaunches: [],
};

const launcherReducer = (
    state: DefaultStatesI = defaultState,
    action: DispatchT
): DefaultStatesI => {
    switch (action.type) {
        case SEARCH: {
            state.launches = state.backupLaunches;
            const filteredLaunches = state.launches?.filter(({ rocket }) => {
                return rocket.rocket_name.toLowerCase() === action.payload.toLowerCase();
            });
            return {
                ...state,
                launches: filteredLaunches,
            };
        }
        case UPCOMING: {
            state.launches = state.backupLaunches;
            const filteredLaunches = state.launches?.filter((launch) => launch.upcoming === true);
            return {
                ...state,
                launches: filteredLaunches,
            };
        }
        case LAUNCH_STATUS: {
            state.launches = state.backupLaunches;
            const filteredLaunches = state.launches?.filter(
                (launch) => launch.launch_success === JSON.parse(action.payload)
            );
            return {
                ...state,
                launches: filteredLaunches,
            };
        }
        case FAIL:
            return {
                loading: false,
                launches: [],
            };
        case LOADING:
            return {
                loading: true,
                launches: [],
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                launches: action.payload,
                backupLaunches: action.payload,
            };
        default:
            return state;
    }
};

export default launcherReducer;
