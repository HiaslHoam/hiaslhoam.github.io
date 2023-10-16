export const PortfolioCard = ({ image, title, text, link, blanktab }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl dark:bg-slate-800">
        <figure className="shadow-md">
          <img src={require(`../images/${image}`)} alt="card" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="">{text}</p>
          <div className="card-actions justify-end">
            <a href={link} target={blanktab && "_blank"} rel="noreferrer">
              <button className="btn btn-success text-white">More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
