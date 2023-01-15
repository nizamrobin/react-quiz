import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    // {/* <!-- Option 1 --> */}
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="A new Hope 1" id="option1" />
    </div>
  );
}
