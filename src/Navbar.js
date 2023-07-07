
import './Navbar.css';
import { useHistory } from 'react-router-dom';

function Navbar() {

  const history = useHistory();

  const onLoginClickHandler = () =>{
    history.push("/userLogin");
  }
  const onRegisterClickHandler = () =>{
    history.push("/register");
  }

  return (
    <div  className="nav">
        <div>
            <p className='logo'>HireLink</p>
        </div>
        <div>
          <ul  className="list">
            <li>Home</li>
            <li>Services</li>
            <li>Jobs</li>
            <li>Profiles</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul className='list'>
            <li onClick={onLoginClickHandler}>Login</li>
            <li onClick={onRegisterClickHandler}>Register</li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;
