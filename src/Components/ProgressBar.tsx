import "./ProgressBar.css";

interface progressBar {
  completed: number;
}

export function ProgressBar({ completed }: progressBar) {
  const filler = {
    width: `${completed}%`,
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div>
      <div className="containerStyles">
        <div className="fillerStyles" style={filler}>
          <span className="labelStyles">{`${completed}%`}</span>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}
