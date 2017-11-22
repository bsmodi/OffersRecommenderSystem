import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Offers Recommender System</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><NavLink to="/home">Offers</NavLink></li>
                            <li className="active"><NavLink to="/profile">Profile</NavLink></li>

                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li className="active"><NavLink to="/">Log Out</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}