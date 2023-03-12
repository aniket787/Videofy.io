function AddVideo() {
    return (
        <form  >
            <input type="text" />
            <input type="text" />
            <button
                onClick={() => {

                    // setVideos([...videos, {
                    //     id: videos.length + 1,
                    //     title: "TypeScript js Tutorial",
                    //     views: "910k",
                    //     time: "3 year ago",
                    //     channel: "Channel 3 ",
                    //     verified: true
                    // }
                    // ])
                }
                }
            > 
            Add Videos </button>
        </form>
    )
}
export default AddVideo;