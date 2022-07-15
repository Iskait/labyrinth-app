import Cell from "./Cell";
import { useSelector, useDispatch } from 'react-redux';
import { getCoordinates, switchCells, setStart } from '../store/slices/labyrinthSlice';
import { useEffect } from "react";
function Labyrinth() {
  const {coordinate, path, field} = useSelector(state => state.labyrinth);
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
      }, 1000)
      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [coordinate, path, dispatch])
  return (
    <div className="labyrinth">
      <div className="labyrinth__container _container">
        <h1 className="labyrinth__title">Labyrinth game</h1>
        <p 
        className="labyrinth__text"
        style={{visibility: path.length === 10 ? 'visible' : 'hidden'}}>Try to guess.
        </p>
        <div className="labyrinth__block">
          {field.map((cell, idx) => (
            <div 
            className="labyrinth__column"
            key={idx}>
              {cell.map(x=> <Cell key={x.cellNo} picked={x.picked} start={x.start}/>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Labyrinth;
