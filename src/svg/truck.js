import React from 'react';
import { View, Text } from 'react-native';
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Path,
    G,
  } from 'react-native-svg';

const Truck = props => {
  return (
    <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={46.439}
    height={30.14}
    viewBox="0 0 46.439 30.14"
  >
    <Path
      fill="#fff"
      d="M40.106 7.535h-6.332V0H4.222A4.026 4.026 0 0 0 0 3.767v20.722h4.222c0 3.127 2.829 5.651 6.333 5.651s6.333-2.524 6.333-5.651h12.664c0 3.127 2.829 5.651 6.333 5.651s6.333-2.524 6.333-5.651h4.222V15.07ZM10.554 27.314a3.006 3.006 0 0 1-3.166-2.826 3.006 3.006 0 0 1 3.166-2.826 3.006 3.006 0 0 1 3.166 2.826 3.006 3.006 0 0 1-3.166 2.826Zm28.5-16.954 4.137 4.709h-9.417v-4.708Zm-3.169 16.954a3.006 3.006 0 0 1-3.166-2.826 3.187 3.187 0 0 1 6.333 0 3.006 3.006 0 0 1-3.167 2.826Z"
    />
  </Svg>
  );
}

export default Truck;
