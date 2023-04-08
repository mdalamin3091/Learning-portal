import React, { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import Videos from "../../components/Videos";
import {
  useGetVideoQuery,
  useGetVideosQuery,
} from "../../features/videos/videosApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useParams } from "react-router-dom";

const CoursePlayer = () => {
  const { id } = useParams();
  const { data: videos, isLoading, isError, isSuccess } = useGetVideosQuery();
  const {
    data: video,
    isLoading: isVideoLoading,
    isError: isVideoError,
  } = useGetVideoQuery(id);
  const [isOpen, setIsOpen] = useState(false);
  let content;
  if (isVideoLoading) {
    content = <Loader />;
  } else if (!isVideoLoading && isVideoError) {
    content = <Error message="error occured" />;
  } else if (!isVideoLoading && !isVideoError && !video?.id) {
    content = <Error message={"video not found"} />;
  } else if (!isVideoLoading && !isVideoError && video?.id) {
    content = (
      <VideoPlayer video={video} isOpen={isOpen} setIsOpen={setIsOpen} />
    );
  }

  return (
    <section className={`py-6 bg-${isOpen ? "black" : "primary"}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          {content}
          <Videos videos={videos} isLoading={isLoading} isError={isError} />
        </div>
      </div>
    </section>
  );
};

export default CoursePlayer;
