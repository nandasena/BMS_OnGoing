import React from 'react';
import { Field,reduxForm } from 'redux-form'

class InvoiceForm extends React.Component {

    
}

export default reduxForm(
    {
        form: 'streamForm',
        //validate:validate ///TODO
    }
)(InvoiceForm);