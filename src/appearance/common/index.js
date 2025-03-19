
import { StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux';
import Colors from '../theme/colors';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function (mode, themeColors, Layout, Fonts, Gutters) {

  return {
    innerContainer: {
      ...Layout.fill,
      backgroundColor: themeColors.BACKGROUND,
    },

    card: {
      ...Gutters.largeVMargin,
      ...Gutters.smallHMargin,
      ...Gutters.regularHPadding,
      ...Gutters.smallVPadding,

      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: themeColors.CARD,
      borderColor: Colors.BORDER,
      ...Platform.select({
        ios: {
          shadowColor: mode == 'light' ? '#CCC' : '#111',
          shadowOffset: { width: 2, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        },
        android: {
          elevation: 3,
        },
      }),
    },
    input: {
      borderWidth: 1,
      padding: 10,
      marginTop: 20,
      borderRadius: 5,
      margin: 12,
      fontSize: 16,
      fontFamily: 'DMSans-Regular',
      borderColor: themeColors.BORDER,
      color: themeColors.TEXT_PRIMARY,
    }
  }
}

