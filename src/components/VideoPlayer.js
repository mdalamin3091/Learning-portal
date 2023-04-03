import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetAssignmentsQuery } from "../features/assignments/assignmentsApi";
import { useGetQuizzesQuery } from "../features/quiz/quizApi";
import AssignmentSubmitModal from "./AssignmentSubmitModal";

const VideoPlayer = ({ video, isOpen, setIsOpen }) => {
  const { id, url, title, createdAt, duration, views, description } = video;
  const [isAssignment, setIsAssignment] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);
  const { data: assignments, isSuccess } = useGetAssignmentsQuery();
  const { data: quizzes, isSuccess: isQuizzesSuccess } = useGetQuizzesQuery();

  // modal functionality

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  // check assignment available or not in this video
  useEffect(() => {
    if (isSuccess) {
      const assign = assignments.filter(
        (assignment) => assignment.video_id === id
      );
      if (assign?.length > 0) setIsAssignment(true);
    }
  }, [isSuccess, assignments]);

  // check quizzes available or not in this video;
  useEffect(() => {
    if (isQuizzesSuccess) {
      const quiz = quizzes.filter((q) => q.video_id === id);
      if (quiz?.length > 0) setIsQuiz(true);
    }
  }, [isQuizzesSuccess, quizzes]);

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          {title}
        </h1>
        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
          Uploaded on {moment(createdAt).format("ll")}
        </h2>

        <div className="flex gap-4">
          {isAssignment && (
            <button
              onClick={() => openModal()}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              এসাইনমেন্ট
            </button>
          )}
          {isQuiz && (
            <Link
              to={`/coursePlayer/quiz/${id}`}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              কুইজে অংশগ্রহণ করুন
            </Link>
          )}
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
        <AssignmentSubmitModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default VideoPlayer;
