/* eslint-disable camelcase */
export const LOADING = 'LOADING';
export const FAIL = 'FAIL';
export const SUCCESS = 'SUCCESS';
export const SEARCH = 'SEARCH';
export const UPCOMING = 'UPCOMING';
export const LAUNCH_STATUS = 'LAUNCH_STATUS';

export type rocketT = {
    rocket_id: number;
    rocket_name: string;
    rocket_type: string;
};

export type LaunchT = {
    flight_number: number;
    mission_name: string;
    mission_id?: never[];
    upcoming: boolean;
    launch_year: Date;
    launch_date_unix: Date;
    launch_date_utc: Date;
    launch_date_local: Date;
    rocket: rocketT;
    launch_success: boolean;
    details: string;
};
export interface LoadingI {
    type: typeof LOADING;
}

export interface FailI {
    type: typeof FAIL;
}
export interface SearchI {
    type: typeof SEARCH;
    payload: string;
}

export interface SuccessI {
    type: typeof SUCCESS;
    payload: LaunchT[];
}
export interface UpcomingI {
    type: typeof UPCOMING;
}
export interface LaunchStatusI {
    type: typeof LAUNCH_STATUS;
    payload: string;
}

export type DispatchT = LoadingI | FailI | SuccessI | SearchI | UpcomingI | LaunchStatusI;
