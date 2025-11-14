import React from "react";
import dayjs from "dayjs";

export default function EventCard({ event }) {
  if (!event) return null;

  const date = event.date
    ? dayjs(event.date).format("DD MMM YYYY")
    : "Date not available";

  const distance = parseFloat(event.distanceKm) || 0;

  return (
    <div className="event-card">
      <img
        className="event-thumb"
        src={resolveImageUrl(event.imageUrl)}
        alt={event.eventName}
      />

      <div className="event-info">
        <h3>{event.eventName}</h3>
        <p>
          {event.cityName} • {date}
        </p>

        <p style={{ color: "#6e6e6e", fontSize: "13px" }}>
          {event.weather} • {distance} km away
        </p>
      </div>
    </div>
  );
}

// Converts Google Drive links (if used)
function resolveImageUrl(url) {
  if (!url) return "/banner.jpg";

  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }

  return url;
}
