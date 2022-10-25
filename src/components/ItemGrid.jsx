import styled from "styled-components";
function ItemGrid({ videoData }) {
  let itemList = getDistinctItemList(videoData);
  return (
    <Items>
      {itemList.map((item, index) => (
        <div key={index}>
          <img src={item.item.itemImgUrl} alt="item"></img>
        </div>
      ))}
    </Items>
  );
}
function getDistinctItemList(videoData) {
  if(videoData){
    let result = {};
    let count = 0;
    for (let i = 0; i < videoData.lists.length; ++i) {
      for (let j = 0; j < videoData.lists[i].items.length; ++j) {
        result[videoData.lists[i].items[j].item.id] = videoData.lists[i].items[j];
        count += 1;
      }
    }
    console.log(Object.keys(result).length, count);
    console.log(Object.values(result));
    return Object.values(result);
  }else{
    return [];
  }
}
export default ItemGrid;

const Items = styled.div`
  display: flex;
`;