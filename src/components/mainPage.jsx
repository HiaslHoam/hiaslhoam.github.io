import React from "react";
import About from "./about";
import { Route, Routes, Navigate } from "react-router-dom";
import PortfolioDetail from "./portfolioDetail";
import { serverData } from "../data";

function mainPage() {
  return (
    <div>
      <div className="About backdrop-blur-xs border flex flex-col justify-start dark:text-white text-black shadow-lg rounded-2xl z-1">
        <div className="about-content pt-5 pl-5 pr-5">
          <Routes>
            <Route path="/" element={<About />}></Route>
            {serverData.portfolioPages.map((page) => (
              <Route
                exact
                key={page.id}
                path={page.path}
                element={
                  <PortfolioDetail
                    title={page.title}
                    text={page.text}
                    image={page.imagesrc}
                    code={page.code}
                    stack={page.stack}
                  />
                }
              ></Route>
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default mainPage;
