import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar(props) {
  return (<>
  <Link to="/signup">signup</Link>
  <Link to="/login">login</Link>
  
  </>);
}