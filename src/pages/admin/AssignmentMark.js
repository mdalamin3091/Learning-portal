import React from "react";
import Assignment from "../../components/admin/assignmentMark/Assignment";
import { useGetAssignmentMarksQuery } from "../../features/assignmentMarks/assignmentMarksApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const AssignmentMark = () => {
  const {
    data: assignmentMarks,
    isLoading,
    isError,
  } = useGetAssignmentMarksQuery();

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message="something error occured" />;
  } else if (!isLoading && !isError && assignmentMarks?.length === 0) {
    content = (
      <Error message="assignment marks not available! add assignment marks" />
    );
  } else if (!isLoading && !isError && assignmentMarks?.length > 0) {
    // calcuate pending status
    const pendingMarksLength = assignmentMarks.filter(
      (mark) => mark.status === "pending"
    ).length;

    // calcuate published status
    const MarksSent = assignmentMarks.filter(
      (mark) => mark.status === "published"
    ).length;

    content = (
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>{assignmentMarks.length}</span>
              </li>
              <li>
                Pending <span>{pendingMarksLength}</span>
              </li>
              <li>
                Mark Sent <span>{MarksSent}</span>
              </li>
            </ul>
            <div className="overflow-x-auto mt-4">
              <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th className="table-th">Assignment</th>
                    <th className="table-th">Date</th>
                    <th className="table-th">Student Name</th>
                    <th className="table-th">Repo Link</th>
                    <th className="table-th">Mark</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                  {/* single assignment */}

                  {assignmentMarks.map((mark) => (
                    <Assignment key={mark.id} mark={mark} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return content;
};

export default AssignmentMark;
