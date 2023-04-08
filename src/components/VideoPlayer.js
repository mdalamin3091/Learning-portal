import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useGetAssignmentsQuery } from "../features/assignments/assignmentsApi";
import { useGetQuizzesQuery } from "../features/quiz/quizApi";
import AssignmentSubmitModal from "./AssignmentSubmitModal";
import Loader from "./Loader";
import Error from "./Error";
import { useGetVideoQuery } from "../features/videos/videosApi";

const VideoPlayer = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState({});
  const [availableQuiz, setAvailableQuiz] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { data: video, isLoading, isError, isSuccess } = useGetVideoQuery(id);
  const { data: assignments, isSuccess: isAssignSuccess } =
    useGetAssignmentsQuery();
  const { data: quizzes, isSuccess: isQuizzesSuccess } = useGetQuizzesQuery();

  // check assignment available or not in this video
  useEffect(() => {
    if (isAssignSuccess) {
      const assign = assignments.find((ass) => ass.video_id === Number(id));
      // console.log(assign);
      if (assign?.id) setAssignment(assign);
      else setAssignment({});
    }
  }, [isAssignSuccess, assignments, id]);

  // check quizzes available or not in this video;
  useEffect(() => {
    if (isQuizzesSuccess) {
      const quiz = quizzes.filter((q) => q.video_id === Number(id));
      if (quiz?.length > 0) setAvailableQuiz(quiz);
      else setAvailableQuiz([]);
    }
  }, [isQuizzesSuccess, quizzes, id]);

  // modal functionality
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message="error occured" />;
  } else if (isSuccess) {
    const { url, title, createdAt, description } = video;
    content = (
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
            {assignment?.id && (
              <button
                onClick={() => openModal()}
                disabled={isSubmit}
                className={`px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-${isSubmit ? "gray" : "cyan"} hover:text-primary cursor-pointer`}
              >
                এসাইনমেন্ট
              </button>
            )}
            {availableQuiz?.length > 0 && (
              <Link
                to={`/coursePlayer/videos/quiz/${id}`}
                className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
              >
                কুইজে অংশগ্রহণ করুন
              </Link>
            )}
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
          <AssignmentSubmitModal
            isOpen={isOpen}
            setIsSubmit={setIsSubmit}
            closeModal={closeModal}
            assignment={assignment}
          />
        </div>
      </div >
    );
  }
  return content;
};

export default VideoPlayer;
