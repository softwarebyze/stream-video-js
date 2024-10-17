import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

/**
 * Props for the SpeechIndicator component.
 */
export type SpeechIndicatorProps = {
  /**
   * Indicates whether the participant is speaking.
   * If true, the animation will run, otherwise the bars will remain static.
   */
  isSpeaking: boolean;
};

/**
 * The SpeechIndicator component displays animated bars to indicate speech activity.
 * The bars animate when `isSpeaking` is true, mimicking a sound meter.
 */
export const SpeechIndicator = ({ isSpeaking }: SpeechIndicatorProps) => {
  const animationValues = [
    useRef(new Animated.Value(0.6)).current,
    useRef(new Animated.Value(0.6)).current,
    useRef(new Animated.Value(0.6)).current,
  ];

  useEffect(() => {
    if (isSpeaking) {
      animationValues.forEach((animatedValue, index) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {
              toValue: index % 2 === 0 ? 0.3 : 1.1,
              duration: (index + 1) * 300,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
              toValue: 0.6,
              duration: (index + 1) * 300,
              useNativeDriver: true,
            }),
          ])
        ).start();
      });
    } else {
      animationValues.forEach((animatedValue) => {
        animatedValue.setValue(0.3); // Set a smaller value for a reduced default height
      });
    }
  }, [isSpeaking, animationValues]);

  const barStyle = (animatedValue: Animated.Value) => ({
    transform: [{ scaleY: animatedValue }],
  });

  return (
    <View style={[styles.container]}>
      {animationValues.map((animatedValue, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            isSpeaking ? barStyle(animatedValue) : styles.smallBar, // Apply smaller bar style when not speaking
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 5,
    gap: 1,
    backgroundColor: 'rgba(12, 13, 14, 0.65)',
    padding: 5,
  },
  smallBar: {
    height: '30%', // Smaller default height when animation is not running
  },
  bar: {
    width: 3,
    height: '100%',
    backgroundColor: '#005fff', // Default color, can be replaced with a theme color
    borderRadius: 2,
  },
});

export default SpeechIndicator;
