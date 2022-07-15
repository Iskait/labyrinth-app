import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({ 
    name: 'answer',
    initialState: {
      isRight: true,
      showAnswer: false,
    },
    reducers: {
      setIsRight: (state, {payload}) => {
        state.isRight = payload;
      },
      setShowAnswer: (state, {payload}) => {
        state.showAnswer = payload;
      }
    }
})

export const { setIsRight, setShowAnswer } = answerSlice.actions;

export default answerSlice.reducer;