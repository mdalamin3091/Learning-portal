import React from "react";
import HeadRow from "../../components/student/leaderboard/HeadRow";
import DataRow from "../../components/student/leaderboard/DataRow";
import OwnPosition from "../../components/student/leaderboard/OwnPosition";
import { useGetQuizMarkQuery, useGetQuizzesMarkQuery } from "../../features/quizMark/quizMarkApi";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../features/users/usersApi";
import { useGetAssignmentMarksQuery } from "../../features/assignmentMarks/assignmentMarksApi";
import Loader from "../../components/Loader";

const Leaderboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isSuccess } = useGetQuizMarkQuery(user.id);
  const {
    data: users,
    isLoading,
    isSuccess: isUserSuccess,
  } = useGetUsersQuery();

  const { data: assignmentMarks, isSuccess: isMarksSuccess } =
    useGetAssignmentMarksQuery();
  const { data: quizMarks, isSuccess: isQuizMarksSuccess } =
    useGetQuizzesMarkQuery();

  // get owns quiz marks
  let ownQuizMarks;
  let content;
  if (isSuccess) {
    ownQuizMarks = data.reduce(
      (initialMark, quiz) => initialMark + quiz.mark,
      0
    );
  }

  // get top 20 person leaderboard informations

  if (isLoading) {
    content = <Loader />;
  } else if (isUserSuccess && isMarksSuccess && isQuizMarksSuccess) {
    content = users.map((usr) => {
      if (usr.role !== "admin") {

        // get user assignments marks indivitually
        const assignments = assignmentMarks.filter(
          (assignment) => assignment.student_id == usr.id
        );
        const marks = assignments.reduce(
          (mark, assign) => mark + assign.mark,
          0
        );
        
        // get user quiz marks indivitually
        const quizzes = quizMarks.filter((quiz) => quiz.student_id == usr.id);
        const qzMarks = quizzes.reduce((mark, quiz) => mark + quiz.mark, 0);
        const totalMarks = marks + qzMarks;
        console.log(quizMarks);
        return (
          <DataRow
            key={usr.id}
            name={usr.name}
            qzMarks={qzMarks}
            totalMarks={totalMarks}
            assignmentMark={marks}
          />
        );
      }
    });
  }

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        {/* your own position in the leaderboard  */}

        <OwnPosition />

        <div className="my-8">
          <h3 className="text-lg font-bold">Top 20 Result</h3>
          <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
            <thead>
              <HeadRow />
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
