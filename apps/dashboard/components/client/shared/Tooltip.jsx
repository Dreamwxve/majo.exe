"use client";

import Tippy from "@tippyjs/react";
import { animateFill } from "tippy.js";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";

export function Tooltip({ children, content, ...props }) {
 return (
  <Tippy content={content || ""} animation="shift-away" plugins={[animateFill]} hideOnClick={false} duration={400} animateFill={true} className="tippy-box font-normal" theme="translucent" interactive={false} placement="top" {...props}>
   {children}
  </Tippy>
 );
}
