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
              <div className="wrapper">
                      <div className="content-wrapper">
                          <h3>Offers only For YOU
                          </h3>
                          <div className="row">
                              <div className="col-lg-12">
                                  <BootstrapTable data={this.props.customerData.offers}>
                                      <TableHeaderColumn dataField='id' isKey={true}>OfferName</TableHeaderColumn>
                                      <TableHeaderColumn dataField='offerName'>OfferName</TableHeaderColumn>
                                      <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                                      <TableHeaderColumn dataField='details'><a href="#">Details</a></TableHeaderColumn>
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
    customerData: PropTypes.object.isRequired
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