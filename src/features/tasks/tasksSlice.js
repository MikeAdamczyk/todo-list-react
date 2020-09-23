import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [{
            content: "siema",
            done: true,
            id: 69,
        }],
        hideDone: false,
    },

    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },

        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },

        setAllDone: (state) => {
            state.tasks.map(task => task.done = true);
        },

        removeTask: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;