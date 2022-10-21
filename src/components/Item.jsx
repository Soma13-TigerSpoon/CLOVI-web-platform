import {getItems} from "./Video";
import styled from "styled-components";

function Items({index}){
    if(index == -1 ){
        return ;
    }
    let datas = getItems(index);
    //console.log(datas);
    let components = datas.map((data) => itemCard(data));
    //console.log(components);
    return components;
    
}
function itemCard(data){
    return <Card>
        <ShopPageLink data-item-id={data.item.id} target="_blank">
            <Clv_item>
                <Clv_item_img src={data.item.itemImgUrl}/>
                <Clv_item_info>
                    <Clv_name>
                    <Clv_brand_name>[{
                        data.item.brand
                    }]</Clv_brand_name>
                    <Clv_item_name>{data.item.name}</Clv_item_name>
                    </Clv_name>
                    <Clv_info_others>
                        <Clv_others_seller>
                            <Clv_seller_img src={
                            data.affiliationLink
                                ? data.affiliationLink.logoUrl
                                : data.item.shops.length > 0
                                ? data.item.shops[0].logoUrl
                                : ""
                            }/>
                            <Clv_seller_name>{
                            data.affiliationLink
                                ? data.affiliationLink.name
                                : data.item.shops.length > 0
                                ? data.item.shops[0].name
                                : "판매처를 찾을 수 없습니다."
                            }</Clv_seller_name>
                        </Clv_others_seller>
                        <Clv_others_right>
                            <Clv_right_price>{
                            data.affiliationLink
                                ? new Intl.NumberFormat().format(
                                    data.affiliationLink.price
                                )
                                : data.item.shops.length > 0
                                ? new Intl.NumberFormat().format(
                                    data.item.shops[0].price
                                )
                                : 0
                            }원</Clv_right_price>
                            <Clv_right_colorSize>{
                            data.item.color
                            }/{data.item.size}</Clv_right_colorSize>
                        </Clv_others_right>
                    </Clv_info_others>
                </Clv_item_info>
            </Clv_item>
        </ShopPageLink>
    </Card>
}
export default Items;

const ShopPageLink = styled.a`

`;

const Card = styled.div`
    width: 100%;
    margin-top: 1px;
    display: flex;
`;

const Clv_item = styled.div`
    background-color: white;
    padding: 8px;
    width: 336px;
    display: flex;
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }   
`;

const Clv_item_img = styled.img`
    width: 80px;
    margin-right: 8px;    
`;
const Clv_item_info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 0px;
    justify-content: space-between;
`;
const Clv_name = styled.div`
    font-size: 14px;
    font-weight: 500;
`;
const Clv_info_others = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
`;

const Clv_others_seller = styled.div`
  display: flex;
`;
const Clv_seller_img = styled.img`
  width: 12px;
  object-fit: contain;
  margin-right: 5px;
`;
const Clv_seller_name = styled.div`
  font-size: 12px;
  font-weight: 200;
`;
const Clv_others_right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Clv_right_price = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const Clv_right_colorSize = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 200;
`;
const Clv_brand_name = styled.span`
`
const Clv_item_name = styled.span`
`