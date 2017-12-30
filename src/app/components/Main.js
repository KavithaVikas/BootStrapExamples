import React from "react";
import preschool from "../images/pre-school.png";
import primary from "../images/primary-school.jpg";
import secondary from "../images/secondary-school.jpg";

export default class Main extends React.Component {
    render() {
        return (
            <div className="conatiner">
                <div className="jumbotron text-center">
                    <h3>Admissions open for 2018!!!</h3>
                    <p>Admission opens for Prajwal Academy School rush to book seats for your kids.Prajwal Academy School is a school of full values,
                        ethics, equality and many more. Willing to bring up your kids with presented values then contact us. </p>
                    <button type="button" className="btn btn-primary">Download Admission Form</button>
                    <button type="button" className="btn btn-success">Enquiry Form</button>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <a href="#" className="thumbnail"><img src = {preschool} alt="preschool"/></a>
                        <h3>PreSchool Information</h3>
                        <p>A preschool, also known as nursery school, pre-primary school, playschool or kindergarten, is an educational establishment or learning space offering 
                            early childhood education to children before they begin compulsory education at primary school. </p>
                            <button type="button" className="btn btn-danger">Pre-School Form</button>
                    </div>

                    <div className="col-sm-4">
                    <a href="#" className="thumbnail"><img src = {primary} alt="primary-school"/></a>
                        <h3>Primary School Information</h3>
                        <p>A primary school (or elementary school in American English and often in Canadian English) is a school in which children receive primary or elementary education from the age of about five to twelve, coming after preschool and before secondary school. </p>
                        <button type="button" className="btn btn-danger">Primary School Form</button>
                    </div>
                   
                    <div className="col-sm-4">
                        <a href="#"><img src={secondary} alt="secondary"/></a>
                        <h3>Secondary Infomation</h3>
                        <p>A secondary school is both an organization that provides secondary education and the building where this takes place. Some secondary schools can provide both lower secondary education and upper secondary education (levels 2 and 3 of the ISCED scale), 
                            but these can also be provided in separate schools as in the American middle school- high school system.</p>
                            <button type="button" className="btn btn-danger">Secondary School Form</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}