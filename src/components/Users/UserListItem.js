import React from 'react';

const UserListItem = (props) => {
    return (
        <li className="user">
            <span className="user-name">{props.user.name} {props.user.surname}</span><br></br>
            {props.user.gender}    {props.user.birthYear}<br></br>
            {props.user.email}<br></br>
            {props.user.phone}<br></br>
        id: {props.user.id}<br></br>
        health: {props.user.isSick ? <span className="sick">sick</span> : "ok"}<br></br>
            {props.user.skills}<br></br>
        </li>
    )
}

export default UserListItem;

    // const skills = props.user.skills.split("")
    // {[...props.user.skills].split("")}<br></br>
