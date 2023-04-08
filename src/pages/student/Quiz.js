import React, { useEffect, useState } from "react";
import Questions from "../../components/student/quiz/Questions";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import { useGetQuizzesQuery } from "../../features/quiz/quizApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useAddQuizMarkMutation } from "../../features/quizMark/quizMarkApi";

const Quiz = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const {
    data: video,
    isSuccess: isVideoSuccess,
    isLoading: isVideoLoading,
    isError: isVideoError,
  } = useGetVideoQuery(id);
  const { data: quizzes, isLoading, isSuccess, isError } = useGetQuizzesQuery();
  const [addQuizMark] = useAddQuizMarkMutation();
  const [availableQuiz, setAvailableQuiz] = useState([]);
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
    student_id: user.id,
    student_name: user.name,
    video_id: "",
    video_title: "",
    totalQuiz: "",
    totalCorrect: 1,
    totalWrong: 1,
    totalMark: "",
    mark: "",
  });

  useEffect(() => {
    if (isSuccess && isVideoSuccess) {
      const quiz = quizzes.filter((q) => q.video_id === Number(id));
      if (quiz?.length > 0) setAvailableQuiz(quiz);
      else setAvailableQuiz([]);

      // set quiz data after loading video and available quizzes
      setQuizData((prevData) => ({
        ...prevData,
        video_id: Number(video.id),
        video_title: video.title,
        totalQuiz: quiz.length,
        totalMark: quiz.length * 5,
        totalCorrect: 1,
        totalWrong: 1,
        totalMark: quiz.length * 5,
        mark: 5,
      }));
    }
  }, [isSuccess, isVideoSuccess, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuizMark(quizData);
    navigate("/leaderboard");
  };

  let content;
  if (isLoading || isVideoLoading) {
    content = <Loader />;
  } else if ((!isLoading || !isVideoLoading) && (isError || isVideoError)) {
    content = <Error message="error occured" />;
  } else if (isSuccess && isVideoSuccess) {
    content = (
      <section className="py-6 bg-primary">
        <form
          className="mx-auto max-w-7xl px-5 lg:px-0"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Quizzes for "{video?.title}"</h1>
            <p className="text-sm text-slate-200">
              Each question contains 5 Mark
            </p>
          </div>
          <div className="space-y-8">
            <Questions
              quizzes={availableQuiz}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 "
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  return content;
};

export default Quiz;
