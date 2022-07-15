import { createSlice } from "@reduxjs/toolkit";

const labyrinthSlice = createSlice({ 
    name: 'labyrinth',
    initialState: {
      field: [
      [{cellNo: 1, picked: false },{cellNo: 2, picked: false },{cellNo: 3, picked: false }], 
      [{cellNo: 4, picked: false },{cellNo: 5, picked: false },{cellNo: 6, picked: false }], 
      [{cellNo: 7, picked: false },{cellNo: 8, picked: false },{cellNo: 9, picked: false }],
      ],
      coordinate: [],
      arrows: ['up', 'left', 'down', 'right'],
      arrow: '',
      path: [],
    },
    reducers: {
      getCoordinates: (state) => {
      state.coordinate = [
        state.field.findIndex(cells=> cells.find(cell=> cell.picked)), 
        state.field.find(cells=>cells.find(cell=>cell.picked)).findIndex(cell=>cell.picked)
        ]
      },
      setStart: (state) => {
        const randomCell = state.field[~~(Math.random() * state.field.length)][~~(Math.random() * state.field.length)];
        randomCell.start = true;
        randomCell.picked = true;
      },
      switchCells: (state) => {
        state.field[state.coordinate[0]][state.coordinate[1]].picked = false
        state.coordinate.forEach((v,i) => i === 0 ? 
        (!v ? state.arrows.splice(state.arrows.findIndex(x=>x==='up'), 1) :
         v === state.field.length-1 ? state.arrows.splice(state.arrows.findIndex(x=>x==='down'), 1) : v) :
        (!v ? state.arrows.splice(state.arrows.findIndex(x=>x==='left'), 1) : 
        v === state.field.length-1 ? state.arrows.splice(state.arrows.findIndex(x=>x==='right'), 1) : v))
        // Удаялем из массива ненужные стрелки если мы не можем двигаться в какую то из сторон.
        state.arrow = state.arrows[~~(Math.random()*state.arrows.length)];
        state.arrow === 'up' ? state.coordinate[0]-=1 : state.arrow === 'down' ? state.coordinate[0]+=1 :
        state.arrow === 'left' ? state.coordinate[1]-=1 : state.coordinate[1]+=1;
        // Исходя из полученной случайно стрелки меняем координаты.
        state.arrows = ['up', 'left', 'down', 'right'];
        // Возвращаем массив со стрелками в исходное положение, так как до этого могли быть удалены элементы массива
        state.field[state.coordinate[0]][state.coordinate[1]].picked = true
        state.path.push(state.arrow);
      },
      restartGame: (state) => {
        state.field.forEach(cells => cells.forEach(cell => (cell.picked = false, cell.start = false)));
        state.path = [];
      }
    }
})

export const { getCoordinates, switchCells, setStart, restartGame } = labyrinthSlice.actions;

export default labyrinthSlice.reducer;