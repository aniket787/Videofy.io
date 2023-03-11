import React, { useState } from 'react'
import './Video.css'


function Video({ title, id, channel, views, time, verified, children }) {
    console.log('render Video')

    const [status, setSubscribed] = useState("Not Subscribed");

    const ani = false;
    function fun() {
        setSubscribed(!ani);
        setSubscribed("Subscribed")
    }

    return (
        <>
            <div className='container'>
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

                <div className='subscribe-button'>
                    <button onClick={fun}> {status}  </button>
                </div>
            </div>



        </>
    )
}
export default Video;