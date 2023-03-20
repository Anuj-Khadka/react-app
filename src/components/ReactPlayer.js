import React from 'react'
import ReactPlayer from 'react-player/youtube'

function ReactPlayerApp() {
  return (
    <VideoPlayer />
  )
}


const VideoPlayer = ()=>{
    const vidUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    return (<ReactPlayer url={vidUrl} height={300} volumn={0.5}/>)
}


export default ReactPlayerApp