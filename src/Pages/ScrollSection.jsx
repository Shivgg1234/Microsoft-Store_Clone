import { useRef } from "react";
import "./ScrollSection.css";

export default function ScrollSection({ title, data, renderCard }) {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-section">


      <div className="scroll-header">
        <h2>{title} ›</h2>

        <div className="scroll-buttons">
          <button className="scroll-btn" onClick={scrollLeft}>
            ◀
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            ▶
          </button>
        </div>
      </div>

      <div className="scroll-container" ref={scrollRef}>
        {data.map((item, index) => renderCard(item, index))}
      </div>

    </div>
  );
}