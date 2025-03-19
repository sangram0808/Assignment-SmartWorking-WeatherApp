import useTheme from '../../hooks/useTheme';
import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Container: React.FC<ContainerProps> = props => {
  const { themeColors, Layout, Common } = useTheme()

  return (
    <View style={[Layout.fill, { backgroundColor: themeColors.HEADER }]}>
      <SafeAreaView style={[styles.container, ]}>
        <StatusBar
          animated={true}
          showHideTransition={'none'}
          barStyle={"default"}
        />
        <View {...props} style={styles.sub_container}>
          {props.children}
        </View>

        {(props.isLoading) && (
          <View style={styles.fullScreen}>
            <ActivityIndicator size="large" color={'blue'} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = {
  fullScreen: {
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    zIndex: 9,
  },
  container: {
    flex: 1,
    // backgroundColor: '#F4F5FA'//Colors.COLOR_WHITE
  },
  sub_container: {
    flex: 1,
  },
  zIndex: {
    flex: 1,
    zIndex: 0,
  },
};
export default Container;
