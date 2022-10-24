import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Youtube from "./Youtube";
import TaggedItemList from "./TaggedItemList";
import ItemGrid from "./ItemGrid";
import { getVideoInfoByURL } from "../service/video";
export let videoData;
export let timeline;
function Video(){
    const [index, setIndex] = useState(-1);
    const [isSuccess, setIsSuccess] = useState(false);
    let {videoId} = useParams();
    useEffect(()=>{
        setItems(videoId,setIsSuccess);
    },[]);
    return <VBody>
                <Ybody>
                    <Youtube urlId={videoId} currentIndex = {index} setCurrentIndex = {setIndex}></Youtube>
                    <TaggedItemList index = {index} ></TaggedItemList>
                </Ybody>
                <YFotter>
                    <ItemGrid flag = {isSuccess}></ItemGrid>
                </YFotter>
            </VBody>
}

export function getItems(curIndex){
    console.log(curIndex);
    if(curIndex != -1)
        return videoData.lists[curIndex].items;
    else
        return [];
}
async function setItems(urlId,setIsSuccess){
    let result = await getVideoInfoByURL(urlId);
    console.log(result);
    videoData = result;
    videoData.lists.sort((a, b) => {return a.times.start - b.times.start;});
    timeline = [];
    for(let i=0;i<result.lists.length;++i){
        timeline.push(parseInt(result.lists[i].times.start));
    }
    console.log(timeline);
    setIsSuccess(true);
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
const VBody = styled.div`

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;

`;

const Ybody = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
`;

const YFotter = styled.div`
    height:100px;
`;