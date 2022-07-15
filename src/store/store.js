import { configureStore } from '@reduxjs/toolkit';
import labyrinthReducer from './slices/labyrinthSlice';
import answerReducer from './slices/answerSlice';
export const store = configureStore({
    reducer: {
      labyrinth: labyrinthReducer,
      answer: answerReducer
    }
})





