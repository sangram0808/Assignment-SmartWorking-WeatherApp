import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../../src/redux/api_slice/weather';
import themeSlice from '../../src/redux/api_slice/theme'
import { setupListeners } from '@reduxjs/toolkit/query';


export function setupApiStore(api: any) {
    const store = configureStore({
        reducer: {
            [weatherApi.reducerPath]: weatherApi.reducer,
            theme: themeSlice,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherApi.middleware),
    });

    setupListeners(store.dispatch);

    return  store ;
}
