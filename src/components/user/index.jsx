import React from "react";
import UserItem from "../userItem";

const User = props => {
  return (
    <ul>
      {props.users.length > 0 && props.users.map((user) => <UserItem key={user.id} name={user.name} id={user.id} />)}
    </ul>
  );
};

export default User;
