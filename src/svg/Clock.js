import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { moderateScale } from 'react-native-size-matters';

const Clock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={moderateScale(30)}
    height={moderateScale(30)}
    {...props}
    viewBox="0 0 32.486 30.945"
  >
    <Path
      fill="#d8b147"
      d="M0 15.472C0 6.941 7.287 0 16.242 0s16.244 6.941 16.244 15.472S25.2 30.945 16.242 30.945 0 24 0 15.472Zm2.5 0c0 7.22 6.165 13.092 13.743 13.092s13.744-5.873 13.744-13.092S23.821 2.381 16.242 2.381 2.5 8.254 2.5 15.472Zm17.284 6.643L15.359 17.9a1.168 1.168 0 0 1-.366-.843V8.808a1.251 1.251 0 0 1 2.5 0v7.758l4.057 3.866a1.151 1.151 0 0 1 0 1.682 1.291 1.291 0 0 1-1.766 0Z"
    />
  </Svg>
)
export default Clock
