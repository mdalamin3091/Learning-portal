import { Fragment } from "react";
import Options from "./Options";

const Questions = () => {
  return (
    <div className="quiz">
      {/* <Question /> */}
      <Fragment>
        <h4 className="question">
          Quiz 1 - What is a Debounce function in JavaScript?
        </h4>
       
          <Options />
      </Fragment>
    </div>
  );
};

export default Questions;
