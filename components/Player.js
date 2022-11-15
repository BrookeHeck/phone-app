import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Player() {

  const dispatch = useDispatch();
  const playerCoords = useSelector(state => state.coordinates.player);

  const setCoords = ({ x, y }) => {
    dispatch({type: 'move_player', payload: {x, y}});
  }

  useEffect(() => {
    Accelerometer.addListener(setCoords)
  }, []);

  return (
    <View>
      <Text>{playerCoords.x}</Text>
      <Text>{playerCoords.y}</Text>
      <View style={{
        height: 30,
        width: 30,
        borderRadius: '50%',
        backgroundColor: 'red',
        position: 'absolute',
        top: playerCoords.y,
        left: playerCoords.x,
      }}></View>
    </View>
  );
}