import apiSource from '../api/apiBase';

import { 
    FETCH_CATEGORY
} from "./types";


export const getCategoryList = () => async dispatch => {

    await apiSource.get('category/')
                            .then(function (response){
                                if (response.data.statusCode === 200  &&  response.data.success === true) {
                                    debugger;
                                    dispatch({type: FETCH_CATEGORY,payload: response.data.result});
                                }else {
                                        //Todo
                                }
                               
                            })
                            .catch(function (error) {
                                 if(error.response) {
                                    console.log(error.response.data);
                                    console.log(error.response.status);
                                    console.log(error.response.headers);
                                 }else if (error.request) {
                                    console.log(error.request);
                                 } else {
                                    console.log('Error', error.message);
                                 }
                            });
}