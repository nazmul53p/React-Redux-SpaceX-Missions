import { DispatchT, FAIL, LaunchT, LOADING, SUCCESS } from '../actions/launcherActionType';

export interface DefaultStatesI {
    loading: boolean;
    launches?: LaunchT[];
}
const defaultState: DefaultStatesI = {
    loading: false,
};

const launcherReducer = (
    state: DefaultStatesI = defaultState,
    action: DispatchT
): DefaultStatesI => {
    switch (action.type) {
        case FAIL:
            return {
                loading: false,
            };
        case LOADING:
            return {
                loading: true,
            };
        case SUCCESS:
            return {
                loading: false,
                launches: action.payload,
            };
        default:
            return state;
    }
};

export default launcherReducer;
