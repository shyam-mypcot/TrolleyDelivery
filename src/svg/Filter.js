import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"
const Filter = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={15.249}
    height={14.208}
    viewBox="0 0 15.249 14.208"
  >
    <G stroke="#212121" strokeWidth={1.5} data-name="Group 4">
      <Path
        fill="none"
        strokeLinecap="round"
        d="M2.033.75v12.708"
        data-name="Path 4"
      />
      <Path
        fill="none"
        strokeLinecap="round"
        d="M7.625.75v12.708"
        data-name="Path 5"
      />
      <Path
        fill="none"
        strokeLinecap="round"
        d="M13.216.75v12.708"
        data-name="Path 6"
      />
      <G fill="#fff" data-name="Ellipse 16" transform="translate(0 5.325)">
        <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
        <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
      </G>
      <G fill="#fff" data-name="Ellipse 17" transform="translate(5.591 .383)">
        <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
        <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
      </G>
      <G fill="#fff" data-name="Ellipse 18" transform="translate(11.183 9.759)">
        <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
        <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
      </G>
    </G>
  </Svg>
)
export default Filter
