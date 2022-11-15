import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Test() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const checkY = (y) => {
    if (y > 550) return 550;
    if (y < 75) return 0;
    else return y;
  }

  const checkX = (x) => {
    if (x > 325) return 325;
    if (x < 0) return 0;
    else return x;
  }

  const setCoordinates = ({ x, y, z }) => {
    y = checkY(Math.ceil(y * -650));
    x = checkY(Math.ceil(x * 400));
    setData({ x, y, z });
  }

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setCoordinates)
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{
        height: 30,
        width: 30,
        backgroundColor: 'red',
        position: 'absolute',
        top: y,
        left: x,
      }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'purple',
  },
  button: {
    color: 'blue',
    border: 'solid black 2px',
  },
  middleButton: {
    color: 'grey',
  },

});