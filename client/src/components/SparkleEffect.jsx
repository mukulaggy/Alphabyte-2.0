"use client";

import React, { useEffect, useState, useCallback } from "react";

const StarCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const [lastStarTime, setLastStarTime] = useState(0);

  const createStar = useCallback(
    (x, y) => {
      const now = Date.now();

      // Reduce frequency by limiting creation to once every 100ms
      if (now - lastStarTime < 100) return;
      setLastStarTime(now);

      const star = {
        id: now,
        x: x + (Math.random() * 20 - 10), // Less spread
        y: y + (Math.random() * 20 - 10),
        scale: Math.random() * 0.4 + 0.6, // Slightly larger but fewer
        opacity: 1,
        color: Math.random() > 0.5 ? "#fff" : "#fffbcc",
      };

      setStars((prev) => [...prev, star]);

      const fadeOutInterval = setInterval(() => {
        setStars((prev) =>
          prev.map((s) =>
            s.id === star.id ? { ...s, opacity: s.opacity - 0.1 } : s
          )
        );
      }, 50);

      setTimeout(() => {
        clearInterval(fadeOutInterval);
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, 600); // Reduced lifespan
    },
    [lastStarTime]
  );

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      createStar(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [createStar]);

  return (
    <div className="star-cursor-container">
      {/* Main glowing cursor star */}
      <div
        className="main-star"
        style={{
          left: position.x,
          top: position.y,
          filter: "drop-shadow(0 0 8px white)",
        }}
      >
        <svg viewBox="0 0 24 24" className="star-svg text-white w-6 h-6">
          <path
            fill="currentColor"
            d="M12 1l2.39 7.61L22 11l-7.61 2.39L12 21l-2.39-7.61L2 11l7.61-2.39L12 1z"
          />
        </svg>
      </div>

      {/* Trailing stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="trailing-star transition-all duration-500 ease-out"
          style={{
            left: star.x,
            top: star.y,
            transform: `scale(${star.scale})`,
            opacity: star.opacity,
            filter: `drop-shadow(0 0 6px ${star.color})`,
          }}
        >
          <svg viewBox="0 0 24 24" className="star-svg w-4 h-4">
            <path
              fill={star.color}
              d="M12 1l2.39 7.61L22 11l-7.61 2.39L12 21l-2.39-7.61L2 11l7.61-2.39L12 1z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarCursor;
