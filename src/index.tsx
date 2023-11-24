import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import {RootStore} from "./store/RootStore";
import {Provider} from "mobx-react";
import {Api} from "./api/Api.impl";


const api = new Api('https://api.github.com/');
const rootStore = new RootStore(api);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
);
