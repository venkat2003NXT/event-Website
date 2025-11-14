import React, { useEffect, useRef, useState } from "react";
import { fetchRecommended } from "../utils/api";
import Spinner from "./Spinner";

export default function RecommendedCarousel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowRef = useRef(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchRecommended();
        setItems(data.slice(0, 8));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let pos = 0;
    let anim;

    const scrollStep = () => {
      pos += 0.4;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      anim = requestAnimationFrame(scrollStep);
    };

    anim = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(anim);
  }, [items]);

  if (loading) return <Spinner />;

  return (
    <div className="reco-wrap container">
      <h2 style={{ margin: "10px 0" }}>Recommended Shows</h2>

      <div className="reco-row" ref={rowRef}>
        {items.map((item, index) => (
          <div className="reco-card" key={index}>
            <img src={resolveImageUrl(item.imageUrl)} alt={item.eventName} />
            <h4>{item.eventName}</h4>
            <p>{item.cityName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function resolveImageUrl(url) {
  return url || "/banner.jpg";
}
