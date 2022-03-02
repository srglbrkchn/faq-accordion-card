import * as React from "react";
import { SVGProps } from "react";

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg className="arrow" width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m1 .799 4 4 4-4" stroke="#F47B56" strokeWidth={2} fill="none" />
  </svg>
);

export default SvgArrow;
