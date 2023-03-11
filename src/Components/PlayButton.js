import { useState } from 'react';
import './PlayButton.css';

function PlayButton({ children, onPlay, onPause }) {

    console.log('Render PlayButton')

    const [playing, setPlaying] = useState(false);

    function handleClick(e) {
        e.stopPropagation();

        if (playing) {
            onPause();
        }
        else {
            onPlay();
        }

        setPlaying(!playing);
    }

    return (
        <button onClick={handleClick} >{children} : {playing ? '⏸️' : '▶️'} 
        </button>
    )
}
export default PlayButton;