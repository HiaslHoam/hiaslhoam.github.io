import Resume from "./resume";
import { Portfolio } from "./portfolio";

function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-4xl font-bold ">About Me</div>
        <div className="font-light mt-2">
          I'm a master's student in astrophysics at LMU Munich. I'm interested
          in exoplanets, planet formation, cosmology and astrophysical data
          sciences including machine learning.
          <br />I have experience in Python, JavaScript and web development
          including React, HTML and CSS. Apart from research and programmming, I
          have a great interest in science communication. I maintain a blog
          about astrophysics with the aim of explaining complicated topics in an
          easy manner.
        </div>
      </div>
      <div>
        <div id="portfolio" className="text-3xl font-bold">
          Portfolio
        </div>
        <div className="">
          <Portfolio></Portfolio>
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold">Resume</div>
        <div className="pl-2">
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
}

export default About;
