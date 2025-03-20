import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';

import { useGetWeatherByCityQuery } from '../../redux/api_slice/weather';
import { Container, Header, Button } from '../../components';

import useTheme from '../../hooks/useTheme';
import { AppStrings } from '../../config/strings';
import Colors from '../../appearance/theme/colors';
import TEST_ID from '../../config/test_ids';
import { TestIDs } from '../../config/test_ids/HomeScreen';
import { getKey, storeKey } from '../../service/AsyncStorage';

interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
}

interface WeatherError {
    message?: string;
}

const HomeScreen: React.FC = () => {
    const { themeColors, Fonts, Common } = useTheme();
    const [city, setCity] = useState<string>('');
    const [searchedCity, setSearchedCity] = useState<string>('');

    const { data, error, isLoading } = useGetWeatherByCityQuery<WeatherData, WeatherError>(searchedCity, {
        skip: !searchedCity,
    });

    const handleSearch = () => {
        if (city.trim()) {
            setSearchedCity(city);
        }
    };

    useEffect(() => {
        getLastSearchCity()
    }, [])

    const getLastSearchCity = async () => {
        const searched_city = await getKey('searched_city')
        if (searched_city) {
            setSearchedCity(searched_city)
            setCity(searched_city)
        }
    }

    useEffect(() => {
        if (data && data.name) {
            storeKey('searched_city', data.name)
        }
    }, [data])
 

    return (
        <Container>
            <Header headerTitle={AppStrings.APP_NAME} />

            <View style={{ flex: 1, backgroundColor: themeColors.BACKGROUND }}>

                <TextInput
                    testID={TEST_ID.CITY_INPUT}
                    value={city}
                    onChangeText={setCity}
                    placeholder="Enter city"
                    placeholderTextColor={themeColors.TEXT_SECONDARY}
                    style={[Common.input, { borderColor: themeColors.BORDER, color: themeColors.TEXT_PRIMARY }]}
                />

                <Button style={{ width: '40%', alignSelf: 'flex-start', marginHorizontal: 12 }} label={AppStrings.SEARCH} onPress={handleSearch} />

                {(data || error || isLoading) && <View style={[Common.card]}>

                    {isLoading && <ActivityIndicator testID={TestIDs.LOADING_INDICATOR} size="large" color={themeColors.PRIMARY} />}

                    {error && <Text testID={TestIDs.ERROR_MESSAGE} style={{ fontSize: 16, color: Colors.RED }}>{AppStrings.ERROR}</Text>}

                    {(!error && data) && (<>
                        <Text testID={TEST_ID.CITY_NAME} style={[Fonts.titleMediumSmall, { color: themeColors.TEXT_PRIMARY }]}>🌍 {data.name}</Text>
                        <Text testID={TEST_ID.CITY_TEMP} style={[Fonts.titleMedium, { color: themeColors.TEXT_HIGHLIGHT }]}>{data.main.temp}°C</Text>
                        <Text testID={TEST_ID.CITY_DESCRIPTION} style={[Fonts.textSmall, { color: themeColors.TEXT_SECONDARY }]}> {data.weather[0].description}</Text>
                    </>
                    )}

                </View>}

            </View>
        </Container>
    );
};

export default HomeScreen;
