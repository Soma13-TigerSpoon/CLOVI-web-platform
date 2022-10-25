import styled from "styled-components";

function ModelList({datas, setIndex}){
    let components = datas.map((data) => modelCard(data,setIndex));
    //console.log(components);
    return components;
}
function modelCard(data,setIndex){
    return <ModelChannelCard onClick={()=>{
        setIndex(data.index);
        console.log(data.index);
    }}>
        <ModelInfo>
            <ModelName>{data.model.name}</ModelName>
            <ModelSpec>{data.model.height_cm}cm  {data.model.weight_kg}kg</ModelSpec>
        </ModelInfo>
        <ChannelInfo>
            <ChannelName>{data.channelName}</ChannelName>
            <DirectLink href={`https://www.youtube.com/watch?v=${data.videoUrl}&t=${data.time}s`} target="_blank">바로가기</DirectLink>
        </ChannelInfo>
    </ModelChannelCard>
    
}
const ModelChannelCard = styled.div`
    width:600px;
    display:flex;
    justify-content: space-evenly;
    cursor:pointer;
`;
const ModelInfo = styled.div`
    display:flex;
    flex-direction: column;
`;
const ChannelInfo = styled.div`
    display:flex;
    flex-direction: column;
`;
const ModelName = styled.div`
`;
const ModelSpec = styled.div`
`;
const ChannelName = styled.div`
`;
const DirectLink = styled.a`
`;

export default ModelList;