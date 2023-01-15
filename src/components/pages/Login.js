import Button from "../Button";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
        <Illustration />
        <form className={classes.Login} action="#">
          <TextInput
            icon="alternate_email"
            placeholder="Enter email"
            type="text"
          />
          <TextInput icon="lock" placeholder="Enter password" type="password" />

          <Button>
            {" "}
            <span>Submit now</span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </form>
      </div>
    </>
  );
}
