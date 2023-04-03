
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";

const VideoPlayer = ({ video }) => {
  const { id, url, title, createdAt, duration, views, description } = video;
  const [isAssignment, setIsAssignment] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);
  
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          {title}
        </h1>
        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
          Uploaded on {moment(createdAt).format("ll")}
        </h2>

        <div className="flex gap-4">
          <a
            href="#"
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            এসাইনমেন্ট
          </a>

          <Link
            to="./Quiz/1"
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          {description}
        </p>
      </div>
    </div>
  )
}

export default VideoPlayer