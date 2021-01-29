import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { name, id } = props;

  return (
    <li>
      <Link to={`/${id}`}>{name}</Link>
    </li>
  );
};

export default UserItem;
