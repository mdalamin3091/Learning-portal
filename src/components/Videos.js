
import React from 'react'
import Video from './Video'
import Loader from './Loader';
import Error from './Error';
import { useGetVideosQuery } from '../features/videos/videosApi';

const Videos = ({videos, isLoading, isError}) => {
    // const { data: videos, isLoading, isError, isSuccess } = useGetVideosQuery();
    let content;
    if (isLoading) {
        content = <Loader />;
    } else if (!isLoading && isError) {
        content = <Error message={"error occured try again"} />;
    } else if (!isLoading && !isError && videos.length === 0) {
        content = <Error message={"videos not available"} />;
    } else if (!isLoading && !isError && videos.length > 0) {
        content = videos?.map((video) => (
            <Video video={video} key={video.id} />
        ));
    }

    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
            {content}
        </div>
    )
}

export default Videos