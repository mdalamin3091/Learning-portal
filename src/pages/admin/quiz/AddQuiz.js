import React, { useState } from "react";
import TextInput from "../../../components/shared/TextInput";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import Loader from "../../../components/Loader";
import { useAddQuizMutation } from "../../../features/quiz/quizApi";
import { useNavigate } from "react-router-dom";

const AddQuiz = () => {
  const [question, setQuestion] = useState("");
  const [videoInfo, setVideoInfo] = useState({});
  const [options, setOptions] = useState([]);
  const [singleOption, setSingleOption] = useState({
    id: 0,
    option: "",
    isCorrect: false,
  });
  const navigate = useNavigate();
  const { data: videos, isLoading, isSuccess } = useGetVideosQuery();
  const [addQuiz] = useAddQuizMutation();
  //  update state value by this functions
  const handleChange = (value, label) => {
    setSingleOption({
      ...singleOption,
      [label]: value,
    });
  };

  // get video title and video id from form
  const handleGetVideoInfo = (videoId) => {
    const videoTitle = videos.find(
      (video) => video.id === Number(videoId)
    ).title;
    // console.log(videoId, videoTitle);
    setVideoInfo({
      video_id: videoId,
      video_title: videoTitle,
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
    setOptions([...options, { ...singleOption, id: generateId(options) }]);
    setSingleOption({
      id: 0,
      option: "",
      isCorrect: false,
    });
  };

  // option delete 
  const handleOptionDelete = (id) => {
    const filteredOptions = options.filter(option => option.id != id);
    setOptions(filteredOptions);
  }

  // quiz data for add to database
  const quizData = {
    question,
    video_title: videoInfo.video_title,
    video_id: Number(videoInfo.video_id),
    options,
  };

  //form submit function to add quiz
  const handleSubmit = (e) => {
    e.preventDefault();
    if (options.length < 4) return alert("need to add 4 options");
    // console.log(quizData);
    setOptions([]);
    setVideoInfo({});
    setQuestion("");
    addQuiz(quizData);
    navigate("/admin/quiz")
  };

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = (
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
                  value={question}
                  style={{ color: "black" }}
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
                  onChange={(e) => handleGetVideoInfo(e.target.value)}
                >
                  <option value="" hidden>
                    Select one
                  </option>
                  {videos.length > 0 ? (
                    videos.map((video) => (
                      <option key={video.id} value={video.id}>
                        {video.title}
                      </option>
                    ))
                  ) : (
                    <option value="">no video found video Add first</option>
                  )}
                </select>
              </div>

              {/* add quiz option row start */}
              {options?.length === 4 || (
                <div className="col-span-6 sm:col-span-3 flex items-center justify-start">
                  <TextInput
                    type="text"
                    value={singleOption.option}
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
                      checked={singleOption.isCorrect}
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
                    disabled={singleOption.option.length === 0}
                    className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    onClick={handleAddOption}
                  >
                    Add Option
                  </button>
                </div>
              )}
              {options.length ? (
                <div className="col-span-12 sm:col-span-3">
                  <div
                    className="flex items-center justify-between rounded-md"
                    style={{ background: "#fff", color: "black" }}
                  >
                    <div className="table-td" style={{ width: "58%" }}>
                      Options
                    </div>
                    <div className="table-td">Answer</div>
                    <div className="table-td flex gap-x-2">Action</div>
                  </div>
                  {options.map((opn, idx) => (
                    <div
                      className="flex items-center justify-between"
                      key={idx}
                    >
                      <div className="table-td" style={{ width: "55%" }}>
                        {opn.option.length > 90
                          ? opn.option.slice(0, 90) + "....."
                          : opn.option}
                      </div>
                      <div className="table-td">
                        {opn.isCorrect ? "correct" : "wrong"}
                      </div>
                      <div className="table-td flex gap-x-2">
                        <span onClick={() => handleOptionDelete(opn.id)}>
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
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
  }
  return content;
};

export default AddQuiz;
