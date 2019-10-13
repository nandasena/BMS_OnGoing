import _ from 'lodash'
import { 
    FETCH_CATEGORY
 } from "../actions/types";

 export default (state = {},action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {...state, ..._.mapKeys(action.payload,'categoryId')};
        default:
            return state;
    }
 }