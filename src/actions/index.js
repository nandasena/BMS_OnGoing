import { 
    FETCH_INVOICES 
} from "./types";

import apiSource from '../api/apiBase';




export const fetchInvoices = () => async dispatch => {

    await apiSource.get('invoice/')
                            .then(function (response){
                                if (response.data.statusCode === 200  &&  response.data.success === true) {
                                  
                                    dispatch({type: FETCH_INVOICES,payload: response.data.result});
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