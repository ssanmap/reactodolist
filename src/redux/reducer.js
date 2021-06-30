import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        // agregar 
        addTodos: (state,action) => {
            state.push(action.payload);
            return state;
        },
        // eliminar
        removeTodos: (state,action) => {
            return state.filter( (item) => item.id !== action.payload );
        },
        // actualizar
        updateTodos:(state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                  return {
                    ...todo,
                    item: action.payload.item,
                  };
                }
                return todo;
                
            })
        },
        // completados
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: true,
                  };
                }
                return todo;
                
            })
        }
    }
})

export const {addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;