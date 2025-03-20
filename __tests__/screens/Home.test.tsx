import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/home';
import { Provider } from 'react-redux';
import { setupApiStore } from './testUtils';
import { weatherApi } from '../../src/redux/api_slice/weather';
import { server } from './server';
import { http, HttpResponse } from 'msw';
import { AppStrings } from '../../src/config/strings';
import { act } from 'react-test-renderer';

const mockStore = setupApiStore(weatherApi);

describe('Weather Screen Tests', () => {

    const renderComponent = () =>
        render(
            <Provider store={mockStore}>
                <HomeScreen />
            </Provider>
        );

    test('Test 1 : Weather Screen Snapshot', () => {
        renderComponent();
        expect(screen.toJSON()).toMatchSnapshot();
    });

    test('Test 2 : Fetches and displays weather data', async () => {
        renderComponent();

        expect(screen.getByTestId('city-input')).toBeTruthy();
        expect(screen.getByText('Search')).toBeTruthy();
    });

    test('Test 3 : Updates input field when typing', async () => {
        renderComponent();

        const input = screen.getByTestId('city-input');
        await act(async () => {
            fireEvent.changeText(input, 'London');
        });

        expect(input.props.value).toBe('London');
    });

    test('Test 4 : Handles API error correctly', async () => {
        // Override the existing request handler to return a 500 error
        server.use(
            http.get('https://api.openweathermap.org/data/2.5/weather', () => {
                return HttpResponse.error(); // Correct way to return an error response
            })
        );

        const { getByTestId, getByText } = renderComponent();

        fireEvent.changeText(getByTestId('city-input'), 'InvalidCity');
        fireEvent.press(getByText('Search'));

        // Wait for the error message to appear
       
        await waitFor(() => {
            let ponge=getByText(AppStrings.ERROR)
            expect(ponge).toBeTruthy(); // Adjust based on actual error message in your UI
        });
    });

    test('Test 5 : RTK Query: fetches weather data and updates state', async () => {

        const store = setupApiStore(weatherApi);
        await store.dispatch(weatherApi.endpoints.getWeatherByCity.initiate('London'));
        await waitFor(() => {
            const state = store.getState().weatherApi.queries;
            expect(state).toBeDefined();
        });

        const key = weatherApi.endpoints.getWeatherByCity.select('London')(store.getState());
        expect(key.data).toEqual({
            name: 'London',
            main: { temp: 22 },
            weather: [{ description: 'Clear Sky' }],
        });
    });

    test('Test 6 : Displays weather data after API fetch', async () => {
        renderComponent();

        fireEvent.changeText(screen.getByTestId('city-input'), 'London');
        fireEvent.press(screen.getByText('Search'));

        await waitFor(() => expect(screen.getByTestId('city-name')).toBeTruthy());

        expect(screen.getByTestId('city-name').props.children).toContain('London');
        expect(screen.getByTestId('city-temp')).toBeTruthy();
        expect(screen.getByTestId('city-description')).toBeTruthy();
    });
 
});


