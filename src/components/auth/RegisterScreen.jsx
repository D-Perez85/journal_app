import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";


const RegisterScreen = () => {

  const [values, handleInputChange] = useForm({
    name: 'Damian Perez',
    email: 'dperez@gmail.com',
    password: '123456', 
    password2: '123456',
  }); 

  const {email, password, name, password2} = values;
  const handleRegister = (e) =>{
    e.preventDefault(); 
   console.log(email, password, name, password2); 
  }
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Register
        </button>
        <hr />
        <Link to="/auth/login" className="link mt-5">
          Already register?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
