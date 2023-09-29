import Svg, { Line, Path } from "react-native-svg";

export const IconStart = (props) => {
  return (
    <Svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.5 0L9.78795 4.3509L14.6329 5.18237L11.202 8.70285L11.9084 13.5676L7.5 11.3925L3.09161 13.5676L3.79801 8.70285L0.367076 5.18237L5.21205 4.3509L7.5 0Z"
        fill="#F5A62E"
      />
    </Svg>
  );
};

export const IconHamburgerMenu = (props) => {
  return (
    <Svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
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
      {...props}
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
