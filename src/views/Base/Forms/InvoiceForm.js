import React from 'react';
import { Field,reduxForm } from 'redux-form'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
import { isTemplateElement } from '@babel/types';



class InvoiceForm extends React.Component {

    onSubmit = (formValues) => {

        this.props.onSubmit(formValues);
    }
    renderInput = ({input,label,meta}) => {
        return (
            <div className = "">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }
    renderDatePicker =({input,label,meta}) => {
        return (
            
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor={input}>{label} </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id={input} name={input} placeholder="date" />
                    </Col>
                  </FormGroup>
            
        )
    }

    renderDropDownList = ({input,label,data,meta}) => {

        if (data.length > 0) {
            return (
                <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input}>{label}</Label>
                    </Col>
                    <Col xs="12" md="9">
    
                    <Input type="select" name={input} id={input} bsSize="sm">
                        <option value="0">Please select</option>
                        {this.renderListData(data)}
                    </Input>
                    </Col>
              </FormGroup>
            )
        } else {
            return (
                <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input}>{label}</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name={input} id={input} bsSize="sm">
                        <option value="0">Please select</option>
                    </Input>
                    </Col>
              </FormGroup>
            )
        }

    }
    renderListData(data) {
        return data.map(item => {
               return( <option key={item.categoryId} value={item.categoryId}>{item.name}</option>);
            });
    }
    render() {
        return(
            <Col xs="12" md="6">
                <Card>
                    <CardHeader>
                        <strong>invoice Form</strong> Create
                    </CardHeader>
                    <CardBody>
                        <form onSubmit ={this.props.handleSubmit(this.onSubmit)}  className="form-horizontal" >
                            <Field name='invoiceDate' component={this.renderDatePicker} label='invoice Date'></Field>
                            <Field name='Catagory' component={this.renderDropDownList} label='Catagory' data ={this.props.formControl}></Field>
                        </form>
                    </CardBody>
                </Card>
            </Col>

        )
    }

}


export default reduxForm(
    {
        form:'streamForm',
        //validate:validate
    }
)(InvoiceForm);




