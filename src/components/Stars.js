import React from 'react';
import { Image, View } from 'react-native';

const Stars = ({ stars }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image style={{ width: 14, height: 14 }} source={stars >= 1 ? require('../assets/YellowStar.png') : require('../assets/whiteStar.png')} />
      <Image style={{ width: 14, height: 14 }} source={stars >= 2? require('../assets/YellowStar.png') : require('../assets/whiteStar.png')} />
      <Image style={{ width: 14, height: 14 }} source={stars >= 3 ? require('../assets/YellowStar.png') : require('../assets/whiteStar.png')} />
      <Image style={{ width: 14, height: 14 }} source={stars >= 4 ? require('../assets/YellowStar.png') : require('../assets/whiteStar.png')} />
      <Image style={{ width: 14, height: 14 }} source={stars >= 5 ? require('../assets/YellowStar.png') : require('../assets/whiteStar.png')} />
    </View>
  );
};

export default Stars;