import { Link } from "react-router-dom";

function TimelineObject({ date, link, heading, text, collab }) {
  const linkAvailable = !!link;
  const headingClass = linkAvailable
    ? "text-lg font-semibold hover:text-contrast transition-all"
    : "text-lg font-semibold";
  const linkClass = linkAvailable ? "hover:cursor-pointer" : "";

  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-contrast rounded-full mt-1.5 -left-1.5 border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-contrast">
        {date}
      </time>
      <h3 className={headingClass}>
        {linkAvailable ? (
          <Link to={link} className={linkClass}>
            <a href={link} target="_blank" rel="noreferrer">
              {heading}
            </a>
          </Link>
        ) : (
          heading
        )}
      </h3>
      <p className="mb-2 text-base font-normal opacity-60">{text}</p>
      <p className="mb-4 text-base font-medium opacity-60 italic">{collab}</p>
    </li>
  );
}

export default TimelineObject;
