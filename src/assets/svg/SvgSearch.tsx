import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path stroke="#fff" strokeLinecap="round" d="m13.5 13.5 7 7" />
    <Path fill="#072040" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Z" />
    <Path stroke="#fff" d="M9 17.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" />
  </Svg>
);
export default SvgSearch;
