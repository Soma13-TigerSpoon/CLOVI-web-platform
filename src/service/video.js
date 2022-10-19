import { setPostConnection } from "../utils/common.js";

export function getVideoInfoById(videoId){
    ;
}
export async function getVideoInfoByURL(videoUrlId){
    const response = await fetch("https://api.clovi.app/api/v1/videos?videoUrl=" + videoUrlId);
    const result = await response.json();
    return result.data;
}