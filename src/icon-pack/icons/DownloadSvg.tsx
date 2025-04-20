import * as React from "react";
import type { SVGProps } from "react";
const SvgDownloadSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3"
    />
  </svg>
);
export default SvgDownloadSvg;
