
import "./Register.css";
import { useHistory } from 'react-router-dom';



function Register() {
  const history = useHistory();

const onSubmitHandler = () =>{
  history.push("/");
}
  return (
    <>
      <div className="login_body">
        <div className="card2">
          <h1 className="login_heading">Register</h1>
          <div className="user_box">
          <input className="user_input" type="text"/>
          <label className="Label">Name</label>
          </div>
          <div className="user_box">
          <input className="user_input" type="text"/>
          <label className="Label">Email</label>
          </div>
          <div className="user_box">
          <input className="user_input" type="text"/>
          <label className="Label">Phone no.</label>
          </div>
          <div className="user_box">
          <input className="user_input" type="text"/>
          <label className="Label">Password</label>
          </div>
          <a className="login_btn" onClick={onSubmitHandler}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit</a>
        </div>
      </div>
    </>
  );
}

export default Register;
