import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 32"
    {...props}
  >
    <path
      stroke="#CBD2D9"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 24c2.336-2.477 5.507-4 9-4s6.664 1.523 9 4m-4.5-12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUserSvg;
