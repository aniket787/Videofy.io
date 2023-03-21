import React, { useState, useReducer, useContext } from 'react';

import './App.css';
import videoDB from './data/data';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import ThemeContext from './context/ThemeContext';



function App() {
  console.log('Render App')

  const [editableVideo, setEditableVideo] = useState(null);

  const [mode, setMode] = useState('darkMode');

  function videoReducer(videos, action) {

  switch(action.type){
  case 'ADD':
    return [
      ...videos,
      { ...action.payload, id: videos.length + 2 }

    ]

   case 'DELETE':
    return videos.filter(video => video.id !== action.payload);


    case 'UPDATE':
       
    const index = videos.findIndex(vid => vid.id === action.payload.id)
    const newVideos = [...videos]
    newVideos.splice(index, 1, action.payload)

    setEditableVideo(null);

    return newVideos;

    default :
    return videos
}
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB)

  // const [videos, setVideos] = useState(videoDB);
  // const [editableVideo, setEditableVideo] = useState(null);

  // function addVideos(video) {
  //   // action
  //   dispatch({ type: 'ADD', payload: video })


  //   // setVideos([
  //   //   ...videos, 
  //   //   {...video, id: videos.length + 2}
    
  //   // ])
  // }

  // function deleteVideo(id) {

  //   // dispatch({ type: 'DELETE', payload: id })
  //   // setVideos(videos.filter(video => video.id !== id))

  // }





  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id))
  }

  // function updateVideo(video) {
    

  //   // const index = videos.findIndex(vid => vid.id === video.id)
  //   // const newVideos = [...videos]
  //   // newVideos.splice(index, 1, video)

  //   // setVideos(newVideos)
  // }


  return (

    <ThemeContext.Provider value={mode}>

    <button onClick={()=> setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}> Mode </button>
    <div className={`App ${mode}`} onClick={() => console.log('App')} >


      <AddVideo
        dispatch={dispatch}
        editableVideo={editableVideo}
      > </AddVideo> 

      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>


    </div>
    </ThemeContext.Provider>




  )
}
export default App;