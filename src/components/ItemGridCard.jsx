import styled from "styled-components";

export function SmallItemCard(data, key) {
  return (
    <Item_card key={key}>
      <Item_image src={data.item.itemImgUrl}></Item_image>
    </Item_card>
  );
}

const Item_card = styled.div`
  width: 100px;
  height: 100px;
`;

const Item_image = styled.img`
  width: 60px;
  margin-right: 8px;
`;
