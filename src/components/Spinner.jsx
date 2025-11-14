import React from "react";

export default function Spinner() {
  return (
    <div className="center">
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "4px solid #ddd",
          borderTop: "4px solid #CF2D2D",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
}
