import dayjs from 'dayjs';
import React from 'react';
import { LaunchT } from '../actions/launcherActionType';

interface propsT {
    launches: LaunchT[] | undefined;
}
export default function Card({ launches }: propsT) {
    console.log(launches);
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {launches &&
                    // eslint-disable-next-line react/destructuring-assignment
                    launches.map((launch) => (
                        <div
                            key={launch.flight_number}
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
        </>
    );
}
