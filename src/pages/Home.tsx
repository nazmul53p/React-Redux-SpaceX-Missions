/* eslint-disable react/no-array-index-key */
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLaunches, {
    getSearchedLaunches,
    isItUpcoming,
    launchStatus,
} from '../actions/launcherAction';
import { RootReducerT } from '../reducers/rootReducer';

export default function Home() {
    const [name, getName] = useState('');
    const { launches } = useSelector((state: RootReducerT) => state.launches);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLaunches());
    }, [dispatch]);

    const onSearchByRocketName = () => {
        dispatch(getSearchedLaunches(name));
    };

    const onUpcomingLaunches = () => {
        dispatch(isItUpcoming());
    };
    const onLaunchStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(launchStatus(event.currentTarget.value));
    };

    return (
        <div>
            <div className="bg-white shadow p-4 flex rounded-md my-6 mx-10">
                <input
                    className=" focus:outline-none w-full rounded p-1"
                    type="text"
                    placeholder="Search 'Rocket Name'"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        getName(event.target.value)
                    }
                />
                <button
                    type="button"
                    onClick={onSearchByRocketName}
                    className="bg-gray-300 hover:bg-gray-500 rounded text-white p-2 pl-4 pr-4"
                >
                    <p className="font-semibold text-xs">Search</p>
                </button>
            </div>
            <div className="mx-14 grid grid-flow-col space-x-4">
                <button
                    type="button"
                    className="shadow border-gray-300 border-2 rounded-md  px-4 py-1 text-gray-500 hover:bg-gray-500 hover:text-white bg-gray-100"
                >
                    Last Week
                </button>
                <button
                    type="button"
                    className="shadow border-gray-300 border-2 rounded-md  px-4 py-1 text-gray-500 hover:bg-gray-500 hover:text-white bg-gray-100"
                >
                    Last Month
                </button>
                <button
                    type="button"
                    className="shadow border-gray-300 border-2 rounded-md  px-4 py-1 text-gray-500 hover:bg-gray-500 hover:text-white bg-gray-100"
                >
                    Last Year
                </button>
                <select
                    onChange={(event) => onLaunchStatus(event)}
                    className="shadow border-gray-300 border-2 rounded-md  px-4 py-1 text-gray-500 hover:bg-gray-500 hover:text-white bg-gray-100"
                >
                    <option value="" className="rounded-md" selected>
                        Launch Status
                    </option>
                    <option value="false" className="rounded-md">
                        Failure
                    </option>
                    <option value="true" className="rounded-md">
                        Success
                    </option>
                </select>

                <button
                    type="button"
                    onClick={onUpcomingLaunches}
                    className="shadow border-gray-300 border-2 rounded-md  px-4 py-1 text-gray-500 hover:bg-gray-500 hover:text-white bg-gray-100"
                >
                    Upcoming Launch
                </button>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {launches &&
                    launches?.map((launch, indx) => (
                        <div
                            key={launch.flight_number + indx}
                            className="rounded overflow-hidden shadow-lg"
                        >
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <span className="font-bold">Mission Name: </span>
                                    {launch.mission_name}
                                </div>
                                <p className="text-gray-700 text-base">
                                    <span className="font-bold">Rocket ID: </span>
                                    {launch.rocket.rocket_id ? launch.rocket.rocket_id : 'Null'}
                                </p>
                                <p className="text-gray-700 text-base">
                                    <span className="font-bold">Rocket Name: </span>
                                    {launch.rocket.rocket_name ? launch.rocket.rocket_name : 'Null'}
                                </p>
                                <p className="text-gray-700 text-base">
                                    <span className="font-bold">Rocket Type: </span>
                                    {launch.rocket.rocket_type ? launch.rocket.rocket_type : 'Null'}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {dayjs(launch.launch_date_local).format(
                                        'YYYY-MM-DD HH:mm:ss A'
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
