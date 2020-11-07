import React, { useContext } from 'react'
import { StateContext, DispatchContext } from './../../utils/context/MainContext';
import DataAction from './../../utils/context/actions/DataAction';
import AppAction from './../../utils/context/actions/AppAction';


export default function Demo() {
    const { app, data } = useContext(StateContext);
    const { dataDispatch, appDispatch } = useContext(DispatchContext);

    const getData = () => {
        new DataAction(dataDispatch)
            .getData()
            .then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            });

        new AppAction(appDispatch)
            .DarkTheme();
    }

    const doDark = () => {
        new AppAction(appDispatch)
            .DarkTheme();
    }

    return (
        <div>
            <button onClick={getData}>Get Data</button>
            <button onClick={doDark}>Make Dark Theme</button>

            {data.map(item => {
                return (<div key={item}>
                    <h1>{item.toString()}</h1><br />
                </div>)
            })}
        </div>
    )
}
