"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";

interface CodeProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const Code = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  className,
  ...props
}: CodeProps) => {
  const controls = useAnimation();

  return (
    <div
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: "visible" }}
        className={className}
        {...props}
      >
        {/* Left arrow */}
        <motion.polyline
          points="8 6 2 12 8 18"
          variants={{
            normal: { x: 0 },
            animate: { x: -2 },
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={controls}
          initial="normal"
        />

        {/* Right arrow */}
        <motion.polyline
          points="16 18 22 12 16 6"
          variants={{
            normal: { x: 0 },
            animate: { x: 2 },
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { Code };
