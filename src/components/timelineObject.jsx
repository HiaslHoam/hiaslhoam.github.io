function TimelineObject({ date, link, heading, text, collab }) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-contrast rounded-full mt-1.5 -left-1.5 border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-contrast">
        {date}
      </time>
      <h3 className="text-lg font-semibold hover:text-contrast transition-all">
        <a href={link} target="_blank" rel="noreferrer">
          {heading}
        </a>
      </h3>
      <p className="mb-2 text-base font-normal opacity-60">{text}</p>
      <p className="mb-4 text-base font-medium opacity-60 italic">{collab}</p>
    </li>
  );
}

export default TimelineObject;
