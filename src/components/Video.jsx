import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Youtube from "./Youtube";
import { getVideoInfoByURL } from "../service/video";
let videoData;
let curIndex;
function Video(){
    const [index, setIndex] = useState(10);
    let {videoId} = useParams();
    console.log(videoId);
    useEffect(()=>{
        setItems(videoId);
    },[]);
    return <div id="youtube_controller">
        <Youtube urlId={videoId} ></Youtube>
        <DivBtn className='Btn_time'>
            <button id="left" onClick={() => {
                if(index!=0){
                    setIndex(index-1);
                    getItems(index);
                }
            }}>Left</button>
            <button id="right" onClick={() => {
                if(index!=videoData.lists.length){
                    setIndex(index+1);
                    getItems(index);
                }
            }}>Right</button>
        </DivBtn>
    </div>
}
function getItems(curIndex){

}
async function setItems(urlId){
    let result = await getVideoInfoByURL(urlId);
    videoData = result;
    console.log(videoData.lists.length);
}

export default Video;


const DivBtn = styled.div`
    width: 600px;
    display : flex;
    justify-content: space-between;
`

