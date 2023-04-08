import moment from "moment";
import React, { useState } from "react";
import { useEditAssignmentMarkMutation } from "../../../features/assignmentMarks/assignmentMarksApi";

const Assignment = ({ mark: assignmentMark }) => {
  const { id, title, repo_link, createdAt, status, student_name, mark } =
    assignmentMark;
  const [inputMark, setInputMark] = useState("");
  const [editAssignmentMark] = useEditAssignmentMarkMutation();

  const handleSubmit = () => {
    if (!inputMark) return alert("mark cannot be empty");
    editAssignmentMark({
      id,
      data: { ...mark, mark: Number(inputMark), status: "published" },
    });
  };

  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">
        {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      </td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      <td className="table-td input-mark">
        {status === "pending" && (
          <input
            max="100"
            value={inputMark}
            placeholder="100"
            onChange={(e) => setInputMark(e.target.value)}
          />
        )}
        {status === "published" && <div className="table-td">{mark}</div>}
        {status === "pending" && (
          <span onClick={handleSubmit}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
        )}
      </td>
    </tr>
  );
};

export default Assignment;
