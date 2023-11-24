import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {RootStore} from "./store/RootStore.impl";
import {Provider} from "mobx-react";
import {Api} from "./api/Api.impl";
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import {theme} from "./theme/theme";
import {apiConfig} from "./config/apiConfig";


const api = new Api(apiConfig.baseURL);
const rootStore = new RootStore(api);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={rootStore}>
                <App/>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
);
