import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from '../store/slices/labyrinthSlice';
import thumbUp from '../assets/thumb-up.svg';
import thumbDown from '../assets/thumb-down.svg';
function Cell({picked, start}) {
  const { path } = useSelector(state=>state.labyrinth);
  const dispatch = useDispatch();
  const [thumbVisible, setThumbVisible] = useState(false);
  const handleGuess = () => {
    if (path.length !== 10) return;
    setThumbVisible(true);
    setTimeout(() => {dispatch(restartGame()); setThumbVisible(false)}, 2000);
  }
  return (
    <div 
    className="cell"
    onClick={handleGuess}>
        {start && 
        <p className="cell__start">START</p>
        }
        {thumbVisible && 
        <img 
        src={picked ? thumbUp : thumbDown} 
        style={{width: '20px', height: '20px'}}
        alt="thumb-up"/>}
    </div>
  )
}

export default Cell