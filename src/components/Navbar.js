import "./navbar.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar(props) {
  return (<>
    <nav className="nav-bar">
      <div className="title">
        Event List
      </div>
      <div className="link-container">
        <Link className="link-signup" to="/signup">SIGNUP</Link>
        <Link className="link-login" to="/login">LOGIN</Link>
      </div>
    </nav>
  </>);
}