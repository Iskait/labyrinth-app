import { useSelector } from "react-redux";
import arrowUp from "../assets/arrowup.svg";
import arrowDown from "../assets/arrowdown.svg";
import arrowLeft from "../assets/arrowleft.svg";
import arrowRight from "../assets/arrowright.svg";

function Path() {
  const { path } = useSelector((state) => state.labyrinth);
  return (
    <div className="grid grid-cols-5 mx-auto max-w-[250px] gap-2">
      {path.map((v, idx) => (
        <div
          key={idx + v}
          className={`h-8 w-8 flex items-center justify-center rounded-md bg-sky-300 ${
            idx === path.length - 1 ? "bg-red-700" : ""
          }`}
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
  );
}

export default Path;
