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
                        <a className="navbar-brand" href="#">Prajwal Academy School</a>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Courses <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-header">AdmissionSection</li>
                                        <li><a href="#">PreSchool</a></li>
                                        <li><a href="#">LKG</a></li>
                                        <li><a href="#">UKG</a></li>
                                        <li><a href="#">1 - 10 STD</a></li>
                                        <li className="dropdown-header">ArtSection</li>
                                        <li><a href="#">Drawing</a></li>
                                        <li><a href="#">Painting</a></li>
                                        <li><a href="#">WaterPainting</a></li>
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