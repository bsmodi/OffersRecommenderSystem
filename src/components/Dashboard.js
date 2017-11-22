import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerDataActions';

export class Dashboard extends React.Component {

    render(){
        return (
          <div>
              <div>
                      <div className="wrapper">
                          <h3>Personalised Offers
                          </h3>
                          <div className="content-wrapper">
                              <div>

                                  <BootstrapTable data={this.props.customerData.offers} pagination striped>
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