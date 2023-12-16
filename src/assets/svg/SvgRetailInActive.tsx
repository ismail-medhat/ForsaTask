import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgRetailInActive = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G fill="#C9C9C9">
      <Path d="M19.273 0h-8.2a.633.633 0 0 0-.447.185L.68 10.134a2.328 2.328 0 0 0 0 3.288l7.5 7.5a2.31 2.31 0 0 0 1.644.679 2.31 2.31 0 0 0 1.644-.679l9.949-9.949a.633.633 0 0 0 .185-.447v-8.2A2.328 2.328 0 0 0 19.272 0Zm1.059 10.259-9.764 9.764a1.064 1.064 0 0 1-1.5 0l-7.5-7.5a1.061 1.061 0 0 1 0-1.5l9.764-9.764h7.935a1.06 1.06 0 0 1 1.06 1.059l.005 7.941Z" />
      <Path d="M16.02 3.589a1.988 1.988 0 1 0 .002 3.976 1.988 1.988 0 0 0-.001-3.976Zm.512 2.5a.722.722 0 1 1-1.02-1.022.722.722 0 0 1 1.02 1.022Z" />
    </G>
  </Svg>
);
export default SvgRetailInActive;
