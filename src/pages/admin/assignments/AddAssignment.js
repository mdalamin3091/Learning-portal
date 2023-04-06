import React, { useEffect, useState } from "react";
import TextInput from "../../../components/shared/TextInput";
import TextArea from "../../../components/shared/TextArea";
import {
  useAddAssignmentMutation,
  useGetAssignmentsQuery,
} from "../../../features/assignments/assignmentsApi";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import { useNavigate } from "react-router-dom";

const AddAssignment = () => {
  const { data: assignments, isSuccess } = useGetAssignmentsQuery();
  const { data: videos, isSuccess: isVideosSuccess } = useGetVideosQuery();
  const [unmatchedVideos, setUnmatchedVideos] = useState([]);
  const [addAssignment, data] = useAddAssignmentMutation();
  const [assignmentData, setAssignmentData] = useState({
    title: "",
    video_title: "",
    video_id: "",
    totalMark: "",
  });

  const navigate = useNavigate();

  //   set assignment data from input form
  const handleChange = (value, field) => {
    if (field === "video_id") {
      const selectedVideo = unmatchedVideos.find(
        (video) => video.id === Number(value)
      );
      setAssignmentData((prevData) => ({
        ...prevData,
        [field]: Number(value),
        video_title: selectedVideo.title,
      }));
    } else {
      setAssignmentData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  //set assignment and videos data  in local states after loading assignments and videos data from server 
  useEffect(() => {
    if (isSuccess && isVideosSuccess) {
      const filteredVideos = videos.filter((video) => {
        const assignment = assignments.find(
          (assignment) => Number(assignment.video_id) === Number(video.id)
        );
        return !assignment;
      });
      setUnmatchedVideos(filteredVideos);
    }
  }, [isSuccess, isVideosSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment(assignmentData);
    navigate("/admin/assignments");
  };

  return (
    <form
      style={{ width: "80%", margin: "0 auto", marginTop: "30px" }}
      onSubmit={handleSubmit}
    >
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                value={assignmentData.title}
                onChange={(e) => handleChange(e.target.value, "title")}
                style={{ color: "black" }}
                title="Assignment Title"
                type="text"
                placeholder="Enter Assignment Title"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Video Title
              </label>
              <select
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 text-gray-500"
                style={{ color: "black" }}
                required
                value={assignmentData.video_id}
                onChange={(e) => {
                  handleChange(e.target.value, "video_id");
                }}
              >
                <option value="" hidden>
                  Select Video Title
                </option>
                {unmatchedVideos.length > 0 ? unmatchedVideos.map((video) => (
                  <option key={video.id} value={video.id}>
                    {video.title}
                  </option>
                ))
                : <option value="">
                No videos found
              </option>
              }
              </select>
            </div>
            <div className="col-span-6">
              <TextInput
                value={assignmentData.totalMark}
                onChange={(e) => handleChange(Number(e.target.value), "totalMark")}
                style={{ color: "black" }}
                title="Total Marks"
                type="number"
                placeholder="Enter Total Marks"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Add Assignment
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddAssignment;
