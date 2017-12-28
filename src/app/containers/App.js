import React from "react";
import Header from "../components/Header"

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Header/>
                    </div>
                </div>
            </div>
        )
    }
}
