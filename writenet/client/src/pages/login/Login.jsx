import { useContext, useRef } from "react"
import "./login.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import axios from "axios";
import { LoginSuccess } from "../../context/Actions";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(LoginSuccess(res.data)); 
    } catch (err) {
      dispatch({ type: "LOGIN_FALIURE"});
    }
  };

  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter Your Username" 
            ref={userRef}
            />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your Password"
            ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register" >
            REGISTER
            </Link>
            </button>
        </div>
  )
}
 