import Resume from "./resume";
import { Portfolio } from "./portfolio";

function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-4xl font-bold ">About Me</div>
        <div className="font-light mt-2">
          Hey there! 👋🏻 <br />
          <br />I am a master's student in astrophysics at LMU Munich with a
          strong interest in exoplanets, planet formation and astrophysical data
          science, including machine learning. Since October 2024, I have been
          working on my master's thesis at the{" "}
          <i>Theoretical Astrophysics of Extrasolar Planets</i> chair under
          Prof. Kevin Heng. My research focuses on atmospheric retrieval using
          JWST spectral data to determine the composition of exoplanetary
          atmospheres. I am combining traditional Bayesian methods with machine
          learning techniques to improve the efficiency of atmospheric
          retrievals.
          <br />
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
