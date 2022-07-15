import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../store/slices/labyrinthSlice";
import { setIsRight, setShowAnswer } from "../store/slices/answerSlice";
import thumbUp from "../assets/thumb-up.svg";
import thumbDown from "../assets/thumb-down.svg";

function Cell({ picked, start }) {
  const { path } = useSelector((state) => state.labyrinth);
  const { isRight, showAnswer } = useSelector(state=>state.answer);
  const dispatch = useDispatch();
  const [thumbVisible, setThumbVisible] = useState(false);
  const handleGuess = () => {
    if (path.length !== 10) return;
    setThumbVisible(true);
    dispatch(setIsRight(picked));
    dispatch(setShowAnswer(true));
    setTimeout(() => {
      dispatch(restartGame());
      setThumbVisible(false);
      dispatch(setIsRight(true));
      dispatch(setShowAnswer(false));
    }, 2000);
  };
  return (
    <div className="cell" onClick={handleGuess}>
      {start && <p className="cell__start">START</p>}
      {showAnswer && !isRight && picked && (
        <span className="cell__answer">*</span>
      )}
      {thumbVisible && (
        <img
          src={picked ? thumbUp : thumbDown}
          style={{ width: "20px", height: "20px" }}
          alt="thumb-up"
        />
      )}
    </div>
  );
}

export default Cell;
