/* eslint-disable no-param-reassign */
import { DispatchT, FAIL, LaunchT, LOADING, SEARCH, SUCCESS } from '../actions/launcherActionType';

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
        default:
            return state;
    }
};

export default launcherReducer;
