import { useEffect, useState } from 'react';
import './AddVideo.css';

const initialState = {
    time: "3 year ago",
    channel: "Channel 3 ",
    verified: true,
    title: '',
    views: ''
}

function AddVideo({ dispatch, editableVideo }) {

    const [video, setVideo] = useState(initialState)

    function handleSubmit(e) {
        // to pervent page refersh after clicking add video button
        e.preventDefault();

        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        }
        else {
            dispatch({ type: 'ADD', payload: video })
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
        <div>
        <form  >
            <input
                type="text"
                name='title'
                onChange={handleChange}
                placeholder='Title'
                value={video.title}
            />
            <input
                type="text"
                name='views'
                onChange={handleChange}
                placeholder='Views'
                value={video.views}
            />
            <button

                onClick={handleSubmit}

            > 
                {editableVideo ? 'Edit Video' : 'Add'}
            </button>

        </form>
        </div>
    )
}
export default AddVideo;