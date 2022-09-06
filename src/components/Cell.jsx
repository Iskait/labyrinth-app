import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../store/slices/labyrinthSlice";
import { setIsRight, setShowAnswer } from "../store/slices/answerSlice";
import thumbUp from "../assets/thumb-up.svg";
import thumbDown from "../assets/thumb-down.svg";

function Cell({ picked, start }) {
  const { path } = useSelector((state) => state.labyrinth);
  const { isRight, showAnswer } = useSelector((state) => state.answer);
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
    <div
      className="bg-sky-400 h-20 w-20 rounded-lg flex items-center justify-center relative"
      onClick={handleGuess}
    >
      {start && <p className="text-sm">START</p>}
      {showAnswer && !isRight && picked && (
        <span className="absolute text-color text-5xl font-extrabold top-6">
          *
        </span>
      )}
      {thumbVisible && (
        <img
          src={picked ? thumbUp : thumbDown}
          className="w-5 h-5"
          alt="thumb-up"
        />
      )}
    </div>
  );
}

export default Cell;
