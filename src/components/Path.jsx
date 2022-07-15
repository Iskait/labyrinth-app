import { useSelector } from "react-redux";
import arrowUp from "../assets/arrowup.svg";
import arrowDown from "../assets/arrowdown.svg";
import arrowLeft from "../assets/arrowleft.svg";
import arrowRight from "../assets/arrowright.svg";

function Path() {
  const { path } = useSelector((state) => state.labyrinth);
  return (
    <div className="path">
      <div className="path__container _container">
        <div className="path__field">
          {path.map((v, idx) => (
            <div
              key={idx + v}
              className="path__square"
              style={{ backgroundColor: idx === path.length - 1 ? "red" : "" }}
            >
              <img
                src={
                  v === "up"
                    ? arrowUp
                    : v === "down"
                    ? arrowDown
                    : v === "left"
                    ? arrowLeft
                    : arrowRight
                }
                alt="arrow"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Path;
