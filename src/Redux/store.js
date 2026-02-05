import { configureStore } from "@reduxjs/toolkit";
import { DoctorsReducer } from "./DoctorsArray";
import  {UsersReducer} from './UsersAray'

const store = configureStore({
    reducer:{
        Users: UsersReducer,
        Doctors: DoctorsReducer
    }
});
export default store;