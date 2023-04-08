import React from "react";

const Options = ({ options, qId }) => {
  return (
    <div className="quizOptions">
      {/* <!-- Options --> */}
      {options.map((option, idx) => (
        <label htmlFor={`option${idx + 1}_q${qId}`} key={idx}>
          <input type="checkbox" id={`option${idx + 1}_q${qId}`} />
          {option.option}
        </label>
      ))}
    </div>
  );
};

export default Options;
