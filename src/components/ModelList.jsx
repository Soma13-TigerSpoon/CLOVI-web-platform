import styled from "styled-components";

function ModelList({ datas, setIndex, setModelClick }) {
  return datas
    ? datas.map((data, index) => (
        <ModelChannelCard
          key={index}
          onClick={() => {
            setIndex(data.index);
            setModelClick(true);
          }}
        >
          <div className="modelInfo">
            <div className="modelInfo__name">{data.model.name}</div>
            {data.model.height_cm}cm {data.model.weight_kg}kg {data.videoUrl}{" "}
            {data.time}
          </div>
          <div className="channelInfo">
            <div>{data.channelName}</div>
            <a
              href={`https://www.youtube.com/watch?v=${data.videoUrl}&t=${data.time}s`}
              target="_blank"
              rel="noreferrer"
            >
              바로가기
            </a>
          </div>
        </ModelChannelCard>
      ))
    : "";
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
  .channelInfo {
    display: flex;
    flex-direction: column;
  }
`;
export default ModelList;
