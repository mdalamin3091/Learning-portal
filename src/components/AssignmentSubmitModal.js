import React from "react";
import TextInput from "./shared/TextInput";

const AssignmentSubmitModal = ({ isOpen, closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div
      className="form-container"
      style={{
        display: `${isOpen ? "block" : "none"}`,
      }}
    >
      <form className="form-modal" onSubmit={handleSubmit}>
        <h3 className="text-center text-3xl font-bold">Submit Your Assignment </h3>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Repository Link"
                  type="text"
                  placeholder="Enter repository link"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Submit
              </button>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={() => closeModal()}
                type="button"
                className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cencel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssignmentSubmitModal;
