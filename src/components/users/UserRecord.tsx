import React, { } from 'react';
import {User} from '../../models/user/User';

interface record {
    elem: User,
    k: number
}
const userRecord = ({elem, k} : record) => {
    return (
        <>
            <tr>
                <td>{k}</td>
                <td><a href="#"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar" /> {elem.displayed_name}</a></td>
                <td>{elem.created}</td>                        
                <td>{elem.role}</td>
                <td><span className="status text-success">&bull;</span> {elem.status}</td>
                <td>
                    <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                </td>
            </tr>
        </>
    );
}

export default userRecord;