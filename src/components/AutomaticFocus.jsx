import React, {useEffect ,useRef} from "react";

function UncontrolledLogin({onLogin}){
    const setUsername = useRef(null)
    const setPassword = useRef(null)
    const setRemember = useRef(null);

    useEffect(() => {
      setUsername.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = setUsername.current.value;
        const password = setPassword.current.value;
        const remember = setRemember.current.checked;
        onLogin({username,password,remember})
    };

    const isDisabled = !setUsername || !setPassword;

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={setUsername}  />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={setPassword}  />
          </div>
          <div>
            <label htmlFor="remember">Remember me:</label>
            <input type="checkbox" id="remember" checked={setRemember}  />
          </div>
          <button type="submit" disabled={isDisabled}>Log in</button>
        </form>
      );
    }
    
export default UncontrolledLogin;
