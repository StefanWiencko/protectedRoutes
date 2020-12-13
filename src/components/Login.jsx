import React, { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Login({ logInHandler, isLoggedIn }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailHandler = (e) => {
    setemail(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  if(isLoggedIn){
    return <Redirect to="/"/>
  }
  return (
    <form method="GET" onSubmit={() => logInHandler(email, password)}>
      Login
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={emailHandler}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        onChange={passwordHandler}
        value={password}
      />
      <input type="submit" id="submit" name="submit" value="Login" />
    </form>
  );
}

export default Login;
