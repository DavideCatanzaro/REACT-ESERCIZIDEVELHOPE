import { useState } from "react";

const useForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    handleUsername,
    handlePassword,
  };
};

export default useForm;