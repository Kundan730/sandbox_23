"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FolderKanban } from "lucide-react";

export const LaunchBtn = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const roundedDivRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    if (roundedDivRef.current && arrowRef.current) {
      timelineRef.current
        .to(roundedDivRef.current, {
          duration: 0.5,
          height: "3rem",
          width: "3rem",
          borderRadius: "0.5rem",
          opacity: 1,
          marginLeft: 0,
        })
        .to(
          arrowRef.current,
          {
            duration: 0.5,
            height: "1.75rem",
            width: "1.75rem",
            opacity: 1,
            x: 40,
            color: "#000000",
            display: "block",
          },
          "-=0.25"
        );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-black text-white transition-colors duration-300 text-lg w-auto p-2"
    >
      <FolderKanban
        ref={arrowRef}
        className="absolute z-10 h-7 w-9 opacity-0 -left-6"
      />
      <div
        className="h-[0.70rem] w-[0.70rem] rounded-full ml-5 bg-white mr-4"
        ref={roundedDivRef}
      ></div>
      <span className="pr-5">launch project</span>
    </button>
  );
};
