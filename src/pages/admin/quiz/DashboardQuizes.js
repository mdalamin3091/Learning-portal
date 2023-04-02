import React from "react";
import DashboardQuiz from "../../../components/admin/dashboardQuiz/DashboardQuiz";
import { Link } from "react-router-dom";

const DashboardQuizes = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/quiz/addQuiz"} className="btn ml-auto">Add Quiz</Link>
          </div>
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
                <DashboardQuiz />
                <DashboardQuiz />
                <DashboardQuiz />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardQuizes;
