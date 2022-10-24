import { videoData } from "./Video";
import styled from "styled-components";
import { SmallItemCard } from "./ItemGridCard";
function ItemGrid({flag}){
    console.log(flag);
    if(flag === true){
        let itemList = getDistinctItemList();
        return <Items>
                {
                    itemList.map((item) => SmallItemCard(item))
                }
        </Items>
    }
    else return null;
}
function getDistinctItemList(){
    let result = {}
    let count = 0;
    for(let i = 0; i < videoData.lists.length; ++i){
        for(let j = 0; j < videoData.lists[i].items.length; ++j){
            result[videoData.lists[i].items[j].item.id] = videoData.lists[i].items[j];
            count += 1;
        }
    }
    console.log(Object.keys(result).length, count);
    console.log(Object.values(result));
    return Object.values(result);
}
export default ItemGrid;

const Items = styled.div`
    display:flex;
`;