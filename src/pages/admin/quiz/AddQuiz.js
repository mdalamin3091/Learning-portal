import React, { useState } from "react";
import TextInput from "../../../components/shared/TextInput";

const AddQuiz = () => {
  const [question, setQuestion] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [options, setOptions] = useState([]);
  const [optionValue, setOptionValue] = useState({
    id: 0,
    option: "",
    isCorrect: false,
  });

  //  update state value by this functions
  const handleChange = (value, label) => {
    setOptionValue({
      ...optionValue,
      [label]: value,
    });
  };

  //  generate unique Id function
  const generateId = (options) => {
    const max = options.reduce(
      (initialValue, option) => Math.max(initialValue, option.id),
      0
    );
    return max + 1;
  };

  // add option on the array
  const handleAddOption = () => {
    setOptions([...options, { ...optionValue, id: generateId(options) }]);
    setOptionValue({
      id: 0,
      option: "",
      isCorrect: false,
    });
  };

  // quiz data for add to database
  const quizData = {
    question,
    video_title: videoTitle,
    options,
  };

  //form submit function to add quiz
  const handleSubmit = (e) => {
    e.preventDefault();
    if (options.length < 4) return alert("need to add 4 options");
    console.log(quizData);
    setOptions([]);
  };

  return (
    <form
      style={{ width: "80%", margin: "0 auto", marginTop: "30px" }}
      onSubmit={handleSubmit}
    >
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              {/* quiz questions field */}
              <TextInput
                onChange={(e) => setQuestion(e.target.value)}
                title="Question"
                type="text"
                placeholder="Enter quiz question"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              {/* video title for set quiz on the specific video */}
              <label className="block text-sm font-medium text-gray-700">
                Video Title
              </label>
              <select
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 text-gray-500"
                style={{ color: "black" }}
                required
                onChange={(e) => setVideoTitle(e.target.value)}
              >
                <option value="" hidden>
                  Select one
                </option>
                <option value="title1">title1</option>
                <option value="title2">title2</option>
                <option value="title3">title3</option>
                <option value="title4">title4</option>
              </select>
            </div>

            {/* add quiz option row start */}
            {options?.length === 4 || (
              <div className="col-span-6 sm:col-span-3 flex items-center justify-start">
                <TextInput
                  type="text"
                  value={optionValue.option}
                  style={{ width: "70%", color: "black" }}
                  placeholder="Enter option title"
                  onChange={(e) => handleChange(e.target.value, "option")}
                />
                <div
                  style={{ marginInline: "50px" }}
                  className="flex items-center justify-center"
                >
                  <input
                    type="checkbox"
                    className="mt-1"
                    id="option"
                    checked={optionValue.isCorrect}
                    onChange={(e) =>
                      handleChange(e.target.checked, "isCorrect")
                    }
                  />
                  <label
                    className="block"
                    htmlFor="option"
                    style={{ marginLeft: "5px" }}
                  >
                    correct answer
                  </label>
                </div>
                <button
                  type="button"
                  disabled={optionValue.option.length === 0}
                  className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  onClick={handleAddOption}
                >
                  Add Option
                </button>
              </div>
            )}

            {/* add quiz option row end */}
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Save Quiz
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddQuiz;
