import React, { Fragment, useState } from "react";
import Questions from "../../components/student/quiz/Questions";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Quiz = () => {
  const { user } = useSelector(state => state.auth);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { availableQuiz, video } = state || {};

  //   "id": 1,
  // "student_id": 2,
  // "student_name": "Saad Hasan",
  // "video_id": 1,
  // "video_title": "Debounce Function in JavaScript - JavaScript Job Interview question",
  // "totalQuiz": 2,
  // "totalCorrect": 1,
  // "totalWrong": 1,
  // "totalMark": 10,
  // "mark": 5

  const quizData = {
    student_id: user.id,
    student_name: user.name,
    video_id: video.id,
    video_title: video.title,
    totalQuiz: availableQuiz.length,
    totalCorrect: 1,
    totalWrong: 1,
    totalMark: availableQuiz.length * 5,
    mark: 5,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizData);

  }

  return (
    <section className="py-6 bg-primary">
      <form className="mx-auto max-w-7xl px-5 lg:px-0" onSubmit={handleSubmit}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Quizzes for "{video.title}"</h1>
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>
        <div className="space-y-8">
          <Questions quizzes={availableQuiz} />
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
};

export default Quiz;
