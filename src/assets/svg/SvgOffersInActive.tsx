import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgOffersInActive = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <G
      stroke="#C9C9C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <Path
        strokeWidth={1.25}
        d="M3.295 5.534a2.262 2.262 0 0 1 2.261-2.262h1.029c.597 0 1.17-.237 1.593-.657l.719-.72a2.262 2.262 0 0 1 3.2-.009l.009.008.72.72c.423.42.996.657 1.593.657h1.031a2.262 2.262 0 0 1 2.262 2.262v1.028c0 .597.236 1.17.657 1.594l.72.72a2.26 2.26 0 0 1 .01 3.2l-.009.009-.72.72c-.42.423-.657.995-.657 1.592v1.032a2.26 2.26 0 0 1-2.263 2.258h-1.033c-.597 0-1.17.237-1.593.658l-.72.719a2.262 2.262 0 0 1-3.2.012l-.009-.009-.719-.719a2.263 2.263 0 0 0-1.593-.658H5.556a2.26 2.26 0 0 1-2.261-2.261v-1.034c0-.597-.237-1.17-.658-1.592l-.719-.72a2.26 2.26 0 0 1-.011-3.2l.009-.009.719-.72a2.26 2.26 0 0 0 .658-1.594V5.534"
      />
      <Path strokeWidth={1.5} d="m7.932 13.05 5.14-5.14" />
    </G>
  </Svg>
);
export default SvgOffersInActive;
