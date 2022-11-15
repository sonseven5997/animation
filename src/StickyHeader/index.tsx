import React from 'react';
import { Dimensions, NativeScrollEvent, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { NativeSyntheticEvent } from 'react-native/index';

const { width } = Dimensions.get('screen');

const DEFAULT_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 100;
const SUB_HEADER_HEIGHT = 50;

const StickyHeader = () => {
  const headerHeight = useSharedValue(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    console.log(y);
    headerHeight.value = y;
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const headerAnimatedHeight = interpolate(
      headerHeight.value,
      [0, DEFAULT_HEADER_HEIGHT],
      [DEFAULT_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
      Extrapolate.CLAMP,
    );
    return { height: headerAnimatedHeight };
  });

  const subHeaderBoxAnimatedStyle = useAnimatedStyle(() => {
    const subHeaderAnimatedTop = interpolate(
      headerHeight.value,
      [0, DEFAULT_HEADER_HEIGHT],
      [
        DEFAULT_HEADER_HEIGHT - SUB_HEADER_HEIGHT / 2,
        MIN_HEADER_HEIGHT - SUB_HEADER_HEIGHT / 2,
      ],
      Extrapolate.CLAMP,
    );
    return {
      top:
        subHeaderAnimatedTop > MIN_HEADER_HEIGHT - SUB_HEADER_HEIGHT / 2 + 20
          ? subHeaderAnimatedTop
          : 9999,
    };
  });

  const subHeaderRowAnimatedStyle = useAnimatedStyle(() => {
    const subHeaderAnimatedTop = interpolate(
      headerHeight.value,
      [0, DEFAULT_HEADER_HEIGHT],
      [DEFAULT_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
      Extrapolate.CLAMP,
    );
    return {
      top:
        subHeaderAnimatedTop <= MIN_HEADER_HEIGHT + 20
          ? subHeaderAnimatedTop
          : 9999,
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[styles.defaultHeader, { ...headerAnimatedStyle }]}
      />
      <Animated.View
        style={[styles.defaultSubHeaderBox, { ...subHeaderBoxAnimatedStyle }]}
      />
      <Animated.View
        style={[styles.defaultSubHeaderRow, { ...subHeaderRowAnimatedStyle }]}
      />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultHeader: {
    height: DEFAULT_HEADER_HEIGHT,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width,
  },
  defaultSubHeaderBox: {
    height: SUB_HEADER_HEIGHT,
    width: width - 32,
    backgroundColor: 'pink',
    position: 'absolute',
    top: DEFAULT_HEADER_HEIGHT - SUB_HEADER_HEIGHT / 2,
    zIndex: 2,
    left: 16,
    borderRadius: 12,
  },
  defaultSubHeaderRow: {
    width,
    height: SUB_HEADER_HEIGHT,
    backgroundColor: 'pink',
    position: 'absolute',
    top: DEFAULT_HEADER_HEIGHT,
    zIndex: 1,
  },
  scrollview: {
    height: 1000,
    backgroundColor: 'blue',
  },
});

export default StickyHeader;
