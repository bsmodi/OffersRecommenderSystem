import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
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
                            <form role="form" className="mb-lg">
                                <div className="text-right mb-sm"><a href="signup.html" className="text-muted">Need to Signup?</a>
                                </div>
                                <div className="form-group has-feedback">
                                    <input id="exampleInputEmail1" type="email" placeholder="Enter email" className="form-control" />
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
                                <Link to="/home" className="btn btn-block btn-primary">Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}