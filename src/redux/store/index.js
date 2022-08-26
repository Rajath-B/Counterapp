import { legacy_createStore as reduxCreateStore, combineReducers} from "redux";
import { counterReducer } from "../reducers/counterReducer";


export default function createStore(history) {
  return reduxCreateStore(combineReducers(
    {
      count: counterReducer
    })
    
  );
}
