import React from 'react'
import { connect  } from "react-redux";


import { getCategoryList } from "../../actions/service";

import InvoiceForm from '../Base/Forms/InvoiceForm'

class InvoiceCreate extends React.Component {

    saveInvoice = (formValues) => {

    }
    componentDidMount() {
        this.props.getCategoryList();
    }
    render() {
        return(
            <div>
                <h3>Create a Invoice</h3>
                <InvoiceForm OnSubmit={this.saveInvoice} formControl ={this.props.formControl}></InvoiceForm>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        formControl: Object.values(state.formControl)
    };
}
export default connect(mapStateToProps,{getCategoryList})(InvoiceCreate);


