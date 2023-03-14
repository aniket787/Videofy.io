import React, { useState } from 'react';

import './App.css';
import videoDB from './data/data';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';



function App() {
  console.log('Render App')

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([
      ...videos, 
      {...video, id: videos.length + 2}
    
    ])
  }

  return (
    <div className='App' onClick={() => console.log('App')} >

      <AddVideo addVideos={addVideos} > </AddVideo> 

      <VideoList videos={videos} ></VideoList>

     
    </div>
  )
}
export default App;