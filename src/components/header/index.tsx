import { useDispatch } from 'react-redux';
import { HeaderHeight } from '../../appearance/constants';
import AppColors from '../../appearance/theme/colors';
import useTheme from '../../hooks/useTheme';
import React, { useState } from 'react';
import { View, Text, Switch, StyleProp, TextStyle } from 'react-native';
import { toggleTheme } from '../../redux/api_slice/theme';

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
  onBackbuttonPress = () => { },
  backgroundcolor,
  headerTitle = 'Header',
  headerTextStyle = _headerTextStyle,
  showRightIcon,
  onRightIconPress,
}) => {
  const { themeMode, themeColors, Fonts, Common } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(themeMode === 'dark');

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <View
      style={[
        {
          height: HeaderHeight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderBottomColor: AppColors.GRAY1,
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
          setIsDarkMode(value);
        }}
        trackColor={{ false: '#767577', true: themeColors.BUTTON }}
        thumbColor={isDarkMode ? '#FFF' : themeColors.BUTTON}
        style={{ marginRight: 15 }}
      />
    </View>
  );
};

export default Header;
