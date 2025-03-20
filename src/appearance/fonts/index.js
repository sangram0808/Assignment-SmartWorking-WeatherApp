/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { FontSize } from '../constants'
import Colors from '../theme/colors'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

export default function (Colors) {
  return StyleSheet.create({
    textExtraTiny: {
      fontSize: FontSize.extraTiny,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    textMedium: {
      fontSize: FontSize.medium,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },

    subtitleSmall: {
      fontSize: FontSize.small,
      fontWeight: '500',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    subtitleMediumSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: '500',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    subtitleMedium: {
      fontSize: FontSize.small * 2,
      fontWeight: '500',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },
    subtitleRegular: {
      fontSize: FontSize.regular,
      fontWeight: '500',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Regular'
    },

    titleTiny: {
      fontSize: FontSize.tiny,
      fontWeight: 'bold',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Bold'
    },
    titleSmall: {
      fontSize: FontSize.small,
      fontWeight: 'bold',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Bold'
    },
    titleMediumSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Bold'
    },
    titleMedium: {
      fontSize: FontSize.medium * 2,
      fontWeight: 'bold',
      color: Colors.TEXT,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Bold'
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.TEXT,
      fontFamily: 'DMSans-Bold'
    },

    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
