import React from "react";

import { useTrail, animated } from "react-spring";

import "../Styles/Buble.css";

const Buble = () => {
  const fast = { tension: 1200, friction: 40 };
  const slow = { mass: 10, tension: 200, friction: 50 };
  const trans = (x, y) => {
    return `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
  };
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur result="blur" stdDeviation="30" />
        </filter>
      </svg>
      <div
        className="hooks-main"
        onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </>
  );
};

export default Buble;
