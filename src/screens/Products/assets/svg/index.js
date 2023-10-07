import {
  Svg,
  Rect,
  Defs,
  Stop,
  LinearGradient,
  Path,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

export const BtnNumber = (props) => {
  return (
    <Svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="100" height="50" rx="25" fill="url(#paint0_linear_19_107)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_19_107"
          x1="41.9403"
          y1="-15"
          x2="92.9566"
          y2="19.5936"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#F9881F" />
          <Stop offset="1" stop-color="#FF774C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
