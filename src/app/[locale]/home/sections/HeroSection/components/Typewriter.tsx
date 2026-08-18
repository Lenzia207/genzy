"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Typewriter({
  text,
  startDelay = 0,
  speed = 60,
  className,
  style,
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [blinking, setBlinking] = useState(true);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, speed]);

  useEffect(() => {
    const stopBlink = setTimeout(() => setBlinking(false), 2000);
    return () => clearTimeout(stopBlink);
  }, []);

  return (
    <span className={className} style={style}>
      {display}
      <span
        className={blinking ? "typewriter-caret" : "typewriter-caret-static"}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
