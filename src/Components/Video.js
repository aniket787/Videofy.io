import { React, useState } from 'react'
import './Video.css'


function Video({ title, id, channel, views, time, verified, children, deleteVideo, editVideo }) {
    console.log('render Video')

    const [status, setStatus] = useState(false);

   function change(){

    setStatus(!status)
   }
   

    return (
        <>
            <div className='container'>

            <button className='close' onClick={()=> deleteVideo(id)}> X</button>
            <button className='edit' onClick={()=> editVideo(id)}> Edit</button>
                <div className='pic'>
                    <img
                        src={`https://picsum.photos/id/${id}/160/90`}
                        alt="Unknown Image " />
                </div>

                <div className="title" >{title}  </div>
                <div className="channel" >{channel}{verified ? '✅' : null} </div>
                <div className="views" >
                    {views} views <span>.</span> {time}
                </div>
                <div className='title-name'>
                    {children}
                </div>

                <button  className='subscribeButton' onClick={change}>
                     {status ? ' Subscribed ✔️' : 'Not Subscribed ⭕'}
                </button>
            </div>
        </>
    )
}
export default Video;