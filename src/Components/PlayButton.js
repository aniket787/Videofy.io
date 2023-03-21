import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import './PlayButton.css';

function PlayButton({ children, onPlay, onPause, countChange }) {

    console.log('Render PlayButton')

    const theme = useContext(ThemeContext)

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
        <>
        <button className={theme} onClick={handleClick} >{children} : {playing ? '⏸️' : '▶️'} 
        </button>
        </>
    )
}
export default PlayButton;