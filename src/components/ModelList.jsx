import styled from "styled-components";

function ModelList({ datas, setIndex }) {
  return datas.map((data) => (
    <ModelChannelCard
      onClick={() => {
        setIndex(data.index);
        console.log(data.index);
      }}
    >
      <div className="modelInfo">
        <div className="modelInfo__name">{data.model.name}</div>
        <ModelSpec>
          {data.model.height_cm}cm {data.model.weight_kg}kg
        </ModelSpec>
      </div>
      <ChannelInfo>
        <ChannelName>{data.channelName}</ChannelName>
        <DirectLink
          href={`https://www.youtube.com/watch?v=${data.videoUrl}&t=${data.time}s`}
          target="_blank"
        >
          바로가기
        </DirectLink>
      </ChannelInfo>
    </ModelChannelCard>
  ));
}

const ModelChannelCard = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  .modelInfo {
    display: flex;
    flex-direction: column;
  }
`;
const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModelSpec = styled.div``;
const ChannelName = styled.div``;
const DirectLink = styled.a``;

export default ModelList;