import { Fragment } from "react";
import Options from "./Options";
import { useLocation } from "react-router-dom";

const Questions = ({ quizzes }) => {
  return (
    <div className="quiz">
      {/* <Question /> */}
      {quizzes.map((quiz, idx) => (
        <Fragment key={quiz.id}>
          <h4 className="question">
            Quiz {idx + 1} - {quiz.question}
          </h4>
          <Options options={quiz.options} qId={quiz.id}/>
        </Fragment>
      ))}
    </div>
  );
};

export default Questions;
