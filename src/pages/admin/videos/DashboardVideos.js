import React from "react";
import DashboardVideo from "../../../components/admin/dashboardVideos/DashboardVideo";
import { Link } from "react-router-dom";

const DashboardVideos = () => {
  // const 
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-full px-5 lg:px-20">
        <div className="px-3 py-20 bg-opacity-10">
          <div className="w-full flex">
            <Link to={"/admin/videos/addVideo"} className="btn ml-auto">Add Video</Link>
            {/* <button className="btn ml-auto">Add Video</button> */}
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
              <thead>
                <tr>
                  <th className="table-th">Video Title</th>
                  <th className="table-th">Description</th>
                  <th className="table-th">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-600/50">
                <DashboardVideo />
                <DashboardVideo />
                <DashboardVideo />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardVideos;
