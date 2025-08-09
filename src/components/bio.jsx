import { IconMail, IconMapPin } from "@tabler/icons-react";
import {
  FaOrcid,
  FaGoogleScholar,
  FaGithub,
  FaCameraRetro,
} from "react-icons/fa6";
import Avatar from "../images/avatar.avif";

function Bio() {
  return (
    <div className="Bio backdrop-blur-xs border rounded-2xl shadow-lg flex flex-col justify-evenly items-center gap-4 p-5 xl:divide-y divide-black dark:divide-stone-400 text-black dark:text-white">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div className="avatar">
          <div className="avatar-width rounded-xl">
            <img src={Avatar} alt=""></img>
          </div>
        </div>
        <div className="text-3xl font-semibold whitespace-nowrap">
          Matthias Heim
        </div>
        <div className="bg-contrast text-white rounded-xl pl-3 pr-3 pt-1 pb-1">
          Master's Student
        </div>
      </div>
      <div className="links-flex flex xl:flex-col flex-row items-center truncate text-ellipsis xl:divide-y divide-black dark:divide-stone-400 text-black dark:text-white gap-3">
        <div className="flex flex-col justify-center items-center gap-3 content-between text-left xl:min-w-full">
          <div className="flex flex-row gap-3 mt-4 min-h-fit">
            <div className="bg-contrast text-lg rounded-2xl text-center flex items-center p-2">
              <a href="mailto:heim.ma@campus.lmu.de">
                <IconMail color="white" size={"1.6rem"}></IconMail>
              </a>
            </div>
            <div className="email flex flex-col min-w-200">
              <div className="font-thin opacity-80 text-sm">EMAIL</div>
              <div>
                <a
                  className="hover:text-contrast ease-in-out transition-all"
                  href="mailto:heim.ma@campus.lmu.de"
                >
                  heim.ma@campus.lmu.de
                </a>
              </div>
            </div>
          </div>
          <div className="location flex flex-row gap-3 mt-4">
            <div className="bg-contrast text-lg rounded-2xl text-center flex items-center p-2">
              <div>
                <IconMapPin color="white" size="1.6rem"></IconMapPin>
              </div>
            </div>
            <div className="location flex flex-col min-w-200">
              <div className="font-thin text-sm opacity-80">LOCATION</div>
              <div>Munich</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 p-4 pb-0 xl:min-w-full justify-center">
          <a
            href="https://github.com/HiaslHoam/"
            target="_blank"
            rel="noreferrer"
            className="tooltip tooltip-success"
            data-tip="Github"
          >
            <FaGithub size="1.6rem" className="LinkBio"></FaGithub>
          </a>
          <a
            href="https://orcid.org/0009-0005-9020-0827"
            target="_blank"
            rel="noreferrer"
            className="tooltip tooltip-success"
            data-tip="ORCID"
          >
            <FaOrcid size="1.6rem" className="LinkBio"></FaOrcid>
          </a>
          <a
            href="https://scholar.google.com/citations?user=PUb0wwkAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="tooltip tooltip-success"
            data-tip="Google Scholar"
          >
            <FaGoogleScholar
              size="1.6rem"
              className="LinkBio"
            ></FaGoogleScholar>
          </a>
          <a
            href="https://hiaslhoam.github.io/photography/"
            target="_blank"
            rel="noreferrer"
            className="tooltip tooltip-success"
            data-tip="Not Instragram"
          >
            <FaCameraRetro size="1.6rem" className="LinkBio"></FaCameraRetro>
          </a>
        </div>
        {/* <div className="flex flex-row gap-5 pt-4 -pb-2 xl:min-w-full justify-center">
          <a
            href="/imprint"
            className="hover:text-contrast ease-in-out transition-all"
          >
            Imprint
          </a>
          <a
            href="/privacy"
            className="hover:text-contrast ease-in-out transition-all"
          >
            Privacy
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Bio;
