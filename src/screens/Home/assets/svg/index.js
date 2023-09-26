import Svg, { Line, Path } from "react-native-svg";

export const IconHamburgerMenu = (props) => {
  return (
    <Svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Line y1="0.5" x2="17" y2="0.5" stroke="black" />
      <Line y1="14.3462" x2="8.5" y2="14.3462" stroke="black" />
      <Line y1="7.42285" x2="13.0769" y2="7.42285" stroke="black" />
    </Svg>
  );
};

export const IconArrowDown = (props) => {
  return (
    <Svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 1L4.5 4.5L8 1"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
