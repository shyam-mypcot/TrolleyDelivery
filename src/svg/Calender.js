import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const Calender = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={ moderateScale(32)} height={ moderateScale(32)}  viewBox="0 0 36 38" {...props}>
    <G data-name="Group 6">
      <G data-name="24x24/On Light/Schedule-Alert">
        <Path fill="none" d="M0 0h36v38H0z" />
        <Path
          fill="#d8b147"
          d="M28.488 34.75H7.956a4.838 4.838 0 0 1-4.706-4.948v-18A5.08 5.08 0 0 1 4.491 8.45a4.608 4.608 0 0 1 3.037-1.579V4.6a1.319 1.319 0 0 1 1.283-1.35 1.319 1.319 0 0 1 1.282 1.35v2.25h9.848c-.006.138-.01.289-.01.45a10.411 10.411 0 0 0 .245 2.25H7.956a2.2 2.2 0 0 0-2.139 2.25v3.15h17.559a9.138 9.138 0 0 0 5.967 2.25 8.93 8.93 0 0 0 3.85-.867v13.469a4.837 4.837 0 0 1-4.705 4.948ZM5.817 17.65v12.152a2.2 2.2 0 0 0 2.139 2.248h20.532a2.2 2.2 0 0 0 2.139-2.25V17.65Zm24.81-4.2v-1.649a2.2 2.2 0 0 0-2.139-2.251H23.75a6.543 6.543 0 0 1-.4-2.25c0-.149.005-.3.015-.45h2.985V4.6a1.285 1.285 0 1 1 2.567 0v2.271A4.607 4.607 0 0 1 31.95 8.45a5.082 5.082 0 0 1 1.24 3.347v.322a5.886 5.886 0 0 1-2.561 1.331Z"
        />
        <Path
          fill="#fcca24"
          d="M28.97 15.222a6.467 6.467 0 1 1 6.527-6.467 6.5 6.5 0 0 1-6.527 6.467Z"
          data-name="Shape"
        />
      </G>
    </G>
  </Svg>
);
export default Calender;
