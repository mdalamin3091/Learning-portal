import React from "react";

import { Link } from "react-router-dom";
import DashboardAssignmentItem from "../../../components/admin/dashboardAssignment/DashboardAssignmentItem";
import { useGetAssignmentsQuery } from "../../../features/assignments/assignmentsApi";
import Loader from "../../../components/Loader";

const DashboardAssignmentsList = () => {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message="something error occured" />;
  } else if (!isLoading && !isError && assignments?.length === 0) {
    content = <Error message="assignment not available! add assignments" />;
  } else if (!isLoading && !isError && assignments?.length > 0) {
    content = (
      <div className="overflow-x-auto mt-4">
        <table className="divide-y-1 text-base divide-gray-600 w-full">
          <thead>
            <tr>
              <th className="table-th">Title</th>
              <th className="table-th">Video Title</th>
              <th className="table-th">Mark</th>
              <th className="table-th">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {assignments?.map((assignment) => (
              <DashboardAssignmentItem
                key={assignment.id}
                assignment={assignment}
              />
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
            <Link
              to={"/admin/assignment/addAssignment"}
              className="btn ml-auto"
            >
              Add Assignment
            </Link>
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};

export default DashboardAssignmentsList;
