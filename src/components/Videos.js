import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import { useGetVideosQuery } from "../features/videos/videosApi";
import { Link } from "react-router-dom";

const Videos = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <Error message={"error occured try again"} />;
  } else if (!isLoading && !isError && videos.length === 0) {
    content = <Error message={"videos not available"} />;
  } else if (!isLoading && !isError && videos.length > 0) {
    content = videos?.map((video) => {
      const { id, title, views, duration } = video;
      return (
        <div className="flex flex-col w-full mb-8" key={id}>
          <Link to={`/coursePlayer/videos/${id}`}>
            <p className="text-slate-50 text-sm font-medium">{title}</p>
          </Link>
          <div>
            <span className="text-gray-400 text-xs mt-1">{duration} Mins</span>
            <span className="text-gray-400 text-xs mt-1"> | </span>
            <span className="text-gray-400 text-xs mt-1">{views}views</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {content}
    </div>
  );
};

export default Videos;
