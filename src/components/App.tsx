import React, {createRef} from 'react';
import '../App.css';
import {observer} from "mobx-react";
import {withStore} from "../HOCs/withStore";
import {IRootStore} from "../store/RootStore.interface";

type Props = {
    store: IRootStore
}



export const App = withStore(observer(({store}: Props) => {
    const ref = createRef<HTMLInputElement>();
    console.log("render");
    return (
        <div className="App">
            {store.time}
            {store.something}
            {store.response && store.response[0].author.login}
            <input type="text" ref={ref}/>

            <button onClick={() => store.increase()}>increase</button>
            <button onClick={() => store.decrease()}>decrease</button>
            <button onClick={() => store.setSomething(ref.current?.value || "")}>set smth</button>
            <button onClick={() => store.request()}>Request</button>
        </div>
    );
}));