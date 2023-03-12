import React, { useState } from 'react';
import Video from './Components/Video';
import './App.css';
import videoDB from './data/data';
import PlayButton from './Components/PlayButton';
import Counter from './Components/Counter';
import AddVideo from './Components/AddVideo';



function App() {
  console.log('Render App')

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className='App' onClick={() => console.log('App')} >

      <AddVideo> </AddVideo> 

      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >

          <PlayButton
            onPlay={() => console.log('Playing', video.title)}
            onPause={() => console.log('Paused', video.title)}
          > 
            {video.title}
          </ PlayButton >

        </Video>)
      }

     
    </div>
  )
}
export default App;