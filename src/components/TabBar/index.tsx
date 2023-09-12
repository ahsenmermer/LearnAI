import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//Styles
import styles from './style';

function TabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View style={styles.container} key={state.index}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const {image} = route.params;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={
              route.name == 'PenguinChat' ? styles.midTabStyle : styles.tabStyle
            }
            key={index}>
            <Image
              source={image}
              style={
                route.name == 'PenguinChat'
                  ? {width: 75, height: 75}
                  : {width: 30, height: 30}
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default TabBar;
