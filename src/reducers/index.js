import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";
import formControl from './formReducer';

export default combineReducers({
    invoices: invoiceReducer, 
    formControl: formControl  
})