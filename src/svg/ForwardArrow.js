import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';


const ForwardArrow = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={moderateScale(5.479)}
        height={moderateScale(11.914)}
        viewBox="0 0 5.479 11.914"
        {...props}>
        <Path
            data-name="Path 46"
            d="m.706.701 4.376 5.711-4.376 4.795"
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="bevel"
        />
    </Svg>
);

export default ForwardArrow;
