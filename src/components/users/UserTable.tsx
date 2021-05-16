import React, {FC, useEffect, useState} from "react";
import {User} from '../../models/user/User';
import UserRecord from './UserRecord';
import axios from "axios";

const userTable = () => {
    const [userList, setUserList] = useState<Array<User>>([]);
    // useEffect(() => {
    //     renderBodyTable(userList);
    // }, [userList])
    useEffect(() => {
        axios.get('http://localhost:5000/users/getUsers')
            .then(res => {
                if (res.data.status) {
                    let data = res.data.result;
                    console.log(data);
                    setUserList(data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const renderBodyTable = (userList: Array<User>) => {
        return userList.map((el:User, i: number) => {
            return <UserRecord elem={el} key={i} k={i+1}/>
        });
    }
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>						
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBodyTable(userList)}
                </tbody>
            </table>
        </>
    );
};

export default userTable;