import React from "react";
import useForm from "./CustomForm";

const FormHook = (OnLogin) => {
  const { username, password, handleUsername, handlePassword } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    OnLogin(console.log({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsername} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePassword} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHook;