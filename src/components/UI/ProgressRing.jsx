import React from 'react';
import './ProgressRing.css';

const ProgressRing = ({ percentage = 0, size = 80, strokeWidth = 6, color = 'var(--accent-primary)', label, sublabel, animate = true }) => {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-wrapper" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="progress-ring-svg">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--bg-elevated)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={animate ? 'progress-ring-arc' : ''}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            filter: `drop-shadow(0 0 4px ${color})`,
          }}
        />
      </svg>
      <div className="progress-ring-center">
        {label && <span className="ring-label">{label}</span>}
        {sublabel && <span className="ring-sublabel">{sublabel}</span>}
      </div>
    </div>
  );
};

export default ProgressRing;
