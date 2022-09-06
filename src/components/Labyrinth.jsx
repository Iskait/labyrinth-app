import Cell from "./Cell";
import { useSelector, useDispatch } from "react-redux";
import {
  getCoordinates,
  switchCells,
  setStart,
} from "../store/slices/labyrinthSlice";
import { useEffect } from "react";
function Labyrinth() {
  const { coordinate, path, field } = useSelector((state) => state.labyrinth);
  const dispatch = useDispatch();
  useEffect(() => {
    let timeoutId = null;
    if (path.length === 0) {
      dispatch(setStart());
    }
    if (path.length < 10) {
      timeoutId = setTimeout(() => {
        dispatch(getCoordinates());
        dispatch(switchCells(coordinate));
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [coordinate, path, dispatch]);
  return (
    <div className="flex flex-col items-center gap-y-6 py-10">
      <h1 className="font-bold text-2xl">Labyrinth game</h1>
      <p
        className={`font-semibold 
        ${path.length === 10 ? "visible" : "invisible"}`}
      >
        Try to guess.
      </p>
      <div className={`grid grid-cols-${field.length} gap-3`}>
        {field.map((cell) =>
          cell.map((x) => (
            <Cell key={x.cellNo} picked={x.picked} start={x.start} />
          ))
        )}
      </div>
    </div>
  );
}

export default Labyrinth;
