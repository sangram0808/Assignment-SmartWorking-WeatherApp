import { useDispatch, useSelector } from 'react-redux';
import { HeaderHeight } from '../../appearance/constants';
import AppColors from '../../appearance/theme/colors';
import useTheme from '../../hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { View, Text, Switch, StyleProp, TextStyle } from 'react-native';
import { toggleTheme } from '../../redux/api_slice/theme';
import { storeKey } from '../../service/AsyncStorage';

interface HeaderProps {
  hasBackButton?: boolean;
  onBackbuttonPress?: () => void;
  backgroundcolor?: string;
  headerTitle?: string;
  headerTextStyle?: StyleProp<TextStyle>;
  showRightIcon?: boolean;
  onRightIconPress?: () => void;
}

const _headerTextStyle: StyleProp<TextStyle> = {
  fontSize: 18,
  fontFamily: 'Montserrat-Medium',
};

const Header: React.FC<HeaderProps> = ({
  hasBackButton = false,
  backgroundcolor,
  headerTitle = 'Header',
  headerTextStyle = _headerTextStyle,
}) => {

  const { themeMode, themeColors, Fonts, Common } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(themeMode == 'dark');

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    storeKey('theme', isDarkMode ? 'light' : 'dark')
  };

  useEffect(() => {
    if (themeMode) setIsDarkMode(themeMode == 'dark')
  }, [themeMode])

  return (
    <View
      style={[
        {
          height: HeaderHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: AppColors.BORDER,
          backgroundColor: backgroundcolor || themeColors.HEADER,
        },
      ]}
    >

      <View style={{ flex: 1, paddingHorizontal: hasBackButton ? 10 : 16 }}>
        <Text
          numberOfLines={1}
          style={[Fonts.titleMedium, { color: themeColors.TEXT_HEADER }, headerTextStyle]}
        >
          {headerTitle}
        </Text>
      </View>
      <Switch
        value={isDarkMode}
        onValueChange={(value) => {
          handleToggleTheme();
        }}
        trackColor={{ false: '#767577', true: themeColors.BUTTON }}
        thumbColor={isDarkMode ? '#FFF' : themeColors.BUTTON}
        style={{ marginRight: 15 }}
      />
    </View>
  );
};

export default Header;
