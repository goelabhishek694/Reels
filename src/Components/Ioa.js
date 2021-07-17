import React from 'react'
import Video from './Video'
import vid1 from "./fog.mp4"
import vid2 from "./fog.mp4"
import vid3 from "./fog.mp4"
import vid4 from "./fog.mp4"

function Ioa() {
    const[sources,setSources]=useState([{url:vid1},{url:vid2},{url:vid3},{url:vid4}]);
    const callback=entries=>{
        entries.forEach(element=>{
            console.log(element);
        });
    }
    const observer=new IntersectionObserver(callback,{
        threshold:0.9
    });
    return (
        <div className="video-container">
            <div className="videos">
                <Video>

                </Video>
            </div>
           
        </div>
    )
}

export default Ioa
