import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main"

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
