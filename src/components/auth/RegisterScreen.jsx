import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import {useDispatch, useSelector} from "react-redux"; 
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassName } from "../../actions/auth";


const RegisterScreen = () => {

  const dispatch = useDispatch(); 
  const selector = useSelector( state =>state.ui);
  const {msgError} = selector; 
 
  const [values, handleInputChange] = useForm({
    name: "Username",
    email: "user@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { email, password, name, password2 } = values;

  const handleRegister = (e) =>{
    e.preventDefault(); 
    if(isFormValid()){
       dispatch(startRegisterWithEmailPassName(email, password, name))
     }
  }
  const isFormValid = () =>{
    if(name.trim().length === 0){
      dispatch(setError('Name is required'))
      return false; 
    }else if(!validator.isEmail(email)){
      dispatch(setError('Email is not valid'))
      return false; 
    }else if(password !== password2 || password.length < 5){
      dispatch(setError('Pass must have more than 5 characters'))
      return false
    }
    dispatch(removeError())
  return true; 
}
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
      {
        msgError &&
        ( <div className="auth__alert-error">
                 {msgError}
          </div> 
          )
    } 

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
