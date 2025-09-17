import { PortfolioCard } from "./portfolioCard";
import { serverData } from "../data";
import { useEffect, useRef, useState } from "react";

export const Portfolio = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Wait a bit after component mounts, then start the hint animation
      const timer = setTimeout(() => {
        setIsAutoScrolling(true);
        // Scroll right to show there's more content
        scrollContainer.scrollTo({
          left: 200,
          behavior: "smooth",
        });

        // After showing the hint, scroll back to the beginning
        setTimeout(() => {
          scrollContainer.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          // Turn off auto-scrolling after animation completes
          setTimeout(() => {
            setIsAutoScrolling(false);
          }, 500);
        }, 1500);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className={`portfolio pl-5 pr-5 grid grid-flow-col grid-cols-min gap-5 overflow-auto pb-10 -mb-10 select-none ${
        isAutoScrolling ? "scroll-smooth" : ""
      } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {serverData.portfolioItem
        .sort((a, b) => a.id - b.id) // Sort by id in ascending order
        .map((card) => (
          <PortfolioCard
            image={card.imagesrc}
            key={card.id}
            title={card.title}
            text={card.text}
            link={card.link}
            blanktab={card.blanktab}
          ></PortfolioCard>
        ))}
    </div>
  );
};
