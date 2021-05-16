import React, { VFC, Component } from 'react';
import { Button } from 'reactstrap';
import UserTable from "./UserTable";
import "../../styles/style.scss"; 
import "../../styles/userStyle.scss";
import { Link } from "react-router-dom";

const index = () => {
    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>User <b>Management</b></h2>
                                </div>
                                <div className="col-sm-7">
                                    <Link to="/users/addUser"><button  className="btn btn-secondary"><i className="material-icons">&#xE147;</i> <span>Add New User</span></button></Link>
                                    <Button  className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Export to Excel</span></Button>					
                                    <Button  className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Import to Excel</span></Button>	
                                </div>
                            </div>
                        </div>
                        <UserTable />
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default index;