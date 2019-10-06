import _ from 'lodash'
import { 
    FETCH_INVOICES
 } from "../actions/types";

 export default (state = {},action) => {
    switch (action.type) {
        case FETCH_INVOICES:
            return {...state, ..._.mapKeys(action.payload,'invoiceNumber')};
        default:
            return state;
    }
 }