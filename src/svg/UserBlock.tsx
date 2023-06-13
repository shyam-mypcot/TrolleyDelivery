import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
import { moderateScale } from 'react-native-size-matters';

const UserBlock = (props: SvgProps) => (
  <Svg
  // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={moderateScale(58)}
    height={moderateScale(58)}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <Circle
      cx={29}
      cy={29}
      r={28}
      fill="#BA0000"
      fillOpacity={0.05}
      stroke="#BA0000"
      strokeWidth={2}
    />
    <Circle
      cx={29}
      cy={20}
      r={6}
      fill="#fff"
      stroke="#BA0000"
      strokeWidth={2}
    />
    <Path
      fill="#fff"
      stroke="#BA0000"
      strokeWidth={2}
      d="M17 37.25C17 40.978 17 44 29 44c8.531 0 10.997-1.527 11.71-3.75L34.5 39l-1-3v-5.01a20.345 20.345 0 0 0-4.5-.49c-6.627 0-12 3.022-12 6.75Z"
    />
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33.757 39.243a6 6 0 1 0 8.485-8.485m-8.485 8.485a6 6 0 0 1 8.485-8.485m-8.485 8.485 8.486-8.486"
    />
    <Path fill="#fff" d="M42.5 35a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    <Path
      stroke="#BA0000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M34.818 38.182a4.5 4.5 0 1 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 0 1 6.364-6.364m-6.364 6.364 6.364-6.364"
    />
  </Svg>
)
export default UserBlock
