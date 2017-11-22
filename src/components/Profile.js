import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerDataActions';
import DatePicker from 'material-ui/DatePicker';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            
    <div className="content-wrapper">
        <h3>My Account
            <small>Let us know more!!!!</small>
        </h3>
        <div className="row">
            <div className="col-lg-12">
                <div className="container-profile">
                    <div className="col-md-offset-2 col-md-10">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="">
                                            <label htmlFor="newsletter">Would you like to receive offer?</label>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="anniversary" id="newsletter" onSelect={this.onSelect}/> Anniversary</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date Of Marriage Anniversary</label>
                                        <div className="form-group">
                                            <DatePicker hintText="Open to Year" openToYearSelection={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="">
                                            <label htmlFor="newsletter"></label>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="spouse" id="newsletter" /> Spouse</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <div className="form-group">
                                            <DatePicker hintText="Open to Year" openToYearSelection={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="">
                                            <label htmlFor="newsletter"></label>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="Child" id="newsletter" /> Child</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <div className="form-group">
                                            <DatePicker hintText="Open to Year" openToYearSelection={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="">
                                            <label forName="newsletter"></label>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" value="child" id="newsletter" /> Child
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <div className="form-group">
                                            <DatePicker hintText="Open to Year" openToYearSelection={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}


Profile.propTypes = {
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
)(Profile);