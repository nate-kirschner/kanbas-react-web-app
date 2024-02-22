import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import { Module } from "../Courses/Modules/List";
export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;
