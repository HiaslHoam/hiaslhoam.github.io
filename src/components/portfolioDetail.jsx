import React from "react";

function portfolioDetail({ title, text, image, code, stack, link }) {
  console.log(link);
  return (
    <div className="">
      <div className="text-sm breadcrumbs min-h-max">
        <ul>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li className="">
            <p className="font-semibold text-contrast">{title}</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-4xl font-bold">{title}</div>
        <div className="-mt-5 flex flex-wrap gap-2 items-center ">
          {stack.map((stack, index) => (
            <div
              key={index}
              className={
                stack.color +
                " badge text-white p-3 rounded-lg border-none shadow-md"
              }
            >
              {stack.name}
            </div>
          ))}
          {code.map((code, index) => (
            <div
              key={index}
              className="badge badge-outline p-lang rounded-lg shadow-md"
            >
              {code}
            </div>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden max-w-3xl">
          <img
            className="w-full"
            src={require(`../images/${image}`)}
            alt={title}
          />
        </div>
        <div className="font-light mt-2 max-w-3xl pb-1">{text}</div>
        {link && (
          <div className="card-actions pb-10">
            <a href={link} target={"_blank"} rel="noreferrer">
              <button className="btn btn-success text-white">Learn More</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default portfolioDetail;
