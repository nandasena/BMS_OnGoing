import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { connect } from "react-redux";
import { fetchInvoices } from "../../actions/index";
import { objectTypeAnnotation } from '@babel/types';
import Spinner from 'react-bootstrap/Spinner';

import _ from 'lodash';
import { Link } from "react-router-dom";

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')










// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    this.props.fetchInvoices();
  }

  renderInvoiceList_data() {
          if(this.props.invoices === null) {
            return (
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )
          }
          else {

              return  this.props.Invoices.map( invoice => {

                if(this.props.Invoices.length > 0) {
                    return(
                      <tr className="" key={invoice.invoiceNumber}>
                        <td className="text-center">
                          <div>Yiorgos Avraamu</div>
                        </td>
                        <td className="text-center">
                          <strong>{invoice.invoiceNumber}</strong>
                        </td>
                        <td className="text-center">{invoice.totalAmount}</td>
                        <td className="text-center">{invoice.advanceAmount}</td>
                        <td className="text-center">{invoice.delivaryDate}</td>
                        
                      
                        
                    	</tr>
                    )
                }else {
                   return(<p>No Data</p>)
                }
              });

          }
  }

  renderAddInvoice() {

    return(  <div className="float-right">
              <Link to="/invoice/new"><Button block color="primary">Add{' +'}</Button></Link>
            </div>
          )
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                {/* Traffic {' & '} Sales */}
                <strong>Invoices</strong>
                {this.renderAddInvoice()}
              </CardHeader>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    {/* <th className="text-center"><i className="icon-people"></i></th> */}
                    <th className="text-center" >User</th> 
                    <th className="text-center">Invoices Number</th>
                    <th>Totoal Amount</th>
                    <th className="text-center">Advance Amount</th>
                    <th>Delivary Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderInvoiceList_data()}
                  {/* <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr> */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
       Invoices: Object.values(state.invoices)
    };
}
export default connect(mapStateToProps,{fetchInvoices})(Dashboard);

