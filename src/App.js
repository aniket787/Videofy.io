import React, { useState } from 'react';
import Video from './Components/Video';
import './App.css';
import videoDB from './data/data';
import PlayButton from './Components/PlayButton';
import Counter from './Components/Counter';



function App() {
  console.log('Render App')

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className='App' onClick={() => console.log('App')} >
      <div>
        {/* // video adding
      // React original state update nahi karta so we make a copy of original array
      // one video will get added after clicking  it indicates it updates whole dom again and again */}
        <button onClick={() => {

          setVideos([...videos, {
            id: videos.length + 1,
            title: "TypeScript js Tutorial",
            views: "910k",
            time: "3 year ago",
            channel: "Channel 3 ",
            verified: true
          }
          ])
        }}> Add Videos </button>
      </div>

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
      <div style={{ clear: 'both' }}>
        {/* <PlayButton onPlay={() => console.log('Playyyyy')} onPause={() => console.log('pause')} message="Hii...1.play"> Play </PlayButton > */}
        {/* <PlayButton onClick={() => console.log('Pause')} message="Hii...2.pause" >Pause </PlayButton > */}
      </div>

      <Counter />

    </div>
  )
}
export default App;