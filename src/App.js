import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getUserApi from "./api/getUserApi";
import User from "./components/user";
import UserDetail from "./components/userdetail";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserApi.get().then((response) => {
      if (response) {
        setUsers(response);
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <Route key={user.id} path={`/${user.id}`}>
                  <UserDetail user={user} />
                </Route>
              );
            })}

          <Route path="/">
            <User users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
