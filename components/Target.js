import { View } from 'react-native';

const Target = ({ coord }) => {
  return (
    <View style={{
      height: 30,
      width: 30,
      borderRadius: '50%',
      backgroundColor: 'black',
      position: 'absolute',
      top: coord.y,
      left: coord.x,
    }}></View>
  )
}

export default Target;