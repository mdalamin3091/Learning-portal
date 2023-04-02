import React from "react";
import TextInput from "../../../components/shared/TextInput";
import TextArea from "../../../components/shared/TextArea";

const AddVideo = () => {
  return (
    <form style={{ width: "80%", margin: "0 auto", marginTop: "30px" }}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                type="text"
                placeholder="Enter video Title"
              />
            </div>
            <div className="col-span-6">
              <TextInput
                title="Video link"
                type="url"
                placeholder="Enter video link"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextArea
                title="Description"
                type="textarea"
                placeholder="Enter video description"
              />
            </div>

            <div className="col-span-6 lg:col-span-3">
              <TextInput
                title="Upload Date"
                placeholder="Enter video upload date"
              />
            </div>

            <div className="col-span-6 lg:col-span-3">
              <TextInput
                title="Video Duration"
                placeholder="Enter video duration"
              />
            </div>

            <div className="col-span-6 lg:col-span-3">
              <TextInput
                title="No of views of the video"
                placeholder="Enter the number of views of the videos"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddVideo;
