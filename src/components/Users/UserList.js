import React from 'react';
import UserListItem from "./UserListItem"


const UserList = (props) => {
    const allItems = props.data.map(user => <UserListItem key={user.id} user={user} />)
    return (
        <div>
            <ul className="user-list">{allItems}</ul>
        </div>
    )
}


export default UserList;