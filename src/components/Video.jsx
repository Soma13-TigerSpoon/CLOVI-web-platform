import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Youtube from "./Youtube";
import { getVideoInfoByURL } from "../service/video";
let videoData;
export let timeline;
function Video(){
    const [index, setIndex] = useState(-1);
    let {videoId} = useParams();
    console.log(videoId);
    useEffect(()=>{
        setItems(videoId);
    },[]);
    return <div id="youtube_controller">
        <Youtube urlId={videoId} currentIndex = {index} setCurrentIndex = {setIndex}></Youtube>
    </div>
}

export function getItems(curIndex){
    console.log(curIndex);
    return videoData.lists[curIndex].items;
}
async function setItems(urlId){
    let result = await getVideoInfoByURL(urlId);
    console.log(result);
    videoData = result;
    timeline = [];
    for(let i=0;i<result.lists.length;++i){
        timeline.push(parseInt(result.lists[i].times.start));
    }
    timeline.sort((a, b) => {return a - b;});
    console.log(timeline);
}
export function getCurrentIndexByTime(currentItemId,currentTime){
    let newCurrentItemId;
    if (currentTime < timeline[0]) {
        newCurrentItemId = -1;
    } else {
        for (let i = timeline.length - 1; i > -1; i--) {
            if (currentTime >= timeline[i]) {
                newCurrentItemId = i;
                break;
            }
        }
    }
    if (newCurrentItemId != currentItemId) {
        currentItemId = newCurrentItemId;
    }
    return currentItemId;
}
export default Video;



