import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    viewBox="0 0 18 14"
    {...props}
  >
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 7H1m0 0 6-6M1 7l6 6"
    />
  </Svg>
)
export default BackArrow
