import moment from "moment";
import React from "react";

const Assignment = ({ mark }) => {
  const { title, repo_link, createdAt, status, student_name } = mark;
  return (
    <tr>
      <td className="table-td">{title}</td>
      <td className="table-td">{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">
        {repo_link}
      </td>
      <td className="table-td input-mark">
        <input max="100" value="100" />
        {/* <td className="table-td">100</td> */}
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
      </td>
    </tr>
  );
};

export default Assignment;
