import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerDataActions';
import Navigation from "./Navigation";

export class Dashboard extends React.Component {

    render(){
        return (
          <div>
              <Navigation/>
              <div>
                      <div>
                          <h3 className="col-md-offset-5">Personalised Offers
                          </h3>
                          <div className="content-wrapper">
                              <div>

                                  <BootstrapTable data={this.props.customerData.offers} pagination striped bordered search>
                                      <TableHeaderColumn dataField='id' isKey={true} dataSort>id</TableHeaderColumn>
                                      <TableHeaderColumn dataField='merchantCategory'>Merchant Category</TableHeaderColumn>
                                      <TableHeaderColumn dataField='offer'>Offer</TableHeaderColumn>
                                      <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                                  </BootstrapTable>
                              </div>
                          </div>
                      </div>
              </div>
          </div>
        );
    }
}


Dashboard.propTypes = {
    actions: PropTypes.object.isRequired,
    customerData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        customerData: state.customerData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);