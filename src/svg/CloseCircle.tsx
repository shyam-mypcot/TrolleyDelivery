import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
import { moderateScale } from 'react-native-size-matters';

const CloseCircle = (props: SvgProps) => (
  <Svg
  // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={moderateScale(44)}
    height={moderateScale(44)}
    fill="none"
    {...props}
  >
    <Circle
      cx={22}
      cy={22}
      r={18.333}
      fill="#E3C133"
      stroke="#fff"
      strokeWidth={3}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M28 16 16 28m0-12 12 12"
    />
  </Svg>
)
export default CloseCircle
