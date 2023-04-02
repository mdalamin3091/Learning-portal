import React from "react";
import DashboardAssignment from "../../../components/admin/dashboardAssignment/DashboardAssignment";
import { Link } from "react-router-dom";

const DashboardAssignments = () => {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/assignment/addAssignment"} className="btn ml-auto">Add Assignment</Link>
          </div>
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
                <DashboardAssignment />
                <DashboardAssignment />
                <DashboardAssignment />
                <DashboardAssignment />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardAssignments;
