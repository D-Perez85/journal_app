import React from "react";

 const RegisterScreen = () => {

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"/>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"/>
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"/>
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"/>
        <button
          className="btn btn-primary btn-block"
          type="submit"
        >
          Register
        </button>
        <hr />
      </form>
    </>
  );
};

export default RegisterScreen;
