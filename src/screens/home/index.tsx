import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useGetWeatherByCityQuery } from '../../redux/api_slice/weather';
import { Container, Header, Button } from '../../components';
import useTheme from '../../hooks/useTheme';
import { AppStrings } from '../../config/strings';
import Colors from '../../appearance/theme/colors';

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
    const { themeColors, Layout, Common } = useTheme();
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

    if (isLoading) return <ActivityIndicator testID="loading-indicator" />;
    
    return (
        <Container>
            <Header headerTitle={AppStrings.APP_NAME} />

            <View style={{ flex: 1, backgroundColor: themeColors.BACKGROUND }}>

                <TextInput
                    testID="city-input"
                    value={city}
                    onChangeText={setCity}
                    placeholder="Enter city"
                    placeholderTextColor={themeColors.TEXT_SECONDARY}
                    style={[Common.input, { borderColor: themeColors.BORDER, color: themeColors.TEXT_PRIMARY }]}
                />

                <Button style={{ width: '40%', alignSelf: 'flex-start', marginHorizontal: 12 }} label={AppStrings.SEARCH} onPress={handleSearch} />
                <Button label="Start" accessibilityRole="button" accessibilityLabel="start" onPress={() => Alert.alert('Started!')} />

                {(data || error || isLoading) && <View style={[Common.card]}>

                    {isLoading && <ActivityIndicator testID="loading-indicator" size="large" color={themeColors.PRIMARY} />}

                    {error && <Text style={{ fontSize: 16, color: Colors.RED }}>{AppStrings.ERROR}</Text>}

                    {(!error && data) && (<>
                        <Text testID="city-name" style={{ fontSize: 30, fontFamily: 'DMSans-Bold', color: themeColors.TEXT_PRIMARY }}>🌍 {data.name}</Text>
                        <Text testID="city-temp" style={{ fontSize: 60, fontFamily: 'DMSans-Bold', color: themeColors.TEXT_HIGHLIGHT }}>{data.main.temp}°C</Text>
                        <Text testID="city-description" style={{ fontSize: 16, fontFamily: 'DMSans-Bold', color: themeColors.TEXT_SECONDARY }}> {data.weather[0].description}</Text>
                    </>
                    )}

                </View>}

            </View>
        </Container>
    );
};

export default HomeScreen;
