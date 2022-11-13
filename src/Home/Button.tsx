import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

const { width } = Dimensions.get('screen');

const Button = (props: ButtonProps) => (
  <View style={styles.view}>
    <TouchableOpacity
      style={styles.touchable}
      {...props}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  view: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  touchable: {
    backgroundColor: '#04AA6D',
    width: width - 32,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
export default Button;
