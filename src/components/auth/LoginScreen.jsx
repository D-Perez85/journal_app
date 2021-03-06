import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPass } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
const LoginScreen = () => {
  const selector = useSelector(state => state.ui); 
  const {loading} = selector; 
 const dispatch = useDispatch(); 
  const [values, handleInputChange] = useForm({
      email: 'user@gmail.com',
      password: '123456'
    }); 

  const {email, password} = values;


  const handleLogin = (e) =>{
    e.preventDefault(); 
   dispatch(startLoginEmailPass(email,password)); 
  }
  
  const handleGoogleLogin = () =>{
    dispatch(startGoogleLogin())
  }
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
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
          onChange={handleInputChange}/>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={handleLogin}
          disabled={loading}>
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create a new Acount
        </Link>
      </form>
    </>
  );
};
export default LoginScreen;
