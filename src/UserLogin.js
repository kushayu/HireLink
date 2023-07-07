
import "./UserLogin.css";

function UserLogin() {
  return (
    <>
      <div className="login_body">
        <div className="card">
          <h1 className="login_heading">Login</h1>
          <div className="user_box">
          <input  type="text" required=""/>
          <label>Username</label>
          </div>
          <div className="user_box">
          <input  type="password" required=""/>
          <label>Password</label>
          </div>
          <a className="login_btn"> 
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

export default UserLogin;
