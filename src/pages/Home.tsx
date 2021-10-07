import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLaunches from '../actions/launcherAction';
import { RootReducerT } from '../reducers/rootReducer';

export default function Home() {
    const launches = useSelector((state: RootReducerT) => state.launches.launches);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunches());
    }, [dispatch]);
    return <div>{launches && launches.map((val) => <h1>{val.rocket?.rocket_name}</h1>)}</div>;
}
