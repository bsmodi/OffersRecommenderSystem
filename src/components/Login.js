import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/customerDataActions';
import {push} from 'react-router-redux';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(event) {
        event.preventDefault();
        this.props.actions.loadCustomerData(this.props.customerData.userId);
        this.props.history.push('/home');

    }

    handleChange(event) {
        this.props.actions.handleChange(event.target.value);
    }

    render() {
        return (
            <div className="row row-table page-wrapper">
                <div className="col-lg-3 col-md-6 col-sm-8 col-xs-12 align-middle">
                    <div data-toggle="play-animation" data-play="fadeIn" data-offset="0" className="panel panel-dark panel-flat anim-running anim-done">
                        <div className="panel-heading text-center">
                            <a href="#">
                                !HACKNEYED
                            </a>
                            <p className="text-center mt-lg">
                                <strong>SIGN IN TO CONTINUE.</strong>
                            </p>
                        </div>
                        <div className="panel-body">
                            <form role="form" className="mb-lg" onSubmit={this.login}>
                                <div className="text-right mb-sm"><a href="signup.html" className="text-muted">Need to Signup?</a>
                                </div>
                                <div className="form-group has-feedback">
                                    <input id="exampleInputEmail1" type="text" placeholder="Enter username" className="form-control" value={this.props.customerData.userId} onChange={this.handleChange}/>
                                        <span className="fa fa-envelope form-control-feedback text-muted"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <input id="exampleInputPassword1" type="password" placeholder="Password" className="form-control" />
                                        <span className="fa fa-lock form-control-feedback text-muted"></span>
                                </div>
                                <div className="clearfix">
                                    <div className="checkbox c-checkbox pull-left mt0">
                                        <label>
                                            <input type="checkbox" value="" />
                                                <span className="fa fa-check"></span>Remember Me</label>
                                    </div>
                                    <div className="pull-right"><a href="forgetPassword.html" className="text-muted">Forgot your password?</a>
                                    </div>
                                </div>
                                <input className="btn btn-block btn-primary" type="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Login.propTypes = {
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
)(Login);