import React from "react";
import TextInput from "../../../components/shared/TextInput";
import TextArea from "../../../components/shared/TextArea";

const AddVideo = () => {
  return (
    // <form method="POST">
    //   <div className="shadow overflow-hidden sm:rounded-md">
    //     <div className="px-4 py-5 bg-white sm:p-6">
    //       <div className="grid grid-cols-6 gap-6">
    //         <div className="col-span-6 sm:col-span-3">
    //           <TextInput
    //             title="Video Title"
    //             type="text"
    //           />
    //         </div>
    //         <div className="col-span-6">
    //           <TextInput title="Video link" type="url" />
    //         </div>

    //         <div className="col-span-12">
    //           <TextArea title="Description" type="textarea" />
    //         </div>

    //         <div className="col-span-6 sm:col-span-6 lg:col-span-2">
    //           <TextInput title="Upload Date" />
    //         </div>

    //         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
    //           <TextInput title="Video Duration" />
    //         </div>

    //         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
    //           <TextInput title="No of views of the video" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    //       <button
    //         type="submit"
    //         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </form>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:max-w-md sm:mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="title">
          Video Title
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter video title" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="link">
          Video Link
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="link" type="text" placeholder="Enter video link" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">
          Video Description
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter video description"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="views">
          Views
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="views" type="number" placeholder="Enter views" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="duration">
          Duration
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="duration" type="text" placeholder="Enter duration" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="createdAt">
          Created At
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="createdAt" type="date" placeholder="Enter created at date" />
      </div>
      <div class="flex items-center justify-center sm:justify-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </form>


  );
};

export default AddVideo;
