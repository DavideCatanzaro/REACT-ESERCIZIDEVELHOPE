import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export default function RouteGithubUserList() {
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    if (name !== "") {
      setUsers([...users, name]);
    }
    event.target.username.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" />
        <button type="submit">Invio</button>
      </form>
      <ul>
        {users.map((log, index) => (
          <li key={log + index}>
            <GithubUser key={log} username={log} />
            <Link to={`/user/${log}`}>{log}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}