import React, { useEffect, useRef, useState } from "react";
import { fetchUpcoming } from "../utils/api";
import Spinner from "./Spinner";
import EventCard from "./EventCard";

export default function UpcomingList() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  // Load first page
  useEffect(() => {
    loadEvents(page);
    // eslint-disable-next-line
  }, []);

  async function loadEvents(pageNo) {
    if (loading) return;

    setLoading(true);

    try {
      const data = await fetchUpcoming(pageNo);

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setEvents((prev) => [...prev, ...data]);
        setPage(pageNo + 1);
      }
    } catch (error) {
      console.error("Error loading events:", error);
    }

    setLoading(false);
  }

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && hasMore && !loading) {
          loadEvents(page);
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [page, hasMore, loading]);

  return (
    <div className="upcoming container">
      <h2>Upcoming Events</h2>

      <div className="list">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      {/* Sentinel for intersection observer */}
      <div ref={sentinelRef} style={{ minHeight: 50 }}>
        {loading && <Spinner />}
        {!hasMore && (
          <div style={{ textAlign: "center", color: "#777", padding: 10 }}>
            No more events
          </div>
        )}
      </div>
    </div>
  );
}
