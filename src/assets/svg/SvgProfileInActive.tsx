import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgProfileInActive = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#C9C9C9"
      d="M9.66 1.25a4.551 4.551 0 0 0-4.546 4.546 4.551 4.551 0 0 0 4.546 4.546 4.551 4.551 0 0 0 4.546-4.546A4.551 4.551 0 0 0 9.66 1.25Zm0-1.25c3.196 0 5.796 2.6 5.796 5.796s-2.6 5.796-5.796 5.796a5.803 5.803 0 0 1-5.796-5.796C3.864 2.6 6.464 0 9.66 0ZM8.372 14.13c-1.895 0-3.683.755-5.033 2.126a7.206 7.206 0 0 0-2.064 4.476h16.77a7.207 7.207 0 0 0-2.064-4.476c-1.35-1.371-3.137-2.126-5.033-2.126H8.372Zm0-1.25h2.576c2.233 0 4.337.887 5.924 2.499a8.447 8.447 0 0 1 2.449 5.96.644.644 0 0 1-.644.643H.644A.644.644 0 0 1 0 21.338c0-2.24.87-4.356 2.449-5.96 1.587-1.61 3.69-2.498 5.923-2.498Z"
    />
  </Svg>
);
export default SvgProfileInActive;
