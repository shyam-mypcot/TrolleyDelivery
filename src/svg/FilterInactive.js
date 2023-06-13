import * as React from "react"
import Svg, { Defs, G, Path, Circle } from "react-native-svg"
import { moderateScale } from 'react-native-size-matters';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FilterInactive = (props) => (
  <Svg {...props} viewBox="0 0 27.335 26" xmlns="http://www.w3.org/2000/svg" width={moderateScale(27.335)} height={moderateScale(26)}>
    <Defs></Defs>
    <G data-name="Group 169">
      <G data-name="Group 137">
        <G stroke="#212121" strokeWidth={1.5} data-name="Group 136">
          <Path
            fill="none"
            strokeLinecap="round"
            d="M2.033 10v12.315"
            data-name="Path 4"
          />
          <Path
            fill="none"
            strokeLinecap="round"
            d="M8.063 10v12.315"
            data-name="Path 5"
          />
          <Path
            fill="none"
            strokeLinecap="round"
            d="M14.095 10v12.315"
            data-name="Path 6"
          />
          <G fill="#fff" data-name="Ellipse 16" transform="translate(0 15.643)">
            <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
            <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
          </G>
          <G
            fill="#fff"
            data-name="Ellipse 17"
            transform="translate(6.031 11.633)"
          >
            <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
            <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
          </G>
          <G
            fill="#fff"
            data-name="Ellipse 18"
            transform="translate(12.061 16.616)"
          >
            <Circle cx={2.033} cy={2.033} r={2.033} stroke="none" />
            <Circle cx={2.033} cy={2.033} r={1.283} fill="none" />
          </G>
        </G>
      </G>
      <G filter="url(#a)" transform="translate(.005)">
        <Circle
          cx={4}
          cy={4}
          r={4}
          fill="#e51515"
          data-name="Ellipse 26"
          transform="translate(10.33 6)"
        />
      </G>
    </G>
  </Svg>
)
export default FilterInactive
