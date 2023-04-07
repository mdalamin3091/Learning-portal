import { apiSlice } from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
        }),

        getVideo: builder.query({
            query: (id = 1) => `/videos/${id}`,
        }),

        addVideo: builder.mutation({
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body: data,
            }),

            //   pessimistic update videos cache after adding a video
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const { data: video } = await queryFulfilled;
                try {
                    dispatch(
                        apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
                            draft.push(video);
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        editVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                const { data: updatedVideo } = await queryFulfilled;
                try {
                    
                    // update all videos 
                    dispatch(
                        apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
                            const idx = draft.findIndex((vdo) => vdo.id == updatedVideo.id);
                            draft.splice(idx, 1, updatedVideo);
                        })
                    );

                    // update single video
                    dispatch(
                        apiSlice.util.updateQueryData("getVideo", id, (draft) => {

                            // replace previous object values by updated values
                            const updatedDraft = { ...draft, ...updatedVideo }
                            return updatedDraft
                        })
                    )

                } catch (err) {
                    console.log(err);
                }
            },
        }),

        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE",
            }),

            // optimistic update videos cache after deleting a video
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
                        return draft.filter((video) => video.id != arg);
                    })
                );

                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const {
    useGetVideoQuery,
    useGetVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation,
    useDeleteVideoMutation,
} = videosApi;
