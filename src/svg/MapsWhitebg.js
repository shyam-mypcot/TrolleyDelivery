import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const MapsWhitebg = props => (
  <Svg
    viewBox="0 0 56 55"
    xmlns="http://www.w3.org/2000/svg"
    width={ moderateScale(40)}
    height={ moderateScale(40)}
    {...props}
>
    <G data-name="Group 117" transform="translate(-300 -455)">
      <Rect
        width={56}
        height={55}
        fill="#fff"
        data-name="Rectangle 41"
        rx={12}
        transform="translate(300 455)"
      />
      <G data-name="Group 119">
        <Path
          fill="#d8b147"
          d="m341.752 473-.29.044-9.689 3.014L320.886 473l-10.233 2.767a.777.777 0 0 0-.653.7v22.016a.824.824 0 0 0 .907.728l.29-.044 9.689-3.014 10.886 3.058 10.233-2.767a.777.777 0 0 0 .653-.7v-22.016a.824.824 0 0 0-.906-.728Zm-9.979 23.3-10.887-3.074v-17.314l10.887 3.073Z"
        />
        <Path
          fill="#f8f8f8"
          stroke="#e64b63"
          d="M326.209 464a6.5 6.5 0 0 0-6.42 6.595c0 4.946 6.42 12.248 6.42 12.248s6.42-7.3 6.42-12.248a6.5 6.5 0 0 0-6.42-6.595Zm0 8.95a2.356 2.356 0 1 1 2.293-2.355 2.326 2.326 0 0 1-2.293 2.355Z"
        />
        <Path
          fill="#d8b147"
          d="m341.752 473-.29.044-9.689 3.014L320.886 473l-10.233 2.767a.777.777 0 0 0-.653.7v22.016a.824.824 0 0 0 .907.728l.29-.044 9.689-3.014 10.886 3.058 10.233-2.767a.777.777 0 0 0 .653-.7v-22.016a.824.824 0 0 0-.906-.728Zm-9.979 23.3-10.887-3.074v-17.314l10.887 3.073Z"
          data-name="ic_map_24px"
        />
        <Path
          fill="#f8f8f8"
          stroke="#e64b63"
          d="M326.209 464a6.5 6.5 0 0 0-6.42 6.595c0 4.946 6.42 12.248 6.42 12.248s6.42-7.3 6.42-12.248a6.5 6.5 0 0 0-6.42-6.595Zm0 8.95a2.356 2.356 0 1 1 2.293-2.355 2.326 2.326 0 0 1-2.293 2.355Z"
          data-name="ic_place_24px"
        />
      </G>
    </G>
  </Svg>
);
export default MapsWhitebg;
