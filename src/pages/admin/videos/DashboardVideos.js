import React from "react";
import DashboardVideo from "../../../components/admin/dashboardVideos/DashboardVideo";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import Loader from "../../../components/Loader";
import Error from "../../../components/Error";

const DashboardVideos = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message="something error occured" />;
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="assignment not available! add assignments" />;
  } else if (!isLoading && !isError && videos?.length > 0) {
    content = (
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
            {videos.map((video, idx) => (
              <DashboardVideo key={idx} video={video} idx={idx}/>
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
            <Link to={"/admin/videos/addVideo"} className="btn ml-auto">
              Add Video
            </Link>
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};

export default DashboardVideos;
