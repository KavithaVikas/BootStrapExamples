import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <button type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Programming Knowledge</a>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Learn <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                    <li className="dropdown-header">Examples</li>
                                        <li><a href="#">C++</a></li>
                                        <li><a href="#">Java</a></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}