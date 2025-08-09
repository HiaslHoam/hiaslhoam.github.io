import { PortfolioCard } from "./portfolioCard";
import { serverData } from "../data";

export const Portfolio = () => {
  return (
    <div className="portfolio pl-5 pr-5 grid grid-flow-col grid-cols-min gap-5 overflow-auto pb-10 -mb-10">
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
