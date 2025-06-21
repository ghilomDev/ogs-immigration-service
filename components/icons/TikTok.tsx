'use client';

import React from 'react';

interface TikTokIconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

export const TikTok = ({
  className = '',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}: TikTokIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
};

export default TikTok;
