import React, { createContext, useReducer } from 'react'
import AppReducer, { initAppState } from './reducers/AppReducer';
import DataReducer, { initDataState } from './reducers/DataReducer';

export const StateContext = createContext();
export const DispatchContext = createContext();

export default function MainContext(props) {

    const [data, dataDispatch] = useReducer(DataReducer, initDataState);
    const [app, appDispatch] = useReducer(AppReducer, initAppState);

    const global_state = {
        data, app
    }
    const global_dispatch = {
        dataDispatch, appDispatch
    }

    return (
        <StateContext.Provider value={global_state}>
            <DispatchContext.Provider value={global_dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}
