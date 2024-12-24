import Resume from "./resume";
import { Portfolio } from "./portfolio";

function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-4xl font-bold ">About Me</div>
        <div className="font-light mt-2">
          Hey there! 👋🏻 <br />
          <br />
          I'm a master's student in astrophysics at LMU Munich. I'm interested
          in exoplanets, planet formation, cosmology and astrophysical data
          sciences including machine learning. I have started with my master's
          thesis in October 2024 at the
          <i> Theoretical Astrophysics of Extrasolar Planets</i> chair of Prof.
          Kevin Heng, where I work on atmospheric retreival using JWST spectral
          data to work out the composition of the atmospheres of exoplanets.
          <br />
          <br />I have experience in Python, JavaScript and Web Development
          including React, HTML and CSS. Apart from research and programmming, I
          have a great interest in science communication and giving educational
          talks.
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
