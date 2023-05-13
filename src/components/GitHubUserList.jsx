import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

function GithubUserList() {
  const [username, setUsername] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleUsername = () => {
    setUsername([...username, newUsername]);
    setNewUsername("");
  };

  return (
    <div>
      <div>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button onClick={handleUsername}>Add</button>
      </div>
      <div>
        {username.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}

export default GithubUserList;