// import {fetchExampleTasks} from "./tasksSlice";
import { takeLatest, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
const { fetchExampleTasks, setTasks } = require("./tasksSlice");

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};