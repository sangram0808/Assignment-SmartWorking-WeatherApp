
import * as React from 'react';
import { Provider } from "react-redux";
import { store } from '../redux/store/index'
import Navigation from './navigation';
import { View } from 'react-native';

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}