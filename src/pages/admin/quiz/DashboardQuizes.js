import React from "react";
import DashboardQuiz from "../../../components/admin/dashboardQuiz/DashboardQuiz";
import { Link } from "react-router-dom";
import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";
import Loader from "../../../components/Loader";
import Error from "../../../components/Error";

const DashboardQuizes = () => {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message="something error occured" />;
  } else if (!isLoading && !isError && quizzes?.length === 0) {
    content = <Error message="quizes not available! add quiz" />;
  } else if (!isLoading && !isError && quizzes?.length > 0) {
    content = (
      <div className="overflow-x-auto mt-4">
        <table className="divide-y-1 text-base divide-gray-600 w-full">
          <thead>
            <tr>
              <th className="table-th">Question</th>
              <th className="table-th">Video</th>
              <th className="table-th justify-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-600/50">
            {quizzes?.map((quiz, idx) => (
              <DashboardQuiz quiz={quiz} key={quiz.id} quizNum={idx + 1} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/quiz/addQuiz"} className="btn ml-auto">
              Add Quiz
            </Link>
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};

export default DashboardQuizes;
