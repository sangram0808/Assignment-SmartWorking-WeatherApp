import { useSelector } from 'react-redux';
import Gutters_ from '../appearance/gutters';
import Layout_ from '../appearance/layout';
import Fonts_ from '../appearance/fonts';
import themes from '../appearance/theme';
import common from '../appearance/common';
import { RootState } from '../redux/store'; // Adjust the import based on your store setup

interface ThemeColors {
  [key: string]: string;
}

const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeMode: 'light' | 'dark' = theme || 'light';

  const themeColors: ThemeColors = themes[themeMode];
  const Layout = Layout_();
  const Fonts = Fonts_(themeColors);
  const Gutters = Gutters_();

  const baseTheme = {
    themeMode,
    Fonts,
    Gutters,
    Layout,
    themeColors,
    Common: common(themeMode, themeColors, Layout, Fonts, Gutters),
  };

  return baseTheme;
};

export default useTheme;
