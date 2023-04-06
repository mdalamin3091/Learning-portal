import React, { useState } from "react";

const Options = ({ options, qId }) => {
    // console.log(options)
    // const correctOptions = options.filter(option => option.isCorrect);
    // const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (option) => {
        
    }

    return (
        <div className="quizOptions">

            {/* <!-- Options --> */}
            {options.map((option, idx) => (
                <label htmlFor={`option${idx + 1}_q${qId}`} key={idx}>
                    <input type="checkbox" id={`option${idx + 1}_q${qId}`} onChange={() => handleChange(option)} />
                    {option.option}
                </label>
            ))}
        </div>
    );
};

export default Options;
