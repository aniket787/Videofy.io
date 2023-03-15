import { useEffect, useState } from 'react';
import './AddVideo.css';

const initialState = {
    time: "3 year ago",
    channel: "Channel 3 ",
    verified: true,
    title: '',
    views: ''
}

function AddVideo({ addVideos, updateVideo, editableVideo }) {

    const [video, setVideo] = useState(initialState)

    function handleSubmit(e) {
        // to pervent page refersh after clicking add video button
        e.preventDefault();

        if (editableVideo) {
            updateVideo(video)
        }
        else {
            addVideos(video)
        }

        setVideo(initialState)
    }

    function handleChange(e) {

        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])

    return (
        <form  >
            <input type="text" name='title' onChange={handleChange} placeholder='Title' value={video.title} />
            <input type="text" name='views' onChange={handleChange} placeholder='Views' value={video.views} />
            <button

                onClick={handleSubmit}

            > 
                {editableVideo ? 'Edit Video' : 'Add'} </button>
        </form>
    )
}
export default AddVideo;