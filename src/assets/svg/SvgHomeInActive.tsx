import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgHomeInActive = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#C9C9C9"
      d="M22.143 10.17 11.737.195a.7.7 0 0 0-.973 0L.347 10.18a1.174 1.174 0 0 0 .825 2.006h1.641v8.438A1.875 1.875 0 0 0 4.688 22.5h13.125a1.875 1.875 0 0 0 1.875-1.875v-8.439h1.641a1.174 1.174 0 0 0 1.171-1.172 1.2 1.2 0 0 0-.357-.844Z"
    />
  </Svg>
);
export default SvgHomeInActive;
